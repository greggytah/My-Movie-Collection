import React from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";

class Home extends React.Component {

    render() {
        return (
            <Jumbotron className="text-center">
                <h1>Welcome To My Movie Collection!</h1>
                <p>
                    This contains a list of movies in my collection.
                </p>
                <p>
                    <Link to="/movies">Movie List</Link>
                </p>
                <Button variant="primary" size="lg">
                    <Link to="/addMovie" className="text-white">Add New Movie</Link>
                </Button>
            </Jumbotron>
        )
    }
}

export default Home;