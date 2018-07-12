'use strict';

let neighborhoods = [];

// REVIEW: This is another way to use a constructor to duplicate an array of raw data objects
function Neighborhood (rawDataObject) {
  for (let key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
};

Neighborhood.prototype.toHtml = function() {
  // REVIEW: This method on each instance of Neighborhood allows that object to create its own HTML
  // TODO: Complete this using Handlebars!!!
  // 1. Get the template from the HTML document
  // 2. Use Handlebars to "compile" the HTML
  // 3. Do not forget to return the HTML from this method
  let templateHtml = $('#neighborhood-template').text();

  // renderTemplate is a function from a neighborhood to HTML
  let renderTemplate = Handlebars.compile(templateHtml);

  console.log(renderTemplate({ name: 'Keith' }));

  // return renderWithoutHandlebars(this);
  return renderTemplate(this);
};

// Compiling with Handlebars produces a function like this:
function renderWithoutHandlebars(neighborhood) {
  return `<h2>${neighborhood.name}</h2>`;
}

// TODO: refactor to arrow functions
neighborhoodDataSet.forEach(function(neighborhoodObject) {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach(ourNewNeighborhoodObject => {
  $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
});

// C#   (params) => { ... }
// Java (params) -> { ... }

/* Arrow function variations:
No parameters:  () => { ... }
Solo params:    x  => { ... }
Many params:    (x, y) => { ... }

Instead of { ... }, you can use a single expression:

x => x * 2

is same as

x => { return x * 2; }


neighborhood => neighborhood.name

*/

/* Arrow functions treat 'this' differently

DO THIS:
$('a').click(function () {
  let $link = $(this)
  console.log($link.attr('href'));
});

THIS DOES NOT WORK:
$('a').click(() => {
  let $link = $(this)
  console.log($link.attr('href'));
});

*/