import React from 'react'
import Card from 'react-bootstrap/Card';
import "./CardComponent.css"
const CardComponent = ({ title, src, text }) => {
    return (
        <Card className='cardComponentContainer'>
            <Card.Img variant="top" className='cardImage' src={src} />
            <Card.Body className='cardBody'>
                <Card.Title className='cardTitle'>{title}</Card.Title>
                <Card.Text className='cardText'>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardComponent