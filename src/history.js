import {createBrowserHistory as createHistory} from 'history';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-154998375-1');

const history = createHistory();

console.log('init');

// Listen for changes to the current location
history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location);
  ReactGA.pageview(location.pathname + location.search);
});

export default history;
