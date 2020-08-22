import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";


const ParseMarkdown = ({url}) => {
    const [parseMarkdownText, setParseMarkdownText] = useState("");

    useEffect(() => {

        fetch(url)
            .then((response) => {
                if (response.ok) return response.text();
                else return Promise.reject("Didn't fetch text correctly");
            })
            .then((text) => {
                setParseMarkdownText(text);
            })
            .catch((error) => console.error(error));
    });
    return (
        <>
            <Markdown source={parseMarkdownText} />
        </>
    );
};

export default ParseMarkdown;
