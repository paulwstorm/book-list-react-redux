function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}

function deleteBook(book) {
  return {
    type: "BOOK_DELETED",
    payload: book
  };
}

export {
  selectBook,
  deleteBook
}
