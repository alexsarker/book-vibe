import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredBooks } from "./localstorage";
import { FiMapPin } from "react-icons/fi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoDocumentTextOutline } from "react-icons/io5";
import { getStoredBooks2 } from "./localstorage2";

const ListedBooks = () => {
  const books = useLoaderData();
  const [storedBooks, setStoredBooks] = useState([]);
  const [storedBooks2, setStoredBooks2] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const storedBookIds = getStoredBooks();
    const storedBookIds2 = getStoredBooks2();
    if (books.length > 0) {
      const booksStored = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );

      if (sortBy === "Rating") {
        booksStored.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === "Number of pages") {
        booksStored.sort((a, b) => a.totalPages - b.totalPages);
      } else if (sortBy === "Published year") {
        booksStored.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
      }

      setStoredBooks(booksStored);
    }
    if (books.length > 0) {
      const booksStored2 = books.filter((book) =>
        storedBookIds2.includes(book.bookId)
      );

      if (sortBy === "Rating") {
        booksStored2.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === "Number of pages") {
        booksStored2.sort((a, b) => a.totalPages - b.totalPages);
      } else if (sortBy === "Published year") {
        booksStored2.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
      }
      setStoredBooks2(booksStored2);
    }
  }, [books, sortBy]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center bg-[#1313130D] py-8 my-8">
        Books
      </h2>
      <div className="mb-14 text-center">
        <select
          className="select w-46 max-w-xs mainBg text-white"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option disabled value="" className="bg-[#F3F3F3] text-black">
            Sort by
          </option>
          <option className="bg-[#F3F3F3] text-black">Rating</option>
          <option className="bg-[#F3F3F3] text-black">Number of pages</option>
          <option className="bg-[#F3F3F3] text-black">Published year</option>
        </select>
      </div>
      <div>
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Read Books"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {storedBooks.map((book) => (
              <div
                key={book.id}
                className="p-6 border border-[#1313130D] rounded-2xl flex flex-col lg:flex-row items-center gap-12 mb-6"
              >
                <div className="flex-shrink-0 w-1/3">
                  <img
                    src={book.image}
                    alt=""
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="fonter text-2xl font-bold">{book.bookName}</h2>
                  <p className="pText font-medium">By: {book.author}</p>
                  <div className="flex gap-3 items-center">
                    <p className="font-bold">Tags : </p>
                    {book?.tags.map((tag, idx) => (
                      <div key={idx}>
                        <p className="mainText font-medium px-4 py-2 bg-[#ED00661F] rounded-full">
                          {tag}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 items-center">
                    <FiMapPin />
                    <p className="pText">
                      Year of Publishing: {book.yearOfPublishing}
                    </p>
                  </div>
                  <div className="flex  gap-4">
                    <div className="pText flex gap-2 items-center">
                      <LiaUserFriendsSolid />
                      <p>Publisher: {book.publisher}</p>
                    </div>
                    <div className="pText flex gap-2 items-center">
                      <IoDocumentTextOutline />
                      <p>Page {book.totalPages}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex gap-4 items-center">
                    <p className="text-[#328EFF] bg-[#328EFF26] py-2 px-5 rounded-lg">
                      Category: {book.category}
                    </p>
                    <p className="text-[#FFAC33] bg-[#FFAC3326] py-2 px-5 rounded-lg">
                      Rating: {book.rating}
                    </p>
                    <Link to={`/book/${book.bookId}`}>
                      <button className="btn mainBg text-white">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist Books"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {storedBooks2.map((book) => (
              <div
                key={book.id}
                className="p-6 border border-[#1313130D] rounded-2xl flex flex-col lg:flex-row items-center gap-12 mb-6"
              >
                <div className="flex-shrink-0 w-1/3">
                  <img
                    src={book.image}
                    alt=""
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="fonter text-2xl font-bold">{book.bookName}</h2>
                  <p className="pText font-medium">By: {book.author}</p>
                  <div className="flex gap-3 items-center">
                    <p className="font-bold">Tags : </p>
                    {book?.tags.map((tag, idx) => (
                      <div key={idx}>
                        <p className="mainText font-medium px-4 py-2 bg-[#ED00661F] rounded-full">
                          {tag}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 items-center">
                    <FiMapPin />
                    <p className="pText">
                      Year of Publishing: {book.yearOfPublishing}
                    </p>
                  </div>
                  <div className="flex  gap-4">
                    <div className="pText flex gap-2 items-center">
                      <LiaUserFriendsSolid />
                      <p>Publisher: {book.publisher}</p>
                    </div>
                    <div className="pText flex gap-2 items-center">
                      <IoDocumentTextOutline />
                      <p>Page {book.totalPages}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex gap-4 items-center">
                    <p className="text-[#328EFF] bg-[#328EFF26] py-2 px-5 rounded-lg">
                      Category: {book.category}
                    </p>
                    <p className="text-[#FFAC33] bg-[#FFAC3326] py-2 px-5 rounded-lg">
                      Rating: {book.rating}
                    </p>
                    <Link to={`/book/${book.bookId}`}>
                      <button className="btn mainBg text-white">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListedBooks;
