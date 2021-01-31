import React from 'react'
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const List = ({ state }) => {

    // console.log(state)

    const category = () => state.properties[0].category_id === 1 ? 'birthday' : state.properties[0].category_id === 2 ? 'corporate' : state.properties[0].category_id === 3 ? 'wedding' : ''

    return (
        <div>
            {
                state.properties.map((propObj) => {
                    return (
                        <Col sm={12} md={6} lg={4} xl={3} key={propObj.id}>
                            <Card className='my-3 p-3 rounded' >
                                <Link to={{ pathname: `/properties/${category()}/detail`, state: { id: propObj.id, title: propObj.title, category_id: propObj.category_id, featured_image: `${propObj.featured_image}`, description: propObj.description, rate: propObj.rate } }} >
                                    <Card.Img src={`${propObj.featured_image}`} variant='top' />
                                </Link>&nbsp;&nbsp;
                                <Card.Body>
                                    <Link to={{ pathname: `/properties/${category()}/detail`, state: { id: propObj.id, title: propObj.title, category_id: propObj.category_id, featured_image: `${propObj.featured_image}`, description: propObj.description, rate: propObj.rate } }} >
                                        <Card.Title as='div'>
                                            <strong>
                                                {propObj.title}
                                            </strong>
                                        </Card.Title>
                                    </Link>
                                    <Card.Text as='h3'>
                                        ${propObj.rate}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
        </div>
    )
}

export default List
