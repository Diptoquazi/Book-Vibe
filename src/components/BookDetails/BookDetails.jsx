import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const book = books.find(book => book.bookId == bookId)
  console.log(book);

  return (
    <div>
      <div className="card p-5 bg-white lg:card-side bg-base-100 shadow-xl">
        <figure><img className="p-5  lg:w-[500px]" src={book.image} alt="Album" /></figure>
        <div className="card-body shadow-lg bg-white text-black">
          <div>
            <h2 className="font-bold text-4xl">{book.bookName}</h2>
            <p className="my-5">By: {book.author}</p>
            <div className="my-5">
              <hr />
              <p className="my-4">{book.category}</p>
              <hr />
            </div>
            <p className="text-[16px] my-5">
              <span className="font-bold">Review: </span>{book.review}
            </p>
            <p className="my-5 flex gap-3">
              <span className="font-bold">Tag:</span> <span className="font-bold text-[#23BE0A] flex gap-5">{book.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}</span>
            </p>
            <hr />
            <p className="my-5">
              <div className="flex">
                <p>
                  Number of Pages :
                </p>
                <p className="lg:mr-60 font-bold">{book.totalPages}</p>
              </div>
            </p>
            <p className="my-5">
              <div className="flex">
                <p>
                  Publisher :
                </p>
                <p className="lg:mr-60 font-bold">{book.publisher}</p>
              </div>
            </p>
            <p className="my-5">
              <div className="flex">
                <p>
                  Year of Publishing :
                </p>
                <p className="lg:mr-60 font-bold">{book.yearOfPublishing}</p>
              </div>
            </p>
            <p className="my-5">
              <div className="flex">
                <p>
                  Rating :
                </p>
                <p className="lg:mr-40 font-bold">{book.rating}</p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;