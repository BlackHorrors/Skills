import React from 'react'
import {Component} from 'react'
import CreateDirection from './components/direction/CreateDirection'
import Home from './components/home/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layouts/header'
import Skills from "./components/skills/Skills";

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Router>
                <div className="wrapper">
                    <Header/>
                    <main className="main">
                        <Route exact path='/' component={Home}/>
                        <Route path="/createdir" component={CreateDirection}/>
                        <Route path="/createskills" component={Skills}/>
                    </main>
                </div>
            </Router>
        )
    }
}

export default App
