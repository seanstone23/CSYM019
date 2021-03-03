var element = document.getElementById('myChart').getContext('2d');


var chartType = 'horizontalBar';

   // The data for our dataset
   var chartData = {
       labels: ['Chelsea', 'Manchester City', 'Manchester United', 'Arsenal', 'Tottenham Hotspurs'],
       datasets: [{
           label: 'Goals Scored in Total',
           barThickness: 6,
           backgroundColor: ['rgb(22, 73, 243)', 'rgb(22, 236, 243)', 'rgb(255, 99, 132)', 'rgb(255, 0, 0)', 'rgb(255, 255, 255)'],
           borderColor: 'rgb(104, 66, 66)',
           borderWidth: 1,
           hoverBackgroundColor: 'rgb(162, 162, 162)',
           data: [16, 10, 12, 9, 15],

       }]
   };

   // Configuration options go here
   var chartOptions = {
     layout: {
           padding: {
               left: 500,
               right: 50,
               top: 100,
               bottom: 50,
           }
         },

       scales: {
           xAxes: [{
               ticks: {
                   beginAtZero: true,
               }
           }]
       }
   };

var chart = new Chart(element, {type: chartType, data: chartData, options: chartOptions});
