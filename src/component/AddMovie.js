import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

export default function AddMovie({ addMovie }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie, setnewMovie] = useState({
        name: '',
        description: "",
        posterurl: "",
        rating: 0,
    });


    const handleChange = (e) => {
        setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add New Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body className='inputs'>
                    <input type='text' placeholder=' enter movie name' name='name' onChange={handleChange} />
                    <input type='text' placeholder=' enter movie description' name='description' onChange={handleChange} />
                    <input type='text' placeholder=' enter movie image' name='posterurl' onChange={handleChange} />
                    <input type='number' placeholder='give rating' name='rating' onChange={handleChange} />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={() => {
                            addMovie(newMovie);
                            handleClose();
                        }}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}
