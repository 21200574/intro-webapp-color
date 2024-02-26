$(document).ready(function() {
  updateColor();

  $('#redInput, #greenInput, #blueInput').on('input', function() {
    updateColor();
  });
});

function updateColor() {
  var red = $('#redInput').val();
  var green = $('#greenInput').val();
  var blue = $('#blueInput').val();

  // Validar que los valores estén en el rango correcto
  red = validateColorValue(red);
  green = validateColorValue(green);
  blue = validateColorValue(blue);

  $('#redInput').val(red);
  $('#greenInput').val(green);
  $('#blueInput').val(blue);

  var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  $('#colorBox').css('background-color', rgbColor);

  var hexColor = rgbToHex(red, green, blue);
  $('#hexCode').text(hexColor);
}

function validateColorValue(value) {
  value = parseInt(value);
  if (isNaN(value)) {
    return 0;
  }
  return Math.max(0, Math.min(255, value));
}

function rgbToHex(r, g, b) {
  r = parseInt(r).toString(16).padStart(2, '0');
  g = parseInt(g).toString(16).padStart(2, '0');
  b = parseInt(b).toString(16).padStart(2, '0');
  return '#' + r + g + b;
}
