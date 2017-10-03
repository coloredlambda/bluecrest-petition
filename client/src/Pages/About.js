import React from 'react';
import { Header, Container, Button } from 'semantic-ui-react';

const About = () =>
    <div>
    <Container>
        <Header as='h1'>
            Hello World. Please show up!
        </Header>

        <Button primary>
            I am a button
        </Button>
    </Container>
    </div>;


export default About;