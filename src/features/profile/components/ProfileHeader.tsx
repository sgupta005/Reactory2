'use client';

import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Avatar } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';
import {
  PenSquare,
  UserPlus,
  Upload,
  Calendar,
  Package,
  Users,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type ProfileHeaderProps = {
  isOwnProfile: boolean;
  user: any;
  isLoggedIn: boolean;
};

function ProfileHeader({ isOwnProfile, user, isLoggedIn }: ProfileHeaderProps) {
  const router = useRouter();
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0">
          <Avatar className="h-32 w-32 border-4 border-background shadow-md">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback className="text-4xl">
              {user.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between mb-4">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <div className="flex gap-2">
              {isOwnProfile && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push('/edit')}
                  className="gap-1"
                >
                  <PenSquare className="w-4 h-4" />
                  Edit Profile
                </Button>
              )}
              {!isOwnProfile && isLoggedIn && (
                <Button size="sm" className="gap-1">
                  <UserPlus className="w-4 h-4" />
                  Follow
                </Button>
              )}
              {isOwnProfile && (
                <Button variant="secondary" size="sm" className="gap-1" asChild>
                  <Link href="/submit/details">
                    <Upload className="w-4 h-4" />
                    Upload Component
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <p className="text-muted-foreground mb-4 max-w-3xl">{user.bio}</p>

          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-1">
              <Package className="w-4 h-4 text-primary" />
              <span>
                <strong>{user.componentsCount}</strong> components
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-primary" />
              <span>
                <strong>{user.followers}</strong> followers
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-primary" />
              <span>
                <strong>{user.following}</strong> following
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Joined {formatDate(user.joinedDate)}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProfileHeader;
