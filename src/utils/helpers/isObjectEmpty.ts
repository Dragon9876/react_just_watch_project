export const isObjectEmpty = (object: object) => {
   return Object(object).values().length === 0
}
