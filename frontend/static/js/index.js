// Root of client side JS

// NOTE: it is important to put '.js' extension at the end
//        without extension, the request will go to express server
//        giving error in browser
import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import PostView from './views/PostView.js';
import Settings from './views/Settings.js';

const getParams = (match) => {
  const values = match.results.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result) => result[1]);

  return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
};

const pathToRegex = (path) => new RegExp(`^${path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)')}$`);

// Client side router
const router = async () => {
  const routes = [
    { path: '/', View: Dashboard },
    { path: '/posts', View: Posts },
    { path: '/posts/:id', View: PostView },
    { path: '/settings', View: Settings },
  ];

  // Test each route for potential match
  const potentialMatch = routes.find((route) => {
    const regexMatch = pathToRegex(route.path);
    const isCorrectRoute = window.location.pathname.match(regexMatch);
    return isCorrectRoute !== null;
  });

  let match = {
    route: potentialMatch,
    results: window.location.pathname.match(pathToRegex(potentialMatch.path)),
  };

  // handle 404 routes
  if (!match) {
    // redirect to home page
    // TODO: create a 404 page
    match = {
      route: routes[0],
      results: [window.location.pathname],
    };
  }

  const View = new match.route.View(getParams(match));
  document.querySelector('#app').innerHTML = await View.getHtml();
};

// This function prevents page refresh on hyperlink navigation
const navigateTo = (url) => {
  window.history.pushState(null, null, url);
  router();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (evt) => {
    if (evt.target.matches('[data-link]')) {
      evt.preventDefault();
      navigateTo(evt.target.href);
    }
  });

  router();
});
