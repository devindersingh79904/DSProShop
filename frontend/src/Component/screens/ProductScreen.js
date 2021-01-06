import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../Rating'
import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchProductFromServer = async () => {
      const { data } = await axios.get(`/api/product/${match.params.id}`)

      setProduct(data)
    }
    fetchProductFromServer()
  }, [])

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush '>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                text={`${product.numReviews} reviews`}
                value={product.rating}
              />
            </ListGroup.Item>
            <ListGroup.Item>price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description : ${product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'out of stack'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disable={product.countInStock === 0 ? 'true' : 'false'}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen