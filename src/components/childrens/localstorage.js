const getStoredBooks = () => {
  const storedBookStore = localStorage.getItem("book-store");
  if (storedBookStore) {
    return JSON.parse(storedBookStore);
  }
  return [];
};

const saveBookStore = (id) => {
  const storedBookies = getStoredBooks();
  const exists = storedBookies.find((bookId) => bookId === id);
  if (!exists) {
    storedBookies.push(id);
    localStorage.setItem("book-store", JSON.stringify(storedBookies));
  }
};

export { getStoredBooks, saveBookStore };
