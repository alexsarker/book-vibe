import { Link } from "react-router-dom";
import "../Root.css";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { bookId, bookName, author, category, rating, tags, image } = book;
  return (
    <div>
      <Link to={`/book/${bookId}`}>
        <div className="card w-96 border">
          <figure className="px-10 pt-10">
            <img src={image} />
          </figure>
          <div className="card-body">
            <div className="flex gap-3">
              {tags.map((tag, idx) => (
                <div key={idx}>
                  <p className="mainText font-medium px-4 py-2 bg-[#ED00661F] rounded-full">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
            <h2 className="fonter text-2xl font-bold">{bookName}</h2>
            <p className="pb-5 pText font-medium">By: {author}</p>
            <hr className="border-dashed pb-5" />
            <div className="flex justify-between">
              <p className="pText font-medium">{category}</p>
              <div className="flex items-center gap-2">
                <p className="pText font-medium">{rating}</p>
                <FaRegStar />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
