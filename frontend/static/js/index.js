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
  // console.log();
};

document.addEventListener('DOMContentLoaded', () => {
  router();
});
