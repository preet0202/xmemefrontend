import React from 'react'

import {
    Card, CardImg, CardText, CardBody,CardFooter,
    CardTitle, CardSubtitle, Button,Container
  } from 'reactstrap';

export default function Meme({meme}) {
    return (
        <Card>
            <CardBody className="text-center">
                <CardSubtitle className="font-weight-bold">{meme.name}</CardSubtitle>
                <CardText>{meme.description}</CardText>
                <CardText>{meme.url}</CardText>
                <CardImg  src={meme.url} />
            </CardBody>
        </Card>
    );
}
