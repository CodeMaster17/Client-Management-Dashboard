import React from 'react'
import Card from 'react-bootstrap/Card';
import "./CardComponent.css"
import Paragraph from '../Text/Text';
import Text from '../Text/Text';
const CardComponent = ({ title, src, text }) => {
    return (
        <>

            {/* <Card className=''>
                <Card.Img variant="top" className='cardImage' src={src} />
                <Card.Body className='cardBody'>
                    <Card.Title className='cardTitle'>{title}</Card.Title>
                    <Card.Text className='cardText'>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card> */}

            <div className='cardComponentContainer' >
                <img src={src} alt="image" className='cardImage' />
                <div className='cardComponentInnerContainer'>

                <p className='cardtitle p-bold'>{title}</p>
                <p className='cardtext p-bolder'>{text}</p>
                </div>
            </div>
        </>
    )
}

export default CardComponent