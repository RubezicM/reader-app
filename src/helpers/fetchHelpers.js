// Fetch helpers
export const searchForBooks = async (query, page) => {

  const res = await fetch(`https://openlibrary.org/search.json?q=${query}&page=${page}`)

  const data = await res.json()
  if (res.ok) {
    console.log(res)
  } else {
    throw new Error('failed to fetch books')
  }

  return data
}

export const getBookDetails = async (results) => {

  // const res = await fetch(`https://openlibrary.org/search.json?title=${query}&page=${page}`)


}
