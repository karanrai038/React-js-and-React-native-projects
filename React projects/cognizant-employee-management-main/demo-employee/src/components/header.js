import React from 'react'

class Header extends React.Component {

    render() {
        return (
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Demo Employee</a>
                <ul className="navbar-nav px-3">
                </ul>
            </header>
        );
    }
}

export default Header;