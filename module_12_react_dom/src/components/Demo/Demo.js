import React from "react";

import MyParagraph from "./MyParagraph";

const Demo = (props) => {

    console.log("Demo App Running!!!");

    return <MyParagraph>{props.show ? "This is a paragraph" : ""}</MyParagraph>;

};

export default React.memo(Demo);