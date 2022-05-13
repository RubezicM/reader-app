// Fetch helpers
export const searchForBooks = async (query, page) => {

  const res = await fetch(`https://openlibrary.org/search.json?q=${query}&page=${page}`)

  const data = await res.json()
  if (res.ok) {
    return data
  } else {
    throw new Error('failed to fetch books')
  }
}
