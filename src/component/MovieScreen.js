import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

export default function MovieScreen({ movies }) {
    const params = useParams();

    console.log(movies)


    const movie = movies.find((el) => el.id == params.id);
    return (
        <div>
            <h1>Movie:{movie.name}</h1>
            <Container>
                <Row>
                    <Col><img src={movie.posterurl} alt="" width="500px" /></Col>
                    <Col style={{ textAlign: "left" }}>
                        <h2>{movie.name}</h2>
                        <p>{movie.description}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
