import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default class PeopleList extends React.Component {

    render() {
        return(
            <div className='col-sm-6'>
                <Card style={{ width: '100%', marginTop: '30px'}}>
                    <Card.Body>
                        <Card.Title>{this.props.firstName} {this.props.lastName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.city}</Card.Subtitle>
                        <Card.Text>
                        {this.props.firstName}'s favoirte coffee is {this.props.favCoffee}
                        </Card.Text>
                        <Button onClick={() => this.props.onDelete(this.props.firstName)} variant='outline-danger'>Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}