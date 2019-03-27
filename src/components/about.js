import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="wrapper" style={{textAlign: 'center'}}>
                <h2>About My Movie Collection</h2>
                <p>This app was built using the following tech stack: </p>
                <ul style={{display: 'inline'}}>
                    <li>React</li>
                    <li>Unstated</li>
                    <li>Bootstrap</li>
                    <li>React Router</li>
                    <li>Knex</li>
                    <li>Node</li>
                    <li>Axios</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
        )
    }
}

export default About;