import React from 'react'
import {Component} from 'react'
import {Form, Message, Button} from 'semantic-ui-react'
import db from '../../firebase';
import Group from '../group/Group';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            directions: {},
        }
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        db.ref('directions').once('value', data => this.setState({
                directions: data.val() ? data.val() : {}
            })
        )
    }
    submit(event){
        console.log(event);
        let ref = db.ref('directions');
        if((event[0][2])) {
            console.log('true');
            ref = ref.child(event[1]);
            ref.child((event[0])[1]).remove()
                .then(()=>this.props.history.push('/'))
        }
        else {
            ref = ref.child(event[1]);
            ref = ref.child((event[0])[1])
            ref.set((event[0])[0])
                .then(()=>this.props.history.push('/'))
        }
    }

    render() {
        return (
            <div className="main"> <h1>Home</h1>
                  <Group group={this.state.directions} submit={this.submit} />
            </div>
        )
    }
}

export default Home