import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// layout
import AppLayout from "./layouts/app";

// pages
import Form from "./pages/Form";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import NotFound from "./pages/404";

// stylesheets
import "antd/dist/antd.css";
import "./assets/css/styles.css";

export default () => (
  <div className="wrapper">
    <div className="card-wrapper">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <AppRoute Layout={AppLayout} Component={Form} props={props} />
            )}
          />
          <Route
            path="/home"
            render={(props) => (
              <AppRoute Layout={AppLayout} Component={Form} props={props} />
            )}
          />
          <Route
            path="/about"
            render={(props) => (
              <AppRoute Layout={AppLayout} Component={About} props={props} />
            )}
          />
          <Route
            path="/contact"
            render={(props) => (
              <AppRoute Layout={AppLayout} Component={Contact} props={props} />
            )}
          />
          <Route
            path="/help"
            render={(props) => (
              <AppRoute Layout={AppLayout} Component={Help} props={props} />
            )}
          />
          <Route
            path="*"
            render={(props) => (
              <AppRoute Layout={AppLayout} Component={NotFound} props={props} />
            )}
          />
          {/* {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.Component />}

              render={(props) => (
                <route.component {...props} Layout={route.Layout} />
              )}
            />
          ))} */}
        </Switch>
      </Router>
    </div>
  </div>
);

const AppRoute = ({ Component, Layout, props }) => {
  if (Layout) {
    return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  }

  if (!Component) {
    return <Layout {...props} />;
  }

  return <Component {...props} />;
};

// const routes = [
//   {
//     path: "/",
//     exact: true,
//     Component: Form,
//     Layout: AppLayout,
//   },
//   {
//     path: "/home",
//     exact: true,
//     Component: Form,
//     Layout: AppLayout,
//   },
//   {
//     path: "/about",
//     exact: true,
//     Component: About,
//     Layout: AppLayout,
//   },
//   {
//     path: "/help",
//     exact: true,
//     Component: Help,
//     Layout: AppLayout,
//   },
//   {
//     path: "/contact",
//     exact: true,
//     Component: Contact,
//     Layout: AppLayout,
//   },
//   {
//     path: "*",
//     exact: true,
//     Component: NotFound,
//     Layout: AppLayout,
//   },
// ];
