import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";
import Photos from "./Photos";

export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [definition, setDefinition] = useState(null);
    const [photos, setPhotos] = useState([]);

    function handleImages(response) {
        setPhotos(response.data.photos);
    }

    function handleResponse(response) {
        setDefinition(response.data);
        let apiKey = "eac360db5fc86ft86450f3693e73o43f";
        let apiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${apiKey}`; 
        axios.get(apiUrl).then(handleImages);
    }

    function search() {
        let apiKey = "eac360db5fc86ft86450f3693e73o43f";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    useEffect(() => {
        search();
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    console.log("Result:", Result);
    console.log("Photos:", Photos);

    return (
        <div className="Dictionary"> 
            <section>
                <form onSubmit={handleSubmit}>
                    <label>What word do you want to look up?</label>
                    <input
                        type="search" 
                        placeholder="Search a word"
                        defaultValue={props.defaultKeyword}
                        autoFocus={true}
                        className="form-control search-input"
                        onChange={handleKeywordChange}
                    />
                </form>
                <small className="hint">i.e. paris, wine, yoga, coding</small>
            </section>
            <Result definition={definition} />
            <Photos photos={photos}/>
        </div> 
    );
}