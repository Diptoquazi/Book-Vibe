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

            <h1 className="text-6xl">books: {books.length}</h1>

            <div>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;