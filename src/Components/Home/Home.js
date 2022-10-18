import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import bannerPhoto from '../../image/banar.png'
import useProducts from '../../Hooks/Useproducts';
import Reviews from '../Reviews/Reviews';
import { Link } from 'react-router-dom';

const Home = () => {

    const [products, setProducts] = useProducts()

    const restProduct = products.slice(0, 3)


    return (

        <div>
            <div className='home-banner'>
                <Container>
                    <Row className='justify-content-center align-items-center banner-style'>
                        <Col xs={12} md={7}>
                            <div className='banner-text'>
                                <h5>Best In Town</h5>
                                <h1>ENJOY OUR <br /> CHICKEN<small id='extra-color'>BURGER </small><br /> FAST FOOD</h1>
                                <h4>Bacon-Potatos-Bbq Sauce</h4>
                                <button className='banner-btn'>Order Now</button>
                                <small id='price-title'> Price : <small id='banner-price'>$10.50</small></small>
                            </div>
                        </Col>

                        <Col xs={8} md={5}>
                            <div>
                                <img src={bannerPhoto} className='img-fluid' alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container className='my-5'>
                <Row xs={1} md={3} className='g-4 m-5'>
                    {
                        restProduct.map(review => <Reviews key={review.id} reviews={review}></Reviews>)
                    }
                </Row>
                <div>
                   <Link to='/review'> <button className='review-btn'>See More</button></Link>
                </div>

            </Container>

        </div>
    );
};

export default Home;