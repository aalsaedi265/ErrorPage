
import React from 'react';
import {Card} from 'react-bootstrap'

export default function OurIssue(){

    return (

        <>
        <Card 
        

        style={{ hieght: '50px',
                width: '40em',
                backgroundColor: 'black',
                color: 'white'}}>
            <Card.Body>
                <Card.Title>  Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"
                style ={{color: 'white'}}>
                
                Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
               
            </Card.Body>
        </Card>
        </>
    )
}