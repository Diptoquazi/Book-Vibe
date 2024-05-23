import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="lg:flex lg:gap-2 bg-[#f2f2f2] rounded-md">
            <div className="p-16">
                <h2 className="mb-28 font-bold text-6xl text-black">
                Books to freshen up your bookshelf
                </h2>

                <div className="my-4  text-white font-bold text-[20px] rounded px-5 py-3 text-center bg-[#23BE0A]">
                <Link to="/listed">View The List</Link>
                </div>
            </div>
            <div className="p-10">
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1438898566i/25856774.jpg" alt="image" />
            </div>
        </div>
    );
};

export default Home;