import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getStoredBooks } from "./localstorage";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const PagesToRead = () => {
  const books = useLoaderData();
  const [storedBooks, setStoredBooks] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredBooks();
    if (books.length > 0) {
      const booksStored = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );
      setStoredBooks(booksStored);
    }
  }, []);

  const stored = storedBooks.map(book => ({
    bookName: book.bookName,
    totalPages: String(book.totalPages)
  }));

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center mt-16">
        <BarChart
          width={1600}
          height={600}
          data={stored}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis domain={[0, 500]} />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {stored.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default PagesToRead;
