import { useState, useEffect } from 'react';
import { getComponentData, ComponentWithFiles } from '../actions';

export function useComponentData(componentId: string) {
  const [data, setData] = useState<ComponentWithFiles | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);

      try {
        const result = await getComponentData(componentId);

        if (result.error) {
          setError(result.error);
          setData(null);
        } else {
          setData(result);
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching component:', err);
        setError('Failed to load component data');
        setData(null);
      } finally {
        setIsLoading(false);
      }
    }

    if (componentId) {
      fetchData();
    }
  }, [componentId]);

  return { data, isLoading, error };
}
