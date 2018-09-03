import React from 'react'
import {Component} from 'react'
import Item from '../item/Item'
import './List.scss'
class List extends  Component {
    constructor(props) {
        super(props)
        this.state={
            targetDir:{}
        }
        this.submit = this.submit.bind(this);
    }
componentDidMount(){
        this.setState({targetDir: this.props.group})
}
    submit(event) {
        this.props.submit([event, this.state.targetDir])
    }


    render() {
        let list = [];
        for (let i in  this.props.list) {
            list.push(<Item  key={i} keygen={i} items={this.props.list[i]} submit={this.submit}/>)
        }
        return (
            <div className="list">
                {list}
            </div>
        )
    }
}

    export default List