const getStoredBooks2 = () => {
  const storedBookStore2 = localStorage.getItem("wishlist");
  if (storedBookStore2) {
    return JSON.parse(storedBookStore2);
  }
  return [];
};

const saveBookStore2 = (id) => {
  const storedBookies2 = getStoredBooks2();
  const exists = storedBookies2.find((bookId) => bookId === id);
  if (!exists) {
    storedBookies2.push(id);
    localStorage.setItem("wishlist", JSON.stringify(storedBookies2));
  }
};

export { getStoredBooks2, saveBookStore2 };
