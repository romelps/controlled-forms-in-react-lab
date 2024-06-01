import { useState } from "react";


const Bookshelf = () => {
    
    const [books, setBooks] = useState([]);

    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });

    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({
            title: '',
            author: '',
        });

        console.log(books);
    }



    return (
        <form>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <label>Title: </label>
                    <input
                        type="text"
                        name="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                    />

                    <br></br>

                    <label>Author: </label>
                    <input
                        type="text"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                    />

                    <br></br>

                    <button type="submit" onClick={handleSubmit}>Add Book</button>
                </div>
                <div className="bookCardsDiv"> </div>
            </div>

            <div>
                <ul>
                {books.map((book) => (
                    <li class="bookCard" id={book._id}>
                        {book.title} by {book.author}
                    </li>
                ))}
                </ul>
            </div>
        </form>
    )
}

export default Bookshelf;