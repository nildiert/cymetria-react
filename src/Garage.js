import React from 'react';

import Car from './Car';

// import Garage from './Garage';


class Garage extends React.Component {
    render() {
        const carinfo = {
            name: "Ford",
            model: "Mustang"};
        return (
        <div>
            <h1>Quien vive en mi garage?</h1>

            <Car carinfo={carinfo} />
        </div>
        )
    }
}

export default Garage;
