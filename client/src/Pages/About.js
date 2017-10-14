import React from 'react';
import { Header, Container, Button } from 'semantic-ui-react';

const About = () =>
    <div style={{ marginTop : '8%', textAlign : 'center'}}>
    <Container>
        <Header as='h1'>
            Hi.
        </Header>

        <p style={{ fontSize : '20px' }}>
            This is Echo. We are an online students' forum for Bluecrest College managed by students and
            used by students. Echo has been created with the vision of giving the students of Bluecrest College
            a common platform to easily air their thoughts and also share ideas with each other. The website is
            still under heavy development and is subject to changes in the future.
        </p>

        <Header as='h1'>
            Ways to contribute.
        </Header>

        <p style={{ fontSize : '20px' }}>
            There are so many ways to contribute to this initiative based on your skillset and we will be very grateful if you do.
            Some ways to contribute are as follows :
            1. Adding content and following default
            2. Helping out with the development process of the website
            3. Writing blog posts to be added to the website
        </p>

        <Button primary>

        </Button>
    </Container>
    </div>;


export default About;