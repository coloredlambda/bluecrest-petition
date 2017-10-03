import React from 'react';
import { Segment, Button, Header, Container, Icon } from 'semantic-ui-react';

const AppCarousel = () =>
    <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
    >

        <Container text>
            <Header
                as='h1'
                content='We are Echo!'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginTop: '2em' }}
            />
            <Header
                as='h2'
                content='A Bluecrest College Student Forum.'
                inverted
                style={{ fontSize: '2em', fontWeight: 'normal', marginTop : '1em' }}
            />


            <Button primary size='huge'>
                Read How To Contribute
                <Icon name='right arrow' />
            </Button>
        </Container>
    </Segment>;

export default AppCarousel;