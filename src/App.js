import React, {Component} from 'react';
import './App.module.scss';
import Car from './Car/Car'

class App extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'Mazda 1', year: 2010}
        ],
        pageTitle: 'React components',
        // inputValue: ''
        showCars: false
    };

    changeTitleHandler = newTitle => {
        // const oldTitle = this.state.pageTitle;
        // const newTitle = oldTitle + ' (changed)';

        this.setState({
            pageTitle: newTitle
        });
    };

    /*   updateInputValue = (event) => {
           this.setState({
               inputValue: event.target.value
           });
       };*/

    /* handleInput = (event) => {
         this.changeTitleHandler(event.target.value);
     };*/
    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    };

    onChangeName(value, index) {
        const cars = [...this.state.cars];
        cars[index].name = value;
        this.setState({
            cars
        });
    }

    deleteHandler(index) {
        // const cars = [...this.state.cars];
        const cars = this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({
            cars
        });
    }


    render() {
        console.log('render');
        const divStyle = {
            textAlign: 'center'
        };

        // const cars = this.state.cars;

        let cars = null;
        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        // onChangeTitle={() => this.changeTitleHandler(car.name)}
                        onChangeName={event => this.onChangeName(event.target.value, index)}
                        onDelete={this.deleteHandler.bind(this, index)}
                    />
                )
            });
        }

        return (


            <div style={divStyle}>
                {/*<h1>{this.state.pageTitle}</h1>*/}
                <h1>{this.props.title}</h1>

                {/*<input type="text" onChange={(text=>this.handleInput(text))}/>*/}
                {/*<input type="text" onChange={this.handleInput}/>*/}
                {/*<input type="text" onChange={this.updateInputValue}/>*/}

                {/*<button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>*/}
                {/*<button onClick={()=> this.changeTitleHandler(this.state.inputValue)}>Change title</button>*/}


                <button onClick={this.toggleCarsHandler.bind(this, 'Changed!')}>Toggle cars</button>

                <div style={{
                    width: 400,
                    margin: "auto",
                    paddingTop: 20
                }}>
                    {cars}
                </div>

                {/*       <Car
                    name={cars[0].name}
                    year={cars[0].year}
                    onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
                />
                <Car
                    name={cars[1].name}
                    year={cars[1].year}
                    onChangeTitle={()=>this.changeTitleHandler(cars[1].name)}
                />
                <Car
                    name={cars[2].name}
                    year={cars[2].year}
                    onChangeTitle={()=>this.changeTitleHandler(cars[2].name)}
                />*/}

                {/*    <Car name={'Ford'} year={2018}/>
                <Car name='Audi' year={2016}/>
                <Car name={'Mazda'} year={2010}/>*/}
            </div>
        );
        // return React.createElement(
        //     'div',
        //     {
        //         className: 'App'
        //     },
        //     React.createElement(
        //         'h1',
        //         null,
        //         'Hello world!'
        //     )
        // )
    }


}

export default App;
