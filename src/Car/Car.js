import React from 'react';
import Radium from "radium";
import './Car.css'

// function Car() {
//     return (
//         <div>This is car component</div>
//     )
// }
// export default Car

// const car = () => (
//     <div>This is car component
//         <strong>test</strong>
//     </div>
// );
//     export default car

const Car = props => {
    const inputClasses = ['input'];
    if (props.name)
        inputClasses.push('green');
    else inputClasses.push('red');

    if (props.name.length > 4)
        inputClasses.push('bold');

    const style={
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
            cursor: 'pointer'
        }
    };

    return (
        /* <div style={
             {
                 border: '1px solid #ccc',
                 marginBottom: '10px',
                 display: "block",
                 padding: '10px',
                 boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
                 borderRadius: 5
             }
         }>*/
        <div className={'Car'} style={style}>
            <h3>Car name: {props.name} </h3>
            <p>Year: <strong>{props.year}</strong></p>
            {/*{props.children}*/}
            <input
                // className={props.name ? 'green-border' : 'red-border'}
                className={inputClasses.join(' ')}
                type={"text"}
                onChange={props.onChangeName}
                value={props.name}/>
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
};
export default Radium(Car)
