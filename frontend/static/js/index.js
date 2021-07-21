// Root of client side JS

// NOTE: it is important to put '.js' extension at the end
//        without extension, the request will go to express server
//        giving error in browser
import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import Settings from './views/Settings.js';

// Client side router
const router = async () => {
  const routes = [
    { path: '/', View: Dashboard },
    { path: '/posts', View: Posts },
    { path: '/settings', View: Settings },
  ];

  // Test each route for potential match
  // TODO: Remove this in final version
  const potentialMatches = routes.map((route) => ({
    route,
    isMatch: window.location.pathname === route.path,
  }));

  let match = potentialMatches.find((potentialMatch) => (potentialMatch.isMatch));

  // handle 404 routes
  if (!match) {
    // redirect to home page
    // TODO: create a 404 page
    match = {
      route: routes[0],
    };
  }

  const View = new match.route.View();
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
