import React from 'react';


class Car extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h2>Hola, soy un {this.props.name} {this.props.model} !</h2>
    }
}





export default Car;

