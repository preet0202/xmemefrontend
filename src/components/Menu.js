import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default function Menu() {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                Add Memes
            </Link>

            <Link className="list-group-item list-group-item-action" tag="a" to="/find-memes" action>
                Find Memes
            </Link>

            <Link className="list-group-item list-group-item-action" tag="a" to="/view-memes"action>
                View Memes
            </Link>
        </ListGroup>
    )
}
