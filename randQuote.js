$(document).ready(function() {
  var quoteCleaned = "";
  $("#getQuote").on("click", function() {
    $.ajax({
      url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
      success: function(a) {
        $("#quote")
          .empty()
          .append(a[0].content + "<p>&mdash; " + a[0].title + "</p>");
        var quote = a[0].content;
        var quotee = a[0].title;
        var divQuote = document.createElement("div");
        var divQuotee = document.createElement("div");
        divQuote.innerHTML = quote;
        divQuotee.innerHTML = quotee;
        var quoteCleaned = divQuote.textContent;
        var quoteeCleaned = divQuotee.textContent;

        var tweetBtn = document.getElementById("tweet");
        tweetBtn.onclick = function() {
          window.open(
            "https://twitter.com/share?text=" + quoteCleaned + " -" + quoteeCleaned + "&url=blank"
          );
        };
      },
      cache: false
    });
  });
});
