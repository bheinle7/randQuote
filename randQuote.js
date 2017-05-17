$(document).ready(function() {
  $("#getQuote").on("click", function() {
    $.ajax({
      url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
      success: function(a) {
        $(".quote")
          .empty()
          .append(a[0].content + "<p>&mdash; " + a[0].title + "</p>");
          var quote = a[0].content
          var quotee = a[0].title
          var divQuote = document.createElement('div');
          var divQuotee = document.createElement('div');
          divQuote.innerHTML = quote;
          divQuotee.innerHTML = quotee;
          var quoteCleaned = divQuote.textContent
          var quoteeCleaned = divQuotee.textContent

        $('#tweet iframe').remove();
          var tweet = $('<a></a>')
          .addClass('twitter-share-button')
          .attr('data-text', quoteCleaned+'-'+quoteeCleaned)
          .attr('data-url',' ');
        $('#tweet').append(tweet);
        twttr.widgets.load();

      },
      cache: false
    });
  });
});
