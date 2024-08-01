import {QueryClient, useQuery} from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const KEY = 'global-data';

export function useData() {
  return useQuery({
    queryKey: [KEY],
    queryFn: mockFetchData,
    initialData: [1, 2, 3],
    initialDataUpdatedAt: Date.now(),
    staleTime: 5 * 60 * 1000,
  });
}

export async function mockFetchData() {
  console.log('refresh() start:', Date.now());
  await new Promise(r => setTimeout(r, 1000));
  console.log('refresh()   end:', Date.now());
  return [1, 2, 3];
}
