import Link from 'next/link';
import { Heart, Code2, Eye } from 'lucide-react';
import * as motion from 'motion/react-client';

interface ComponentCardProps {
  title: string;
  description: string;
  author: {
    name: string;
    image: string;
  };
  hearts: number;
  views: number;
  id: string;
  index: number;
}

export function ComponentCard({
  title,
  description,
  author,
  hearts,
  views,
  id,
  index,
}: ComponentCardProps) {
  // Sample gradient backgrounds for the component previews
  const gradients = [
    'bg-gradient-to-br from-blue-500/20 to-purple-500/20',
    'bg-gradient-to-br from-cyan-500/20 to-blue-500/20',
    'bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20',
    'bg-gradient-to-br from-indigo-500/20 to-blue-500/20',
    'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
    'bg-gradient-to-br from-purple-500/20 to-indigo-500/20',
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <Link href={`/component/${id}`} className="group h-full block">
      <motion.div
        className="rounded-xl overflow-hidden border border-border group-hover:border-primary/50 transition-colors h-full flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        whileHover={{ y: -5 }}
      >
        <div
          className={`aspect-video ${gradient} flex items-center justify-center p-6`}
        >
          <div className="w-full h-full rounded bg-card/80 flex items-center justify-center relative group-hover:shadow-md transition-all">
            <Code2 className="text-primary h-8 w-8" />
            <motion.div
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="bg-background/90 p-1.5 rounded-full">
                <Heart className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between">
            <h3 className="font-medium">{title}</h3>
            <div className="text-muted-foreground text-sm flex items-center gap-1">
              <Heart className="h-4 w-4" />{' '}
              {hearts >= 1000 ? `${(hearts / 1000).toFixed(1)}k` : hearts}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-1 flex-grow">
            {description}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-[10px] text-accent-foreground font-bold">
                {author.name.substring(0, 2).toUpperCase()}
              </div>
              <span className="text-sm">{author.name}</span>
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              <Eye className="h-4 w-4" />
              {views >= 1000 ? `${(views / 1000).toFixed(1)}k` : views} views
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
