import React from "react";
import "./book.css";

function Book(props){
    return(
        <div className="book">
            <div className="cover">
                <h1 className="word">{props.book.word}</h1>
                <h4 className="author">{props.book.author}</h4>
            </div>
        </div>
    );
}

export default Book;