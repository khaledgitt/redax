import React, { useState } from "react";
import Filter from "./Filter";
import MovieCard from "./MovieCard";


export default function MovieList({ movies }) {

    const [text, setText] = useState("");
    const [rate, setRate] = useState("");



    return (
        <div className="movies-screen">
            {" "}
            <Filter setText={setText} setRate={setRate} />
            <div className='movie-list'>
                {movies
                    .filter((movie) =>
                        movie.name.toLowerCase().includes(text.toLowerCase())
                        && movie.rating >= rate
                    )
                    .map((movie) => (
                        <MovieCard movie={movie} />
                    )).reverse()}
            </div>
        </div >
    );
}
