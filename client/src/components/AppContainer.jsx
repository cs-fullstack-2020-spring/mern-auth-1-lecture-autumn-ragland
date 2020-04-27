import React, { Component, Fragment } from "react";
import Login from "./Login";
import Registration from "./Registration";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom' // imports to use Router


class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <Fragment>
                <h1>Authentication with Passport and JSON Web Tokens</h1>
                <Router>
                    <Link to = "/">Home</Link> |
                    <Link to = "/login">Login</Link> |
                    <Link to = "/registration">Registration</Link>
                    <Route path = "/login" component = {Login}/>
                    <Route path = "/registration" component = {Registration}/>
                </Router>
            </Fragment>
        )
    }
}
export default AppContainer;