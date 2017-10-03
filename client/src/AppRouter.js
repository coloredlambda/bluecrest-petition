import React from 'react';

//React router for moving through pages in the react app. All pages are supposed to have an entry here
import { Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';

//Pages to be routed
import Homepage from './Pages/Homepage';
import About from './Pages/About';

function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}

// child matches will...
const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
        opacity: 0,
        scale: 1.2,
    },
    // leave in a transparent, downscaled state
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
    },
};

const AppRouter = () =>
    <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper"
    >
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/about' component={About}/>
    </AnimatedSwitch>;

export default AppRouter;
