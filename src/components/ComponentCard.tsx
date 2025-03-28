'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThumbsUp, Eye, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ComponentCardProps {
  id: string;
  title: string;
  description: string;
  upvotes: number;
  views: number;
  imageUrl: string;
}

export function ComponentCard({
  id,
  title,
  description,
  upvotes,
  views,
  imageUrl,
}: ComponentCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Link href={`/component/${id}`} className="block h-full">
        <Card className="h-full overflow-hidden border-2 border-muted rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:bg-muted/50 group">
          <CardHeader className="p-4 overflow-hidden">
            <div className="rounded-lg overflow-hidden bg-muted h-[180px] w-full relative group-hover:shadow-inner">
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-2">
            <CardTitle className="line-clamp-1 text-lg font-bold group-hover:text-primary transition-colors duration-200">
              {title}
            </CardTitle>
            <p className="line-clamp-2 text-sm text-muted-foreground mt-2 group-hover:text-foreground/80 transition-colors duration-200">
              {description}
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between border-t border-border/50 mt-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 group-hover:text-primary transition-colors duration-200"
                >
                  <ThumbsUp className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium">{upvotes}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{views}</span>
              </div>
            </div>
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="ml-auto"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 opacity-70 group-hover:opacity-100 group-hover:text-primary transition-all duration-200"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
