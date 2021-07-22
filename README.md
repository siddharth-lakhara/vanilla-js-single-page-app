# Vanilla JS Single Page Application (SPA)

A simple SPA application built using vanilla JS

## Getting started
1. `git clone https://github.com/siddharth-lakhara/vanilla-js-single-page-app`
2. `npm install`
3. `npm start`

Navigate to `localhost:8080` in your browser

## A note on routing
Ideally a single page application should use [URL Fragments](https://en.wikipedia.org/wiki/URI_fragment) for routing. It listens to the [hashchange](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event) event from browser to implement routing behaviour <br />

However, I'm using the URL based routing. This allows the complete URL to be visible on browser, giving each page a unique URL. For this, the app listens to [popstate](https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event) event fired by [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)