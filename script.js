$(document).ready(function() {
    updateColor();
  
    $('#redRange, #greenRange, #blueRange').on('input', function() {
      updateColor();
    });
  });
  
  function updateColor() {
    var red = $('#redRange').val();
    var green = $('#greenRange').val();
    var blue = $('#blueRange').val();
  
    var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    $('#colorBox').css('background-color', rgbColor);
  
    var hexColor = rgbToHex(red, green, blue);
    $('#hexCode').text(hexColor);
  }
  
  function rgbToHex(r, g, b) {
    r = parseInt(r).toString(16).padStart(2, '0');
    g = parseInt(g).toString(16).padStart(2, '0');
    b = parseInt(b).toString(16).padStart(2, '0');
    return '#' + r + g + b;
  }
