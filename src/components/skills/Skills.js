import React from 'react'
import {Component} from 'react'
import {Form, Message, Label, Button, Divider} from 'semantic-ui-react'
import db from '../../firebase'


class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skill: {
                name: '',
                direction: '',
                level: ''
            },
            activeDirectionKey:{
                hash:''
            },
            directions: {},
        }
        this.selectDirection = this.selectDirection.bind(this);
        this.generateOptions = this.generateOptions.bind(this);
        this.submit = this.submit.bind(this)
    }

    componentDidMount() {
        db.ref('directions').once('value', data => this.setState({
                directions: data.val() ? data.val() : {},
            })
        )
    }

    generateOptions(options) {
        return Object.keys(options).map(el => {
            let opt = <option key={el} value={el}> {options[el].direction}</option>;
            return opt
        })
    }

    selectDirection(event) {
        event.preventDefault();
        const directions = this.state.directions;
        let activeDirectionKey ={...this.state.activeDirectionKey, "hash":event.target.value};
        this.setState({activeDirectionKey})

        Object.keys(directions).map((key)=> {
            if (key === event.target.value) {
                let skill = {...this.state.skill, "direction":directions[key].direction};
                this.setState({skill});
            }
        })
    }

/*ToDo  Create and data base */
     handleInput(input) {
        return (event => {
            let skill = {...this.state.skill, [input]: event.target.value};
            this.setState({skill})
        })
    }

    submit(event){
        event.preventDefault()
        let  dirID = {...this.state.activeDirectionKey}
        let  skill = {...this.state.skill}
        db.ref('directions').child(dirID.hash).set(skill);
        console.log(dirID, skill);
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.submit} >
                    <Form.Field>
                        <Label>Name</Label>
                        <input className="form-field" type="text" placeholder="name" name="name"
                               onChange={this.handleInput('name')}/>
                    </Form.Field>

                    <Form.Field>
                        <Label>Level of skill</Label>
                        <input className="form-field" type="range" min="1" max='10' step="1" name="level"
                               onChange={this.handleInput('level')}/>
                        <input value={this.state.skill.level}/>
                    </Form.Field>
                    <Form.Field>
                        <select onChange={this.selectDirection}>
                            <option key='none' defaultValue value>None</option>
                            {this.generateOptions(this.state.directions)}
                        </select>
                    </Form.Field>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Skills