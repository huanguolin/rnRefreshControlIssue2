import {useCallback, useMemo, useState} from 'react';

export function useGlobalData() {
  const [refreshing, setRefreshing] = useState(false);

  const refetch = useCallback(async () => {
    try {
      setRefreshing(true);
      await mockFetchData();
    } catch (error) {
      // ignored error
    } finally {
      setRefreshing(false);
    }
  }, []);

  return useMemo(
    () => ({
      refreshing,
      refetch,
    }),
    [refetch, refreshing],
  );
}

async function mockFetchData() {
  console.log('refresh() start:', Date.now());
  await new Promise(r => setTimeout(r, 3000));
  console.log('refresh()   end:', Date.now());
}
