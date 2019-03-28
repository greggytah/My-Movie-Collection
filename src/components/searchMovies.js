import React from 'react';
import _ from 'lodash';

class SearchMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterStr: '',
            receivedMovies: []
        }
    }

    componentDidMount() {
        const movies = this.props.location.state.movies;
        this.setState({
            receivedMovies: movies
        })
    }

    render () {
        const filteredMovies = this.state.receivedMovies
            .filter(obj => _.includes(obj, this.state.filterStr))
            .map(obj => <li key={obj.id} className="d-inline">{ obj.title }</li>);

        return (
            <div className="wrapper text-center addMovie">
                <h2>Search For A Movie</h2>
                <input
                    type="text"
                    value={ this.state.filterStr }
                    onChange={ e => this.setState({ filterStr: e.target.value }) } />
                <ul className="noPadding">
                    { filteredMovies && filteredMovies.length > 0 ?
                        filteredMovies
                    : null }
                </ul>
            </div>
        );
    }
}

export default SearchMovies;