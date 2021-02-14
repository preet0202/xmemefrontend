import React from 'react'
import { Jumbotron,Container,Button } from "reactstrap"


export default function Header() {
    return (
        <div>
            <Jumbotron className="text-center bg-primary my-1">
                <h1> XMEME</h1>
                <p>Add and Explore Memes</p>
                {/* <Container>
                    <Button color="primary">
                        Press for meme
                    </Button>
                </Container> */}
            </Jumbotron>
            
        </div>
    )
}
