import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveBookStore } from "./localstorage";
import { saveBookStore2 } from "./localstorage2";

const BookDetail = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.bookId === idInt);

  const [clickBook, setClickBook] = useState([]);

  const handleRead = () => {
    const newBooks = [...clickBook, book];
    setClickBook(newBooks);
    saveBookStore(idInt);
    toast.success("Added in Read List");
  };

  const handleList = () => {
    const isExist = clickBook.find((clicked) => clicked.bookId === book.bookId);
    if (isExist) {
      toast.error("You have already read this book");
    } else {
      const newBooks = [...clickBook, book];
      setClickBook(newBooks);
      saveBookStore2(idInt);
      toast.success("Added in Wishlist");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 p-10 lg:p-0">
      <div className="relative">
        <img
          className="lg:absolute inset-0 w-full h-full object-cover rounded-2xl"
          src={book?.image}
          alt="Book Cover"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="grid gap-6">
          <h1 className="fonter text-4xl font-bold">{book?.bookName}</h1>
          <p className="text-xl font-medium">By : {book?.author}</p>
          <hr />
          <p className="text-xl font-medium">{book?.category}</p>
          <hr />
          <p className="text-[#131313B2]">
            <span className="font-bold text-black">Review : </span>
            {book?.review}
          </p>
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
          <hr />
          <div className="grid grid-cols-2 gap-10">
            <p className="text-[#131313B2]">Number of Pages:</p>
            <p className="font-bold">{book?.totalPages}</p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <p className="text-[#131313B2]">Publisher:</p>
            <p className="font-bold">{book?.publisher}</p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <p className="text-[#131313B2]">Year of Publishing:</p>
            <p className="font-bold">{book?.yearOfPublishing}</p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <p className="text-[#131313B2]">Rating:</p>
            <p className="font-bold">{book?.rating}</p>
          </div>
        </div>
        <div className="flex gap-5 pt-8">
          <button
            onClick={handleRead}
            className="btn border-black bg-white text-black px-7"
          >
            Read
          </button>
          <button onClick={handleList} className="btn secBg text-white px-7">
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetail;
