import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoriteColor: "Red"};
    }

    static getDerivedStateFromProps(props, state) {
        return {favoriteColor: props.favcol };
    }

    render() {
        return (
            <h1>My favorite color is {this.state.favoriteColor}</h1>
        )
    }
}

export default Header;