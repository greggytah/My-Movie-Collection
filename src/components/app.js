import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './home';
import About from './about';
import Movies from './movies';
import { Navbar, Nav} from "react-bootstrap";

const App = () => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><Link to="/">My Movie Collection</Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" style={{paddingRight: '1em'}}>Home</Link>
                    <Link to="/about">About</Link>
                </Nav>
            </Navbar>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movies" component={Movies} />
        </Router>
    )
};

export default App;