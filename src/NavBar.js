import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return(
            <ul>
                <li>
                    <Link to='/'><strong>needwall</strong></Link>
                </li>
                <li>
                    <Link to='/about'>about the project</Link>
                </li>
                <li>
                    <Link to='/ask'>share your need</Link>
                </li>
                <li>
                    <Link to='/help'>fulfill a need</Link>
                </li>
            </ul>
        );
    }
}

export default NavBar;