/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log('Hello World from Webpacker')


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "../styles/theme";
import "../js/theme";
import "controllers";


import { myTyped } from "../js/typed";
import { loadDynamicBannerText } from "../js/typed";

import { navBar } from "../js/navbar-dropdown";
myTyped();
navBar();



import { dashboardLine } from "./charts";
import { dashboardLineJazztel } from "./charts";
import { dashboardLineJazztelPnl } from "./charts";
import { dashboardLineCggPnl } from "./charts";
import { dashboardLineSolocal } from "./charts";
import { priceCl } from "./charts";
import { priceCgg } from "./charts";
import { directLending } from "./charts";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  if (document.getElementById("banner-typed-text")) {loadDynamicBannerText();}
});


if (document.getElementById("myChart")) {
  dashboardLine();
};

if (document.getElementById("myChartJazztel")) {
  dashboardLineJazztel();
};

if (document.getElementById("myChartJazztelPnl")) {
  dashboardLineJazztelPnl();
};

if (document.getElementById("myChartCggPnl")) {
  dashboardLineCggPnl();
};

if (document.getElementById("myChartpriceCl")) {
  priceCl();
};

if (document.getElementById("myChartpriceCgg")) {
  priceCgg();
};

if (document.getElementById("mydirectlendinggraph")) {
  directLending();
};

if (document.getElementById("myChartSolocal")) {
  dashboardLineSolocal();
};
