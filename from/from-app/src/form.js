import React, { Component } from 'react'
import { Container,Input, Form, TextArea, Button, Table, Label} from 'semantic-ui-react'
import {get, set} from './service/com.js'

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

    handleSubmit = () => {
        const { name, area } = this.state;
        set(name, area)
        setTimeout(() => get ,1000)
    } 

     componentDidMount(){
        this.setState({data : get()});
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