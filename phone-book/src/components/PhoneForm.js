// https://velopert.com/3634
import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); // 이벤트의 작업 방지
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                /*event.target.name = name */
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                /*event.target.name = target */
                />
                <button type="submit">등록</button>
                <div>{this.state.name} {this.state.phone}</div>

            </form>
        );
    }
}

export default PhoneForm;