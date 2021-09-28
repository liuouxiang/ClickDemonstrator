/*
Copyright 2021 RWTH Aachen University
*/

import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';

import {
    /*AppAside,*/
    AppBreadcrumb,
    AppFooter,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../_nav';
// routes config
import routes from '../routes';
import Footer from './Footer';
import Header from './Header';
/*import Aside from './Aside';*/

class Layout extends Component {

    componentDidMount() {
        /* Dispatch main initialization logic here */
    }

    componentWillUnmount() {
        /* Dispatch cleanup logic here */
    }

    render() {
        return (
            <div className="app">
                <AppHeader fixed>
                    <Header/>
                </AppHeader>
                <div className="app-body">
                    <AppSidebar fixed display="lg">
                        <AppSidebarHeader/>
                        <AppSidebarForm/>
                        <AppSidebarNav navConfig={navigation} {...this.props} />
                        <AppSidebarFooter/>
                        <AppSidebarMinimizer/>
                    </AppSidebar>
                    <main className="main">
                        <AppBreadcrumb appRoutes={routes}/>
                        <Container fluid>
                            <Switch>
                                <Route path="/" exact render={() => <Redirect to="/home"/>}/>
                                {routes.map((route, idx) => {
                                        return route.component ? (
                                                <Route key={idx} path={route.path} exact={route.exact} name={route.name}
                                                       render={props => (
                                                           <route.component {...props} />
                                                       )}/>)
                                            : null;
                                    },
                                )}
                            </Switch>
                        </Container>
                    </main>
                    {/* <AppAside fixed>
                        <Aside/>
                    </AppAside> */}
                </div>
                <AppFooter>
                    <Footer/>
                </AppFooter>
            </div>
        );
    }
}


export default Layout

