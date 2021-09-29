import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';




export default function MovieCard({ movie }) {
    return (
        <div>
            <Link to={`/movie/${movie.id}`}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={movie.posterurl} alt={movie.name} />
                    <Card.Body>
                        <Card.Title>{movie.name} </Card.Title>
                        <Card.Text>
                            {movie.description}
                        </Card.Text>
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            value={movie.rating}
                            size={24}
                            activeColor="#ffd700"
                            edit={false}
                        />,

                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
}
