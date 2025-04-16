'use client';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { ComponentCard } from '@/features/show-components/components/ComponentCard';
import { useState } from 'react';

function ProfileComponents({
  isOwnProfile,
  components,
}: {
  isOwnProfile: boolean;
  components: any;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const componentsPerPage = 6;
  const totalPages = Math.ceil(components.length / componentsPerPage);
  const startIndex = (currentPage - 1) * componentsPerPage;
  const endIndex = startIndex + componentsPerPage;
  const currentComponents = components.slice(startIndex, endIndex);
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
  return (
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
            <h2 className="text-2xl font-bold">Components</h2>
            {isOwnProfile && (
              <Button asChild>
                <Link href="/submit/details">Upload Component</Link>
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {currentComponents.map((component: any, index: any) => (
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
  );
}

export default ProfileComponents;
