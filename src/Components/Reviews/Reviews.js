import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Reviews.css'
const Reviews = ({ reviews }) => {
    const {name, rating, review} = reviews

    return (
        <div className='' >
            
           <Card border="info" style={{height:'250px'}} >
                <Card.Header>Name: {name}</Card.Header >
                <Card.Body>
                    <Card.Text>
                        {review}
                    </Card.Text>
                    <Card.Footer>Rating: {rating}</Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Reviews;