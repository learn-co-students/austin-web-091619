import React from 'react'
import { Card } from 'react-bootstrap'

export default class PeopleList extends React.Component {

    render() {
        return(
            <div className='col-sm-6'>
                <Card style={{ width: '100%', marginTop: '30px'}}>
                    <Card.Body>
                        <Card.Title>First Name and Last Name</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">City</Card.Subtitle>
                        <Card.Text>
                        Persons's favoirte coffee is particular coffee.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}