'use strict';

let neighborhoods = [];

// REVIEW: This is another way to use a constructor to duplicate an array of raw data objects
function Neighborhood (rawDataObject) {
  for (key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
};

Neighborhood.prototype.toHtml = function() {
  // REVIEW: This method on each instance of Neighborhood allows that object to create its own HTML
  // TODO: Complete this using Handlebars!!!
  // 1. Get the template from the HTML document
  // 2. Use Handlebars to "compile" the HTML
  // 3. Do not forget to return the HTML from this method
};

// TODO: refactor to arrow functions
neighborhoodDataSet.forEach(function(neighborhoodObject) {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach(function(ourNewNeighborhoodObject){
  $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
});
