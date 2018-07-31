# Review

- What is the value of variable myElement after executing the following code?

  ```js
  var myElement = jQuery('img[alt]').get(-1);
  ```

- In the MVC (Model View Controller) design pattern, what is the function of the "model"?

- Which of the following statements are true about local storage?

- Imagine that you are trying to write a client-side webapp that interacts with the following RESTFUL API that represents an online book catalog...

  ```js
  var onSuccess = data => { /* handle it */ };

  // Long version 1 (any response type)
  $.ajax({ url: '...', method: '...', success: onSuccess });
  $.ajax({ url: '...', method: '...' }).then(onSuccess);
  $.ajax({ url: '...', method: '...' }).done(onSuccess);

  // Long version 2 (any response type)
  $.ajax('...', { method: '...', success: onSuccess });
  $.ajax('...', { method: '...' }).then(onSuccess);
  $.ajax('...', { method: '...' }).done(onSuccess);

  // Short version (any response type)
  $.get('...', onSuccess);
  $.get('...').then(onSuccess);
  $.get(url).done(onSuccess);

  // Assume JSON response
  $.getJSON('...', onSuccess);
  $.getJSON('...').then(onSuccess);
  $.getJSON(url).done(onSuccess);
  ```

  <http://api.jquery.com/category/ajax/shorthand-methods/>

- Consider the following two JavaScript snippets using jQuery:

  ```js
  var $divElement = $('div:eq(1)');

  var $otherDivElement = $('div').first();
  ```
