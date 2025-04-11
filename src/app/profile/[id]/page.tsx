'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ComponentCard } from '@/features/show-components/components/ComponentCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useSession } from 'next-auth/react';
import {
  Calendar,
  Heart,
  Eye,
  Package,
  ChevronLeft,
  ChevronRight,
  Users,
  UserPlus,
  Upload,
  PenSquare,
} from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { useParams } from 'next/navigation';
import { formatDate } from '@/lib/utils';
// Sample data - would be replaced with real data from API
const SAMPLE_USER = {
  id: '1',
  name: 'React Master',
  image: '',
  bio: 'UI/UX developer focused on creating beautiful and functional React components. I love to share what I create with the community.',
  followers: 342,
  following: 125,
  joinedDate: '2023-04-12',
  totalViews: 28550,
  totalHearts: 1250,
  componentsCount: 24,
};

const SAMPLE_COMPONENTS = [
  {
    id: 'responsive-navbar',
    title: 'Responsive Navbar',
    description: 'Clean and responsive navigation with mobile menu',
    author: 'ReactMaster',
    hearts: 482,
    views: 4200,
  },
  {
    id: 'data-table',
    title: 'Data Table',
    description: 'Sortable and filterable table component with pagination',
    author: 'ReactMaster',
    hearts: 593,
    views: 6800,
  },
  {
    id: 'modal-dialog',
    title: 'Modal Dialog',
    description: 'Accessible modal with animations and backdrop',
    author: 'ReactMaster',
    hearts: 347,
    views: 3500,
  },
  {
    id: 'form-builder',
    title: 'Form Builder',
    description: 'Dynamic form with validation and custom inputs',
    author: 'ReactMaster',
    hearts: 268,
    views: 2900,
  },
  {
    id: 'notification-toast',
    title: 'Notification Toast',
    description: 'Customizable toast notifications with auto-dismiss',
    author: 'ReactMaster',
    hearts: 425,
    views: 4800,
  },
  {
    id: 'theme-switcher1',
    title: 'Theme Switcher',
    description: 'Dark/light mode toggle with system preference detection',
    author: 'ReactMaster',
    hearts: 312,
    views: 3200,
  },
  {
    id: 'theme-switcher2',
    title: 'Theme Switcher',
    description: 'Dark/light mode toggle with system preference detection',
    author: 'ReactMaster',
    hearts: 312,
    views: 3200,
  },
  {
    id: 'theme-switcher3',
    title: 'Theme Switcher',
    description: 'Dark/light mode toggle with system preference detection',
    author: 'ReactMaster',
    hearts: 312,
    views: 3200,
  },
  {
    id: 'theme-switcher4',
    title: 'Theme Switcher',
    description: 'Dark/light mode toggle with system preference detection',
    author: 'ReactMaster',
    hearts: 312,
    views: 3200,
  },
  {
    id: 'theme-switcher5',
    title: 'Theme Switcher',
    description: 'Dark/light mode toggle with system preference detection',
    author: 'ReactMaster',
    hearts: 312,
    views: 3200,
  },
  {
    id: 'theme-switcher6',
    title: 'Theme Switcher',
    description: 'Dark/light mode toggle with system preference detection',
    author: 'ReactMaster',
    hearts: 312,
    views: 3200,
  },
];

function ProfilePage() {
  const { data: session } = useSession();
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState({ ...SAMPLE_USER });
  const componentsPerPage = 6;

  const isOwnProfile = false;

  // Pagination logic
  const totalPages = Math.ceil(SAMPLE_COMPONENTS.length / componentsPerPage);
  const startIndex = (currentPage - 1) * componentsPerPage;
  const endIndex = startIndex + componentsPerPage;
  const currentComponents = SAMPLE_COMPONENTS.slice(startIndex, endIndex);
  console.log(startIndex, endIndex, currentComponents);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSaveProfile = () => {
    // Would normally save to database
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 pt-8 pb-20">
        {/* Profile Header */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {!isEditing ? (
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <Avatar className="h-32 w-32 border-4 border-background shadow-md">
                  <AvatarImage src={SAMPLE_USER.image} alt={SAMPLE_USER.name} />
                  <AvatarFallback className="text-4xl">
                    {SAMPLE_USER.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>

              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between mb-4">
                  <h1 className="text-3xl font-bold">{SAMPLE_USER.name}</h1>
                  <div className="flex gap-2">
                    {isOwnProfile ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(true)}
                        className="gap-1"
                      >
                        <PenSquare className="w-4 h-4" />
                        Edit Profile
                      </Button>
                    ) : (
                      <Button size="sm" className="gap-1">
                        <UserPlus className="w-4 h-4" />
                        Follow
                      </Button>
                    )}
                    {isOwnProfile && (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="gap-1"
                        asChild
                      >
                        <Link href="/submit/details">
                          <Upload className="w-4 h-4" />
                          Upload Component
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 max-w-3xl">
                  {SAMPLE_USER.bio}
                </p>

                <div className="flex gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    <Package className="w-4 h-4 text-primary" />
                    <span>
                      <strong>{SAMPLE_USER.componentsCount}</strong> components
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    <span>
                      <strong>{SAMPLE_USER.followers}</strong> followers
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    <span>
                      <strong>{SAMPLE_USER.following}</strong> following
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Joined {formatDate(SAMPLE_USER.joinedDate)}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
                <CardDescription>
                  Update your profile information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name">Name</label>
                  <Input
                    id="name"
                    value={editableUser.name}
                    onChange={(e) =>
                      setEditableUser({ ...editableUser, name: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="bio">Bio</label>
                  <Textarea
                    id="bio"
                    value={editableUser.bio}
                    onChange={(e) =>
                      setEditableUser({ ...editableUser, bio: e.target.value })
                    }
                    rows={4}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSaveProfile}>Save Changes</Button>
              </CardFooter>
            </Card>
          )}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-card to-card/80 cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground">Total Views</p>
                    <h3 className="text-3xl font-bold mt-2">
                      {SAMPLE_USER.totalViews >= 1000
                        ? `${(SAMPLE_USER.totalViews / 1000).toFixed(1)}k`
                        : SAMPLE_USER.totalViews}
                    </h3>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-card to-card/80 cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground">Total Likes</p>
                    <h3 className="text-3xl font-bold mt-2">
                      {SAMPLE_USER.totalHearts >= 1000
                        ? `${(SAMPLE_USER.totalHearts / 1000).toFixed(1)}k`
                        : SAMPLE_USER.totalHearts}
                    </h3>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-card to-card/80 cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground">Components</p>
                    <h3 className="text-3xl font-bold mt-2">
                      {SAMPLE_USER.componentsCount}
                    </h3>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Tabs and Components */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Tabs defaultValue="components">
            <TabsList className="mb-6">
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="collections">Collections</TabsTrigger>
            </TabsList>

            <TabsContent value="components" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">My Components</h2>
                {isOwnProfile && (
                  <Button asChild>
                    <Link href="/submit/details">Upload Component</Link>
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {currentComponents.map((component, index) => (
                  <ComponentCard
                    key={component.id}
                    id={component.id}
                    title={component.title}
                    description={component.description}
                    author={component.author}
                    hearts={component.hearts}
                    views={component.views}
                    index={index}
                  />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-10 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="flex items-center px-4 text-sm">
                    Page {currentPage} of {totalPages}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent
              value="collections"
              className="min-h-[300px] flex items-center justify-center text-muted-foreground"
            >
              No collections yet. Coming soon!
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
}

export default ProfilePage;
