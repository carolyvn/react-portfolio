import React from 'react';
// import projects from '../assets/data';
// import Project from '../components/Project';
import Card from 'react-bootstrap/Card';

const Portfolio = () => {

    const projects = [
        {   
            id: 1,
            title: 'Puzzled',
            image: 'https://www.collinsdictionary.com/images/full/kitten_101801980.jpg',
            description: '',
            demoUrl:'',
            githubUrl: 'https://github.com/carolyvn/puzzled'
        },
        {   
            id: 2,
            title: 'Tech Blog',
            image: 'https://www.collinsdictionary.com/images/full/kitten_101801980.jpg',
            description: '',
            demoUrl:'',
            githubUrl: 'https://github.com/carolyvn/tech-blog'
        },
        {
            id: 3,
            title: 'Cal-it',
            iamge: 'https://www.collinsdictionary.com/images/full/kitten_101801980.jpg',
            description: '',
            demoUrl: 'https://carolyvn.github.io/recipe-recommendation/',
            githubUrl: 'https://github.com/carolyvn/recipe-recommendation.git',
        },
        {
            id: 4,
            title: 'Cheat-dev',
            image: 'https://www.collinsdictionary.com/images/full/kitten_101801980.jpg',
            description: '',
            demoUrl: 'https://dev-xps.herokuapp.com/',
            githubUrl: 'https://github.com/carolyvn/cheat-dev.git',
        }
    
    ];

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '15rem' }} key={index} className='box'>
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                    <Card.Text>{card.title}</Card.Text>
                    {/* <Button variant="primary" to='/{card.puzzleId}'>Open Puzzle</Button> */}
                    {/* <Card.Text>Created by:{card.createdBy}</Card.Text> */}
                </Card.Body>
                </Card>
        )
    }

    return (
        <div className='row col-12'>
           <div className='col-lg-4 col-sm-12'>
               {projects.map(renderCard)}
            </div> 
        </div>
    )
};

export default Portfolio;