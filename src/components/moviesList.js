import React from 'react';
import {Table} from "react-bootstrap";

class MoviesList extends React.Component {

    render() {
        return (
            <Table striped border='true' hover>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Genre</th>
                    <th>Actors</th>
                    <th>Rating</th>
                </tr>
                </thead>
            </Table>
        )
    }
}

export default MoviesList;