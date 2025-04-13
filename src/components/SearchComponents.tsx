import { Search as SearchIcon } from 'lucide-react';
import Link from 'next/link';
import * as motion from 'motion/react-client';

export default function SearchComponents() {
  return (
    <>
      {/* Search Bar */}
      <motion.div
        className="mt-10 max-w-2xl mx-auto relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="flex items-center bg-muted rounded-full overflow-hidden pl-6 border border-border">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 py-3 px-2 bg-transparent outline-none"
          />
          <div className="flex items-center">
            <motion.button
              className="bg-primary p-3 text-primary-foreground rounded-full m-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SearchIcon size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Trending Searches */}
      <motion.div
        className="mt-6 flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <span className="text-muted-foreground mr-2">Trending searches:</span>
        {['buttons', 'cards', 'navigation', 'forms', 'tables', 'modals'].map(
          (item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
            >
              <Link
                href={`/search?q=${item}`}
                className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          )
        )}
      </motion.div>
    </>
  );
}
