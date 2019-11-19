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

    // You need function(s) to handle the input change
    
    // You need function to handle the clear function

    // You need a function to handle the form submition

    render() {
        return(
            <div style={{maxWidth: '600px', margin: '0 auto'}} >
                <h1 style={{marginTop: '20px'}}>People's Favorite Types of Coffee</h1>
                <div style={{margin: '0px 0 40px 0'}}>
                    <div className='row'>
                        {/* Map function goes here */}
                    </div>
                </div>
                <a style={{color: 'blue', cursor: 'pointer'}}>clear</a>
                <hr />
                <h3>Input Your Favorite Coffee Here!</h3>
                <br />
                {/* handleSubmit goes in the form outside tag just like in Ruby */}
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>Frist Name</Form.Label>
                            <Form.Control name='firstName' type="name" placeholder="Enter First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name='lastName' type="name" placeholder="Enter Last Name" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFavCoffee">
                            <Form.Label>Favorite Coffee</Form.Label>
                            <Form.Control name='favCoffee' type="name" placeholder="Enter Favorite Coffee Type" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control name='city' type="name" placeholder="Enter City" />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div>
                    <br /><br />
                    <h2>Real Time Full Name</h2>
                    <h5></h5>
                </div>
            </div>
        )
    }
}