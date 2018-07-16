let ts = new Date();
console.time('JSON test 1');
console.log('Making JSON request');
$.get('https://api.github.com/users/dahlbyk',
  function (data, textStatus, jqXHR) {
    $('#avatar').attr('src', data.avatar_url).css('width', '100px');

    console.timeEnd('JSON test 1');

    console.log('Success, took ' + (new Date() - ts) + ' ms');
    console.log({ data, textStatus });
    console.log(jqXHR);
    console.log(jqXHR.getAllResponseHeaders());
  });

console.time('JSON test 2');
console.log('Making JSON request #2');

$.getJSON('./data/menu.json')
  .always(function () { console.timeEnd('JSON test 2'); })
  .then(function (data, status, xhr) {
    console.log('Menu took ' + (new Date() - ts) + ' ms');
    console.log(data);

    // Do something with the data we received!
    renderMenu(data);

    // Check ETag!
    var oldEtag = localStorage.etag;
    var newEtag = xhr.getResponseHeader('etag');
    console.log({ oldEtag, newEtag });
    localStorage.etag = newEtag;

  }, function (err) {
    console.error(err);
  })
  // .then(success, failure) // recommended
  // .done(success)
  // .fail(failure)
  // .always(alwaysCallback)

function renderMenu(menu) {
  menu.forEach(menuItem => {
    menuItem.topping.forEach(topping => {
      $('<h3>').text(topping.type).appendTo(document.body);
    });
  });
}

// For non-GET requests, use:
/*
$.ajax({
  method: 'HEAD',
  url: '/whatever',
})

$.post(...); // similar to $.get()
*/