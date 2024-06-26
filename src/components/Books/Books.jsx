import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect( () =>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])


    return (
        <div className="my-5">
            <div>
            <h2 className="font-bold text-6xl text-center text-black my-10">Books</h2>
            </div>

            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;