import { Route, Switch } from 'wouter';

import ErrorScreen from '~/screens/404';
import AboutScreen from '~/screens/about-screen';
import ContactScreen from '~/screens/contact-screen';
import HomeScreen from '~/screens/home-screen';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={HomeScreen} />
            <Route path="/about" component={AboutScreen} />
            <Route path="/contact" component={ContactScreen} />

            {/* if none of the route is matched */}
            <Route component={ErrorScreen} />
        </Switch>
    );
};

export default Routes;
