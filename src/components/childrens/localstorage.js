const getStoredBooks = () => {
  const storedBookStore = localStorage.getItem("read");
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
    localStorage.setItem("read", JSON.stringify(storedBookies));
  }
};

export { getStoredBooks, saveBookStore };
