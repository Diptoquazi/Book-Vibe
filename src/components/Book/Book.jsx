const Book = ({ book }) => {

    const { image, tags, bookName, author, category } = book;


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
                <p className="badge text-black bg-[#23BE0A]">{category}</p>

            </div>
        </div>
    );
};

export default Book;