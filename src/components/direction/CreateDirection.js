import React from 'react'
import {Component} from 'react'
import {Form, Message, Label, Button} from 'semantic-ui-react'
import db from '../../firebase'
class CreateDirection extends Component {
    constructor(props) {
        super(props)
        this.state={
            direction:''
        };
        this.handleInput = this.handleInput.bind(this);
        this.saveDirection = this.saveDirection.bind(this);
    }

    handleInput(event){
        console.log(event.target.name, this);
            const direction = {...this.state,[event.target.name]:event.target.value};
            console.log(direction);
            this.setState({direction})
    }
    saveDirection(ev){
        ev.preventDefault()
        const dir = this.state.direction
        const dirId = db.ref(). push().key ;
        let ref = db.ref('directions');
        ref = ref.child(dirId);
        ref.set(dir);
    }
    
    render() {

        return (
<div>
 <h1>Create</h1>
    <Form onSubmit={this.saveDirection}>
        <Form.Field>
            <Label>Name Of Direction</Label>
             <input className="form-field"  type="text" placeholder ="Name"  name="direction" onChange={this.handleInput}/>
            <Button type="submit">Registration</Button>
        </Form.Field>
    </Form>
    </div>
        )
    }
}
    export default CreateDirection