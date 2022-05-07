// Fetch helpers
export const searchForBooks = async (query) => {

  const res = await fetch(`https://openlibrary.org/search.json?q=${query}`)

  const data = await res.json()
  if (res.ok) {
    console.log(res)
  } else {
    throw new Error('failed to fetchbooks')
  }

  return data
}
