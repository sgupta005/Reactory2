'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heart, Eye, User } from 'lucide-react';
import { motion } from 'motion/react';
import { formatDistanceToNow } from 'date-fns';

type ComponentHeaderProps = {
  name: string;
  description: string | null;
  createdAt: Date | null;
  author: {
    id: string;
    name: string | null;
    email: string;
    image: string | null;
  } | null;
};

export default function ComponentHeader({
  name,
  description,
  createdAt,
  author,
}: ComponentHeaderProps) {
  // Placeholder data for likes and views
  const likes = 42;
  const views = 189;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-3xl font-bold tracking-tight"
          >
            {name}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-2 text-muted-foreground"
            >
              {description}
            </motion.p>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="flex items-center gap-4 text-sm"
        >
          <div className="flex items-center gap-1.5">
            <Heart className="h-4 w-4 text-primary" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Eye className="h-4 w-4 text-primary" />
            <span>{views}</span>
          </div>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Heart className="h-4 w-4" />
            Like
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="mt-6 flex items-center gap-3"
      >
        <Avatar className="h-8 w-8">
          {author?.image ? (
            <AvatarImage src={author.image} alt={author.name || 'User'} />
          ) : (
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          )}
        </Avatar>
        <div>
          <p className="text-sm font-medium">{author?.name || 'Anonymous'}</p>
          {createdAt && (
            <p className="text-xs text-muted-foreground">
              Created {formatDistanceToNow(createdAt, { addSuffix: true })}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
