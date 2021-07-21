// Root of client side JS

// Client side router
const router = async () => {
  const routes = [
    { path: '/', view: () => { console.log('Viewing dashboard'); } },
    { path: '/posts', view: () => { console.log('Viewing posts'); } },
    { path: '/settings', view: () => { console.log('Viewing settings'); } },
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

  match.route.view();
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
