import React from "react"
import { Jumbotron,Container,Button } from "reactstrap"

export default function Home() {
    return (
        <div>
            <Jumbotron className="text-center bg-grey">
                <h1> XMEME</h1>
                <p>Add and Explore Memes</p>
                <Container>
                    <Button color="primary">
                        Press for meme
                    </Button>
                </Container>
            </Jumbotron>
            
        </div>
    )
}

