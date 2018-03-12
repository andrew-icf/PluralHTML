var coffeeSales = new Array();
coffeeSales[0] = 'Jan, 170';
coffeeSales[1] = 'Feb, 654';
coffeeSales[2] = 'Mar, 120';
coffeeSales[3] = 'Apr, 520';
coffeeSales[4] = 'May, 450';
coffeeSales[5] = 'Jun, 89';
coffeeSales[6] = 'Jul, 278';
coffeeSales[7] = 'Aug, 140';
coffeeSales[8] = 'Sep, 325';
coffeeSales[9] = 'Oct, 632';
coffeeSales[10] = 'Nov, 297';
coffeeSales[11] = 'Dec, 311';

function createAxis(context, startx, starty, endx, endy) {
  context.beginPath();
  context.moveTo(startx, starty);
  context.lineTo(endx, endy);
  context.closePath();
  context.stroke();
}

function createBar(context, x, y, width, height) {
  context.beginPath();
  context.rect(x, y, width, height);
  context.closePath();
  context.stroke();
  context.fill();
}

function drawChart() {
  var canvas = document.getElementById('barChart');

  if (canvas && canvas.getContext) {
    var context = canvas.getContext('2d');
    createBarChart(context, coffeeSales, 30, 20, (canvas.height - 20), 50);
  }
}

function createBarChart(context, data, startX, barWidth, chartHeight) {
  context.lineWidth = '1.2';
  var startY = 780;

  createAxis(context, startX, startY, startX, 30); // verticle axis
  createAxis(context, startX, startY, 650, startY); // horizontal axis

  context.lineWidth = '0.0';
  var maxValue = 0;
  for (var i = 0; i < data.length; i++) {
    var item = data[i].split(',');
    var itemName = item[0];
    var itemValue = parseInt(item[1]);
    if (parseInt(itemValue) > parseInt(maxValue)) maxValue = itemValue;

    context.fillStyle = 'blue';
    createBar(context, 20 + startX + (i * barWidth) + i + (i * 30), (chartHeight - itemValue), barWidth, itemValue, true);

    context.textAlign = 'left';
    context.fillStyle = 'black';
    context.fillText(itemName, 20 + startX + (i * barWidth) + i + (i * 30), chartHeight + 15, 200);

  }

}
