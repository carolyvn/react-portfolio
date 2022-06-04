import React from 'react';
import projects from '../assets/data';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

const Project = () => {

    return (
        <div>
            
            <Col xs={12} md={6} lg={4} key={projects.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant='top' scr={projects.image} />
                    <Card.Body>
                        <Card.Title>{projects.title}</Card.Title>
                        <Card.Link href={projects.githuburl}>Github</Card.Link>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    )
};

export default Project;