'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Eye, Package } from 'lucide-react';

function CardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  );
}

function ProfileStats({ user }: { user: any }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <CardWrapper>
        <Card className="bg-gradient-to-br from-card to-card/80 cursor-pointer">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground">Total Views</p>
                <h3 className="text-3xl font-bold mt-2">
                  {user.totalViews >= 1000
                    ? `${(user.totalViews / 1000).toFixed(1)}k`
                    : user.totalViews}
                </h3>
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <Eye className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </CardWrapper>

      <CardWrapper>
        <Card className="bg-gradient-to-br from-card to-card/80 cursor-pointer">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground">Total Likes</p>
                <h3 className="text-3xl font-bold mt-2">
                  {user.totalHearts >= 1000
                    ? `${(user.totalHearts / 1000).toFixed(1)}k`
                    : user.totalHearts}
                </h3>
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <Heart className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </CardWrapper>

      <CardWrapper>
        <Card className="bg-gradient-to-br from-card to-card/80 cursor-pointer">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground">Components</p>
                <h3 className="text-3xl font-bold mt-2">
                  {user.componentsCount}
                </h3>
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <Package className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </CardWrapper>
    </motion.div>
  );
}

export default ProfileStats;
