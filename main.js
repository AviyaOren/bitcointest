$('.newsticker').newsTicker({
    row_height: 40,
    max_rows: 1,
    speed: 600,
    direction: 'up',
    duration: 4000,
    autostart: 1,
    pauseOnHover: 0,
    pauseOnHover:1
});

$.getJSON("https://blockchain.info/ticker",function(result){
  $.each(result, function(i, field){
    $(".newsticker").append("<li> <div><img class='flag' src='img/" + i + ".png'/></div> " + "<div class='amount'>" + field.buy + "</div>"+  "<div class='currency'> " + field.symbol +"</div></li>");
      });
    });