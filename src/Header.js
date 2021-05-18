import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoriteColor: "Red"};
    }

    componentDidMount() {
        setTimeout(() =>{
            this.setState({favoriteColor: "Yellow"})
        }, 1000);
    }

    render() {
        return (
            <h1>My favorite color is {this.state.favoriteColor}</h1>
        )
    }
}

export default Header;