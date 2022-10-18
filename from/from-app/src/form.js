import React, { Component } from 'react'
import axios from 'axios'
import { Container,Input, Form, TextArea, Button, Table, Label} from 'semantic-ui-react'

class FormBuzon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            area:'',
            data: []
        };
    }

    handleChange = (e, { name, value }) => {this.setState({ [name]: value })}

    handleSubmit = async () => {
        const { name, area } = this.state;
        await axios.post('/set', { "name": name, "pots": area})
        setTimeout(async () => await axios.post('/get') ,1000)
    } 

     componentDidMount(){
        axios.post('/get').then((result) => this.state.data.push(result));
    }

    render(){
        const { name, area, data } = this.state
        console.log(data)
        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Field
                            control={Input}
                            name='name'
                            placeholder='Nombre'
                            value={name}
                            onChange={this.handleChange}
                            />
                    </Form.Group>
                    <Form.Group widths="equal">
                    <Form.Field 
                            control={TextArea}
                            value={area}
                            name='area'
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Field control={Button}  content='Submit' >Submit</Form.Field>
                </Form>

                <Table celled>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {
                        data.map((ele) => {
                            
                            return (
                                <Table.Row>
                                    <Table.Cell>
                                        {ele.authorId}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {ele.content}
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })
                        
                    } 
                </Table.Body>
                </Table>
            </Container>
        )
    }
}

export default FormBuzon