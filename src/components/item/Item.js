import React from 'react'
import {Component} from 'react'
import {Form, Button, Message} from 'semantic-ui-react'
import db from '../../firebase'
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {},
            target: {
                direction: '',
                level: '',
                name: '',
            },
            targetKey: {},
            showForm: true,
            triggerDelete:false,
        };
        this.generateItems = this.generateItems.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.setState({target: this.props.items})
        this.setState({targetKey: this.props.keygen})
    }

    handleInput(event) {
        let target = {...this.state.target, [event.target.name]: event.target.value}
        this.setState({target})
    }

    generateItems(data) {
        let block = [];

        Object.keys(data).map((key => {
                if (key === 'name' || key === 'direction' || key === 'level') {
                    block.push(<input key={key} name={key} value={data[key]} className="items"
                                      onChange={this.handleInput}/>)

                }
                else {
                    this.setState({showForm: false})
                    return []
                }
            })
        );
        return block
    }

    submit(event) {
        event.preventDefault();
        this.props.submit([this.state.target, this.state.targetKey , this.state.triggerDelete])
    }
deleteForm(event){
this.setState({triggerDelete:true})
}

    render() {
        let form = this.state.showForm && (
            <Form  onSubmit={this.submit}>
                {this.generateItems(this.state.target)}
                <Button  onClick={this.deleteForm.bind(this)}>Push for deleting</Button>
                <Button type="submit">{(!this.state.triggerDelete) ? "Send" : "Delete"}</Button>
            </Form>

        )
        return (
            <div>
                {form}
            </div>
        )
    }
}

export default Item