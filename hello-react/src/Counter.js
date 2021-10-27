import Report, { Component } from 'react';

const Problematic = () => {
    throw (new Error("버그가 나타났당"));
    return (
        <div>뿌앵</div>
    )
}

class Counter extends Component {
    state = {
        number: 0,
        error: false,
        foo: {
            bar: 0,
            foobar: 1
        }
    }
    constructor(props) {
        super(props);
        // this.handleIncrease_ = this.handleIncrease_.bind(this);
        console.log('constuctor');
    }
    componentWillMount() {
        console.log('componenet will mount (deprecated)');
    }
    componentDidMount() {
        console.log('component did mount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('should component update');
        if (nextState.number % 5 === 0) return false;
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('component will update');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('component did update');
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }
    // handleIncrease_(){
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
        if (this.state.error) return (<h1>에러발생!</h1>);

        return (
            <div>
                <h1> Counter</h1>
                <div>value: {this.state.number}</div>
                {this.state.number === 4 && <Problematic />}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}
export default Counter;