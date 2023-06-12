import React from "react";


const MyParagraph = (props) => {
    console.log("My Paragrapg Running!!!");
    return (
        <p>{props.children}</p>
    )
}; 

export default MyParagraph;