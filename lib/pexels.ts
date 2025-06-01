// Utility to fetch images from the Pexels API

const PEXELS_API_KEY = "czr0TsRsxVxCFxf1n711lgXopOjzIZcYnt7E4AqqP2zZJFwScbYR3TrQ"
const PEXELS_API_URL = "https://api.pexels.com/v1/search"

export async function fetchPexelsImage(query: string): Promise<string | null> {
  const url = `${PEXELS_API_URL}?query=${encodeURIComponent(query)}&per_page=1`
  const res = await fetch(url, {
    headers: {
      Authorization: PEXELS_API_KEY,
    },
  })
  if (!res.ok) return null
  const data = await res.json()
  if (data.photos && data.photos.length > 0) {
    return data.photos[0].src.landscape || data.photos[0].src.original
  }
  return null
} 