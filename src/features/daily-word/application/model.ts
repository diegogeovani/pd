type Book = {
  name: string
}

type Reference = {
  book: Book
  chapter: number
  verses: Set<number>
}

export type DailyWord = {
  message: string
  reference: Reference
}
