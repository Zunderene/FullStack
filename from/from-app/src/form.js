import React, { Component } from 'react'
import axios from 'axios'
import { Container,Input, Form, TextArea, Button, Table, Label} from 'semantic-ui-react'


const SERVICE = process.env.REACT_APP_SERVICE

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
        await axios.post(SERVICE + '/set', { "name": name, "pots": area})
        setTimeout(async () => await axios.get(SERVICE + '/get') ,1000)
    } 

     componentDidMount(){
        axios.get(SERVICE + '/get').then((result) =>{console.log(result.data);this.setState({ "data": result.data})});
    }

    render(){
        const { name, area, data } = this.state
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
                                        {ele.name}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {ele.post}
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