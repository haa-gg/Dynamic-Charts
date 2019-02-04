google.load("visualization", "1", {
  packages: ["corechart"]
});
google.setOnLoadCallback(drawChart1);

function drawChart1() {

var json = $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/155Ec2P5W4_9KROYbM3oyHJaUQLH9_THzQLZXjVyTn70/values/Sheet1!A1:A7/?key=AIzaSyAHqTdQfwbPHiEA1KF7VsYyPF0ZjBA4qVs",function(json){

//Declaring the column values as excel values
var pirate1 = json.values[6][0];
var pirate2 = json.values[5][0];
var pirate3 = json.values[4][0];
var pirate4 = json.values[3][0];
var pirate5 = json.values[2][0];
var pirate6 = json.values[1][0];
var pirate7 = json.values[0][0];


    // Create and populate the data table.
      var options = {
   title:"Number of sea shanties I sing each day",
      animation: {duration: 1000, easing: 'out',},
       vAxis: {title: "Shanties Sang", minValue:0, maxValue:45 },
      hAxis: {title: "Day of the Week"},
      colors:['#ff0000'],
      backgroundColor: { fill:'transparent' }
  };

  var data = new google.visualization.DataTable();    
  data.addColumn('string', 'N');
  data.addColumn('number', 'Value');
  data.addRow(['Monday', 0]);
  data.addRow(['Tuesday', 0]);
  data.addRow(['Wednesday', 0]);
  data.addRow(['Thursday', 0]);
  data.addRow(['Friday', 0]);
  data.addRow(['Saturday', 0]);
  data.addRow(['Sunday', 0]);

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
  data.setValue(0, 1, pirate1);
  data.setValue(1, 1, pirate2);
  data.setValue(2, 1, pirate3);
  data.setValue(3, 1, pirate4);
  data.setValue(4, 1, pirate5);
  data.setValue(5, 1, pirate6);
  data.setValue(6, 1, pirate7);
  chart.draw(data, options);

  });

}

google.load("visualization", "1", {
  packages: ["corechart"]
});

var timer;
$(window).bind('resize', function() {
  clearTimeout(timer);
  timer = setTimeout(function(){ drawChart1(); }, 500);
});

