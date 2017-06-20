$(document).ready(function() {
  var quote = "";
  $("#getQuote").on("click", function() {
    $.ajax({
      url: "http://quotes.stormconsultancy.co.uk/random.json",
      dataType: "json",
      success: function (response) {
        if (response.author) {
          $("#quote").text(response.quote + " - " + response.author);
          quote = response.quote + " - " + response.author;
        } else {
          $("#quote").text(response.quote + " - " + "Unkown");
          quote = response.quote + " - " + "Unkown";
        }
      },
      cache: false
    });
  });
  $("#tweet").on("click", function () {
    window.open("https://twitter.com/share?text=" + quote + "&url=blank");
  });
});
