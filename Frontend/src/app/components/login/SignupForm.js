/**
 * Created by seppesnoeck on 1/05/17.
 */
/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';

export class SignupForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            doesDelivery: '',
            age: '',
            phonenumber: '',
            passwordVerify: '',
            password: ''

        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Sign up for free!</h1>
                <div>
                    <label>Firstname</label>
                    <input
                        value={this.state.firstname}
                        onChange={this.onChange}
                        type="text"
                        name="firstname"
                    />
                </div>

                <div>
                    <label>Lastname</label>
                    <input
                        value={this.state.lastname}
                        onChange={this.onChange}
                        type="text"
                        name="lastname"
                    />
                </div>

                <div>
                    <label>Phonenumber</label>
                    <input
                        value={this.state.phonenumber}
                        onChange={this.onChange}
                        type="text"
                        name="phonenumber"
                    />
                </div>

                <div>
                    <label>Age</label>
                    <input
                        value={this.state.age}
                        onChange={this.onChange}
                        type="text"
                        name="age"
                    />
                </div>

                <div>
                    <label>doesDelivery</label>
                    <input
                        value={this.state.doesDelivery}
                        onChange={this.onChange}
                        type="checkbox"
                        name="doesDelivery"
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                    />
                </div>

                <div>
                    <label>Password verify</label>
                    <input
                        value={this.state.passwordVerify}
                        onChange={this.onChange}
                        type="password"
                        name="passwordVerify"
                    />
                </div>

                <div>
                    <button>Signup</button>
                </div>
            </form>
        )
    }
}