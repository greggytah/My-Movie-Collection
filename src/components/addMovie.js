import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Subscribe } from "unstated";
import AddMovieContainer from '../containers/addMovieContainer';

class AddMovie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            validated: false
        }
    }

    handleChange(event) {
        const newState = {};
        newState[event.target.id] =  event.target.value;
        this.setState(newState);
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });
    }

    render() {
        const { validated } = this.state;
        return (
            <Subscribe to={[AddMovieContainer]}>
                {addMovie =>
                    <div className="wrapper text-center addMovie">
                        <h2>Add New Movie</h2>
                        <p>Please enter the movie details(title, year, genre, actors, rating).</p>
                        <Form noValidate validated={validated}>
                            <Row>
                                <Col>
                                    <Form.Control required placeholder="Title" id="title" autoFocus={true}
                                                  onChange={e => this.handleChange(e)}/>
                                </Col>
                                <Col>
                                    <Form.Control required placeholder="Year" id="year"
                                                  onChange={e => this.handleChange(e)}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control required placeholder="Genre" id="genre"
                                                  onChange={e => this.handleChange(e)}/>
                                </Col>
                                <Col>
                                    <Form.Control required placeholder="Actors" id="actors"
                                                  onChange={e => this.handleChange(e)}/>
                                </Col>
                                <Col>
                                    <Form.Control required placeholder="Rating" id="rating"
                                                  onChange={e => this.handleChange(e)}/>
                                </Col>
                            </Row>
                        </Form>
                        <Button variant="primary" type="submit" onClick={(e) => {
                            this.handleSubmit(e);
                            if(this.state.validated) {
                                const newMovie = {
                                    title: this.state.title,
                                    year: this.state.year,
                                    genre: this.state.genre,
                                    actors: this.state.actors,
                                    rating: this.state.rating
                                };
                                addMovie.addNewMovie(newMovie)
                                    .then(() => {
                                        console.log("Movie added successfully!");
                                        this.setState({
                                            title: '',
                                            year: '',
                                            genre: '',
                                            actors: '',
                                            rating: ''
                                        })
                                    })
                                    .catch(err => {
                                        console.error("There was an error adding movie to the db: ", err.message)
                                    })
                            }
                        }}>
                            Submit
                        </Button>
                    </div>
                }
            </Subscribe>
        )
    }
}

export default AddMovie;