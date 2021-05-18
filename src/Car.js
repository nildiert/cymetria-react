import React from 'react';


class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Ford',
            model: "Mustang",
            color: "Rojo",
            year: 1964
        };
    }

    changeColor = () => {
        this.setState({color: "Azul"});
    }

    render() {
        return (
            <div>
                <h1>Mi {this.state.brand}</h1>
                <p>
                    Es {this.state.color}, 
                    es un {this.state.model} del año {this.state.year}
                </p>
                <button
                type="button"
                onClick={this.changeColor} >
                    Change Color
                </button>
            </div>
        )
    }
}





export default Car;

