import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "../src/components/users/Users";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar title="Github Finder" />
                <div className="container">
                    <Users />
                </div>
            </div>
        );
    }
}

export default App;
