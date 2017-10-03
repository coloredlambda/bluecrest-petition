import React from 'react';
import { Menu } from 'semantic-ui-react';

const AppMenu = () =>
    <Menu fixed='top' size='big' inverted>
                <Menu.Item as='a' header>
                    Echo
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item as='a'>Forum</Menu.Item>
                    <Menu.Item as='a'>Blog</Menu.Item>
                    <Menu.Item as='a'>About</Menu.Item>
                </Menu.Menu>
    </Menu>;

export default AppMenu;
