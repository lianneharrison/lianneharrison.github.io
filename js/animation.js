$(document).ready(function(){
  var options = [
    {selector: '#content', offset: 200, callback: function() {
      $("#strapline").css("visibility", "visible").addClass("css-typing");
      }
    }
  ];
  Materialize.scrollFire(options);
  });
