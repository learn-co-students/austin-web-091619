import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import PeopleList from '../PeopleList'

export default class CoffeeForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            firstName: '',
            lastName: '',
            favCoffee: '',
            city: '',
            people: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        const value = e.target.value
        this.setState({
            [e.target.name]: value
        })
    }
    
    handleClear = () => {
        this.setState({ people: []})
    }

    handleSubmit(e) {
        e.preventDefault()
        let newPerson = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            favCoffee: this.state.favCoffee,
            city: this.state.city
        }
        this.setState({ people: [...this.state.people, newPerson]})
        this.setState({
            firstName: '',
            lastName: '',
            favCoffee: '',
            city: ''
        })
    }

    render() {
        return(
            <div style={{maxWidth: '600px', margin: '0 auto'}} >
                { this.state.people.length > 0 ?
                <>
                    <h1 style={{marginTop: '20px'}}>People's Favorite Types of Coffee</h1>
                    <div style={{margin: '0px 0 40px 0'}}>
                        <div className='row'>
                            {this.state.people.map((person, index) => (
                                <PeopleList 
                                    key={index}
                                    firstName={person.firstName}
                                    lastName={person.lastName}
                                    favCoffee={person.favCoffee}
                                    city={person.city}
                                />
                            ))}
                        </div>
                    </div>
                    <a style={{color: 'blue', cursor: 'pointer'}} onClick={this.handleClear}>clear</a>
                </>
                :
                null
                }
                <hr />
                <h3>Input Your Favorite Coffee Here!</h3>
                <br />
                <Form onSubmit={this.handleSubmit} >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>Frist Name</Form.Label>
                            <Form.Control onChange={this.handleChange} value={this.state.firstName} name='firstName' type="name" placeholder="Enter First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={this.handleChange} value={this.state.lastName} name='lastName' type="name" placeholder="Enter Last Name" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFavCoffee">
                            <Form.Label>Favorite Coffee</Form.Label>
                            <Form.Control onChange={this.handleChange} value={this.state.favCoffee} name='favCoffee' type="name" placeholder="Enter Favorite Coffee Type" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control onChange={this.handleChange} value={this.state.city} name='city' type="name" placeholder="Enter City" />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div>
                    <br /><br />
                    {this.state.firstName !== '' || this.state.lastName !== '' ?
                    <>
                    <h2>Real Time Full Name</h2>
                    <h5>{this.state.firstName} {this.state.lastName}</h5>
                    </>
                    :
                    null
                    }
                </div>
            </div>
        )
    }
}