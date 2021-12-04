Highcharts.chart('picture', {
    title: {
        text: 'Price and Emotion score Example'
    },

    legend: {
        enabled: false
    },

    xAxis: {
        categories: ['2021-11-01', '2021-11-02', '2021-11-03', '2021-11-04', '2021-11-05'],
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
        data: [
            [-1, -0.5, 0, 0.5, 1],
            [-0.6, -0.5, 0.1, 0.5, 0.6],
            [-0.2, -0.1, 0.3, 0.5, 0.6],
            [-0.8, -0.2, 0, 0.5, 1],
            [-0.7, -0.5, 0, 0.5, 1]
        ],
        tooltip: {
            headerFormat: '<em>Date: {point.key}</em><br/>'
        }
    }, 
    {
    		type: 'boxplot',
        name: 'Emotions for Raddit',
        data: [
            [-0.6, -0.5, 0.1, 0.5, 0.6],
            [-1, -0.5, 0, 0.5, 1],
            [-0.2, -0.1, 0.3, 0.5, 0.6],
            [-1, -0.5, 0, 0.5, 1],
            [-1, -0.5, 0, 0.5, 1]
        ],
        tooltip: {
            headerFormat: '<em>Date: {point.key}</em><br/>'
        }
    },
    
    
    {
        name: 'Twitter Outliers',
        color: Highcharts.getOptions().colors[0],
        type: 'scatter',
        data: [ // x, y positions where 0 is the first category
            [0, -0.9],
            [4, -0.8],
            [4, 0.9],
            [4, 0.95]
        ],
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
        name: 'Raddit Outliers',
        color: Highcharts.getOptions().colors[0],
        type: 'scatter',
        data: [ // x, y positions where 0 is the first category
            [1, -0.9],
            [2, -0.8],
            [2, 0.9],
            [2, 0.95]
        ],
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
    data: [100, 101, 104, 98, 97],
    yAxis: 1,
    lineColor: Highcharts.getOptions().colors[3],
    marker: {
      lineWidth: 1,
      lineColor: Highcharts.getOptions().colors[3],
      fillColor: 'white'
    }
  }]

});