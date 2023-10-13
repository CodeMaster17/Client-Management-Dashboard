import React from 'react'
import Card from 'react-bootstrap/Card';
import "./CardComponent.css"
import Paragraph from '../Text/Text';
import Text from '../Text/Text';
const CardComponent = ({ title, src, text }) => {
    return (
        <>

            <Card className='cardComponentContainer'>
                <Card.Img variant="top" className='cardImage' src={src} />
                <Card.Body className='cardBody'>
                    <Card.Title className='cardTitle'>{title}</Card.Title>
                    <Card.Text className='cardText'>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>

            <div className='cardComponentContainer' >
                <img src={src} alt="image" className='cardImage' />
                <Text text={"Title"} />
            </div>
        </>
    )
}

export default CardComponent