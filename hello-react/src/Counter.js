import Report, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            foo: {
                bar: 0,
                foobar: 1
            }
        }
        this.handleIncrease = this.handleIncrease.bind(this);
    }
    // handleIncrease(){
    //     this.setState({
    //         number:this.state.number+1
    //     });
    // }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    fooSetState = () => {
        this.setState({
            number: 0,
            foo: {
                ...this.state.foo,
                foobar: 2
            }
        });
    }
    setState_2 = () => {
        this.setState(
            ({ number }) => ({
                number: number + 1
            })
        );
    }
    setState_3 = () => {
        this.setState(
            (state) => ({
                number: state.number
            })
        );
    }
    setState_4 = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        })
    }

    render() {
        return (
            <div>
                <h1> Counter</h1>
                <div>value: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}
export default Counter;