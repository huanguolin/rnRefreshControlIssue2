import {createContext, useContext} from 'react';

export const RefreshingContext = createContext({
  refetch: () => {},
  refreshing: false,
});

export function useGlobalData() {
  return useContext(RefreshingContext);
}

export async function mockFetchData() {
  console.log('refresh() start:', Date.now());
  await new Promise(r => setTimeout(r, 3000));
  console.log('refresh()   end:', Date.now());
}
