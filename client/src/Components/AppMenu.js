import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AppMenu = () =>
    <Menu fixed='top' size='big' inverted>
        <Link to='/'>
            <Menu.Item as='a' header>
                Echo
            </Menu.Item>
        </Link>

        <Menu.Menu position='right'>
            <Link to='/forum'><Menu.Item as='a'>Forum</Menu.Item></Link>
            <Link to='/blog'><Menu.Item as='a'>Blog</Menu.Item></Link>
            <Link to='/about'><Menu.Item as='a'>About</Menu.Item></Link>
        </Menu.Menu>

    </Menu>;

export default AppMenu;
