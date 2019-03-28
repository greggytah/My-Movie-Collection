import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Subscribe } from "unstated";
import EditMovieContainer from '../containers/editMovieContainer';

class EditMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            movie: '',
            title: '',
            year: '',
            genre: '',
            actors: '',
            rating: ''
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

    componentDidMount() {
        const receivedMovie = this.props.location.state.movie;
        this.setState({
            movie: receivedMovie,
            title: receivedMovie.title,
            year: receivedMovie.year,
            genre: receivedMovie.genre,
            actors: receivedMovie.actors,
            rating: receivedMovie.rating
        })
    }

    render() {
        const { validated } = this.state;
        return (
            <Subscribe to={[EditMovieContainer]}>
                {editMovie =>
                    <div className="wrapper text-center addMovie">
                        <h2>Edit Movie</h2>
                        <p>Please enter the movie details (title, year, genre, actors, rating) to be updated.</p>
                        <Form noValidate validated={validated}>
                            <Row>
                                <Col>
                                    <Form.Control required placeholder="Title" id="title" autoFocus={true} defaultValue={this.state.movie.title}
                                                  onChange={e => this.handleChange(e)}/>
                                </Col>
                                <Col>
                                    <Form.Control required placeholder="Year" id="year" defaultValue={this.state.movie.year}
                                                  onChange={e => this.handleChange(e)}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control required placeholder="Genre" id="genre" defaultValue={this.state.movie.genre}
                                                  onChange={e => this.handleChange(e)}/>
                                </Col>
                                <Col>
                                    <Form.Control required placeholder="Actors" id="actors" defaultValue={this.state.movie.actors}
                                                  onChange={e => this.handleChange(e)}/>
                                </Col>
                                <Col>
                                    <Form.Control required placeholder="Rating" id="rating" defaultValue={this.state.movie.rating}
                                                  onChange={e => this.handleChange(e)}/>
                                </Col>
                            </Row>
                        </Form>
                        <Button variant="primary" type="submit" onClick={(e) => {
                            this.handleSubmit(e);
                            if(this.state.validated) {
                                const movie = {
                                    id: this.state.movie.id,
                                    title: this.state.title,
                                    year: this.state.year,
                                    genre: this.state.genre,
                                    actors: this.state.actors,
                                    rating: this.state.rating
                                };
                                editMovie.updateMovie(movie)
                                    .then(() => {
                                        console.log("Movie updated successfully!")
                                    })
                                    .catch(err => {
                                        console.error("There was an error updating movie in the db: ", err.message)
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

export default EditMovie;