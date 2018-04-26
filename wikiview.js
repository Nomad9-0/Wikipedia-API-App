$(document).ready(function() {
  //when search is clicked
  $('#search').click(function() {
    //Gets search input
    var searchBar = $('#searchBar').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchBar+"&format=json&callback=?";
    console.log(url);
    $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: 'json',
      success: function(data, textStatus, jqXHR) {
        $('#output').html(''); //clears old data
        for (var i = 0; i < data[1].length; i++) {
          $('#output').append("<div><div class= btn-output><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
        }
        $('#searchBar').val(''); //empties search bar contents
      },
      error: function(errorMessage) {
        console.log(errorMessage);
      }

    });

  });

  $('#searchBar').keypress(function(e) {
    if (e.which == 13) {
      $('#search').click();
    }
  });

});