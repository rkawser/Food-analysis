import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../Hooks/Useproducts';
import Reviews from '../Reviews/Reviews';
import './Review.css'
const Review = () => {
    const [reviews, setReviews] = useProducts()

    return (
        <div className='review-body'>
            <Container  fluid>


                <Row xs={1} md={3}  className='g-4 m-5'>
                    {
                        reviews.map(review => <Reviews key={review.id} reviews={review}></Reviews>)
                    }
                </Row>

            </Container>
        </div>
    );
};

export default Review;