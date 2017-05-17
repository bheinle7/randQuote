$(document).ready(function() {
  $("#getQuote").on("click", function() {
    $.ajax({
      url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
      success: function(a) {
        $(".quote")
          .empty()
          .append(a[0].content + "<p>&mdash; " + a[0].title + "</p>");
          var quote = document.getElementById('quote').innerHTML.replace(/<\/p>|<p>|<strong>|<\/strong>|<br>/gi,' ');

        $('#tweet iframe').remove();
          var tweet = $('<a></a>')
          .addClass('twitter-share-button')
          .attr('data-text', quote)
          .attr('data-url',' ');
        $('#tweet').append(tweet);
        twttr.widgets.load();

      },
      cache: false
    });
  });
});
