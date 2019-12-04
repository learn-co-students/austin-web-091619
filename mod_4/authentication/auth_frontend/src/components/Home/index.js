import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = (props) => {
    const handleClick = () => {
        axios.delete('http://localhost:3001/logout', { withCredentials: true })
        .then(response => {
            props.handleLogout()
            props.history.push('/')
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            {props.loggedInStatus ? 
                <Link to='/logout' onClick={handleClick}>Logout</Link> 
            : 
            <div>
                <Link to='/login' >Login</Link>
                <Link to='/signup'>Signup</Link>
            </div>
            }
        </div>
    
    )
}

export default Home
