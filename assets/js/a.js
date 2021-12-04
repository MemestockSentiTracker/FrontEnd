//Your code here
var date = []; // for seven dates
for (var i = 0; i < 5; i++){
	date.push('2021-11-0' + (i + 1));
}

var boxData4Twitter = [ // for seven days' boxplot Data for Twitter
    [-1, -0.5, 0, 0.5, 1],
    [-0.6, -0.5, 0.1, 0.5, 0.6],
    [-0.2, -0.1, 0.3, 0.5, 0.6],
    [-0.8, -0.2, 0, 0.5, 1],
    [-0.7, -0.5, 0, 0.5, 1]
];
var boxData4Reddit = [ // for seven days' boxplot Data for Reddit
    [-0.6, -0.5, 0.1, 0.5, 0.6],
    [-1, -0.5, 0, 0.5, 1],
    [-0.2, -0.1, 0.3, 0.5, 0.6],
    [-1, -0.5, 0, 0.5, 1],
    [-1, -0.5, 0, 0.5, 1]
];

var closePrices = [100, 101, 104, 98, 97]; // for seven days' close prices

// outlier datas for twitter and reddit below, data is in format of ['date_index', 'value'] ([x_axis_value, y_axis_value])
var outliers4Twitter = [ // x, y positions where 0 is the first category
    [0, -0.9],
    [4, -0.8],
    [4, 0.9],
    [4, 0.95]
];
var outliers4Reddit = [ // x, y positions where 0 is the first category
    [1, -0.9],
    [2, -0.8],
    [2, 0.9],
    [2, 0.95]
];
//Your code ends

Highcharts.chart('picture', {
    title: {
        text: 'Price and Emotion score Example'
    },

    legend: {
        enabled: false
    },

    xAxis: {
        categories: date,
        labels: {
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        title: {
            text: 'Date',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        }
    },

    yAxis: [{
        title: {
            text: 'Emotions',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        plotLines: [{
            value: 0,
            color: 'red',
            width: 2,
            /* label: {
                align: 'center',
                style: {
                    color: 'gray'
                }
            } */
        }]
    },
    { // Second yAxis
        labels: {
            format: '${value}',
            style: {
                color: Highcharts.getOptions().colors[3]
            }
        },
        title: {
            text: 'Price',
            style: {
                color: Highcharts.getOptions().colors[3]
            }
        },
        opposite: true
    },],

    series: [ 
  {
    		type: 'boxplot',
        name: 'Emotions for Twitter',
        data: boxData4Twitter,
        tooltip: {
            headerFormat: '<em>Date: {point.key}</em><br/>'
        }
    }, 
    {
    		type: 'boxplot',
        name: 'Emotions for Reddit',
        data: boxData4Reddit,
        tooltip: {
            headerFormat: '<em>Date: {point.key}</em><br/>'
        }
    },
    
    
    {
        name: 'Twitter Outliers',
        color: Highcharts.getOptions().colors[0],
        type: 'scatter',
        data: outliers4Twitter,
        marker: {
            fillColor: 'white',
            lineWidth: 1,
            lineColor: Highcharts.getOptions().colors[0],
            radius: 2
        },
        tooltip: {
            pointFormat: 'Observation: {point.y}'
        }
    },
    {
        name: 'Reddit Outliers',
        color: Highcharts.getOptions().colors[0],
        type: 'scatter',
        data: outliers4Reddit,
        marker: {
            fillColor: 'white',
            lineWidth: 1,
            lineColor: "#000000",
            radius: 2
        },
        tooltip: {
            pointFormat: 'Observation: {point.y}'
        }
    },
    {
    type: 'spline',
    name: 'Price',
    data: closePrices,
    yAxis: 1,
    lineColor: Highcharts.getOptions().colors[3],
    marker: {
      lineWidth: 1,
      lineColor: Highcharts.getOptions().colors[3],
      fillColor: 'white'
    }
  }]

});