import React, {Component} from 'react';
import autobind from 'autobind-decorator';
import {connect} from 'react-redux';

import { tryLogin } from '../store/actions/auth';
import { SignInForm } from './forms/SignIn';
import { SignUpForm } from './forms/SignUp';
import { Button } from '../components/Button';


const FormToggle = ({changeSelected, toDisplay}) => (
    <div className="Button-group">
        <Button text="Log In"
            clickHandler={() => changeSelected("toDisplay", "login")}
            classes={toDisplay === "login" ? "primary" : "primary-complementary"} 
        />
        <Button text="Sign Up"
            clickHandler={() => changeSelected("toDisplay", "signup")}
            classes={toDisplay === "signup" ? "primary" : "primary-complementary"} 
        />
    </div>
)

class Landing extends Component {
    state = {
        toDisplay: "login",
        shouldAnimate: false
    }

    @autobind
    togglerGenerator(stateToToggle, newValue) {
        !newValue 
        ? this.setState((prevState) => ({ [stateToToggle]: !prevState[stateToToggle]})) 
        : (this.state[stateToToggle] !== newValue) && this.setState({[stateToToggle]: newValue})
    }

    @autobind
    loginHandler(values) {
        this.state.shouldAnimate && this.togglerGenerator("shouldAnimate");
        const animateForm = () => this.togglerGenerator("shouldAnimate"); 
        const {tryLogin} = this.props;
        
        return new Promise(
            (resolve, reject) => tryLogin(values, resolve, reject)
        ).then(() => console.log("resolved"))
        .catch(animateForm)
    }

    registrationHandler(values) {
        console.log(values)
    }
    render() {
        const {toDisplay, shouldAnimate} = this.state;
        let form;
        toDisplay === "login" 
        ? form = <SignInForm submitHandler={this.loginHandler} shouldAnimate={shouldAnimate} />
        : form = <SignUpForm submitHandler={this.registrationHandler} />;

        return (
            <section className="Landing">
                <h1 className="Landing-title">React/Redux + Django TodoApp</h1>
                <FormToggle changeSelected={this.togglerGenerator} toDisplay={toDisplay} />
                {form}
            </section>
        )
    }
}

const MapDispatchToProps = (dispatch) => ({
    tryLogin: (values, resolveCb, rejectCb) => dispatch(tryLogin(values, resolveCb, rejectCb))
})

export const LandingConnected = connect(null, MapDispatchToProps)(Landing)
