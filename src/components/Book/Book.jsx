import { FaRegStar } from "react-icons/fa"
import { Link } from "react-router-dom";

const Book = ({ book }) => {

    const { image, tags, bookName, author, category, rating } = book;


    return (
        <div className="card text-white hover:scale-90 transition-all w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-actions justify-start mx-7 my-4">
                <div className="badge "><div className="flex gap-5 text-[#23BE0A]">
                    {tags.map((tag, index) => (
                        <p key={index}>{tag}</p>
                    ))}
                </div></div>
                
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    
                </h2>
                <div className="badge text-black bg-[#59C6D2]">By: {author}</div>
                <hr />
                <div className="flex flex-grow gap-40">
                <p className="badge  font-bold text-black bg-[#23BE0A]">{category}</p>
                <div className="flex gap-2">
                <p>{rating} </p>
                <p className="text-2xl">
                <FaRegStar></FaRegStar>
                </p>
                </div>
                </div>

                    <div className="font-bold bg-[#23BE0A] text-center rounded px-5 py-2 w-[154px]">
                        <Link  to="/details">View Details</Link>
                    </div>
            </div>
        </div>
    );
};

export default Book;