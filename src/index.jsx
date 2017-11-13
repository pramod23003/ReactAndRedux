import 'babel-polyfill'; // used because there are some ES6+ features that babel can't handle; require polyfills
import React from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="home" component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="about" component={AboutPage} />
      </Route>
    </Router>
  </Provider>,
  // TODO:  Need to figure out why we get an error using routes={routes} here
  // <Router history={browserHistory} routes={routes} />,
  document.getElementById('app'),
);
