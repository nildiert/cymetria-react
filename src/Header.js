import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoriteColor: "Red"};
    }

    static getDerivedStateFromProps(props, state) {
        return {favoriteColor: props.favcol};
    }

    changeColor = () => {
        console.log("Entro a la funcion")
        this.setState({favoriteColor: "blue"});
    }

    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <button type="button" onClick={this.changeColor}>
                    Change color
                </button>
            </div>
        )
    }
}

export default Header;