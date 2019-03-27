import React from 'react';
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

class Home extends React.Component {
    render() {
        return (
            <Jumbotron style={{textAlign: 'center'}}>
                <h1>Welcome To My Movie Collection!</h1>
                <p>
                    This contains a list of movies in my collection.
                </p>
                <p>
                    <Link to="/movies">Movie List</Link>
                </p>
            </Jumbotron>
        )
    }
}

export default Home;