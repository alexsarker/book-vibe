import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const BookRequest = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [formDataArray, setFormDataArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: title,
      author: author,
      description: description,
      genre: genre,
    };

    setFormDataArray((prevFormDataArray) => [...prevFormDataArray, formData]);
    toast.success("Form Submitted Successfully");
    setTitle("");
    setAuthor("");
    setDescription("");
    setGenre("");
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center bg-[#1313130D] py-8 my-8">
        Book Request
      </h2>
      <div className="flex justify-center gap-10">
        <div className="w-96">
          <form
            onSubmit={handleSubmit}
            className="bg-white border rounded-xl px-8 pt-6 pb-8 mb-4"
          >
            <h2 className="text-2xl font-bold text-center mainText">
              Request Form
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="title"
                type="text"
                value={title}
                onChange={handleTitle}
                placeholder="Title"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="author"
              >
                Author
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="author"
                type="text"
                value={author}
                onChange={handleAuthor}
                placeholder="Author"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="description"
                value={description}
                onChange={handleDescription}
                placeholder="Description"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="genre"
              >
                Genre
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="genre"
                type="text"
                value={genre}
                onChange={handleGenre}
                placeholder="Genre"
                required
              />
            </div>
            <div className="flex items-center justify-end pt-4">
              <button
                className="mainBg w-full hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                type="submit"
                value="Submit"
              >
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
        <span>
          <div className="flex flex-col w-96 p-5 bg-[#F3F3F3] rounded-xl gap-4">
            <h2 className="font-bold text-center">Request History</h2>
            {formDataArray.map((formData, index) => (
              <div key={index} className="font-medium p-4 bg-white rounded-lg">
                <p>
                  Title:{" "}
                  <span className="pText font-normal">{formData.title}</span>
                </p>
                <p>
                  Author:{" "}
                  <span className="pText font-normal">{formData.author}</span>
                </p>
                <p>
                  Description:{" "}
                  <span className="pText font-normal">
                    {formData.description}
                  </span>
                </p>
                <p>
                  Genre:{" "}
                  <span className="pText font-normal">{formData.genre}</span>
                </p>
              </div>
            ))}
          </div>
        </span>
      </div>
    </div>
  );
};

export default BookRequest;
