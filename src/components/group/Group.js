import React from 'react'
import ReactDOM from 'react-dom'
import {Component} from 'react'
import List from '../list/List';

class Group extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit(event) {
        this.props.submit(event)
    }

    render() {
        let group = [];

            for (let i in  this.props.group) {
                group.push(<List key={i} group={i} list={this.props.group[i]} submit={this.submit}/>)
        }
        return (
            <div className="group">
                {group}
            </div>
        )
    }
}

export default Group