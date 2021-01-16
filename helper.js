import useSWR from 'swr'
export function getBhenceProject (id) {
  const { data, error } = useSWR(`https://api.behance.net//v2/projects/${id}?client_id=yR0kreJuPSelu18eSP0i5SCh1nzH1FUP`, fetcher)
  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}