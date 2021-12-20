// This file control the data source of details.html

//Your code here

"use strict"
// const Http = new XMLHttpRequest();
// const url='https://s1ll6i814a.execute-api.us-east-1.amazonaws.com/dev/memestocks';
// Http.open("GET", url);
// Http.send();

// async function fetchOHLC(yUrl) {
// 	try {
// 	  const r = await ( await fetch(yUrl) ).json();
// 	  return {
// 		  data: r.body
// 	  };
// 	} catch(e) { console.log(e); }
// }
// const fetchData = fetchOHLC(url);


function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}



var curStockNum = getQueryString("stock");


fetchData.then(res=>{
	let data = res.data.data
	let stock_names = data.stock_names
    let dates = data.dates
    console.log(data)
	console.log(stock_names)
    console.log(dates)
	var prices = [];
	let sentiments = data.records[curStockNum].sentiments;
	for (var i = 0; i < stock_names.length; i++){
		prices.push(data.records[i].price_data);
		// sentiments.push(data.records[i].sentiments);
	}
	return {stock_names, dates, prices, sentiments}
}).then( res =>{

let date = res.dates; 
// console.log(date)
var boxData4Twitter = [ // for 5 days' boxplot Data for Twitter
    [-0.8, -0.7, 0, 0.2, 0.3],
    [-0.8, -0.5, 0, 0.2, 0.3],
    [-0.6, -0.5, 0.1, 0.2, 0.4],
    [-0.2, -0.1, 0.3, 0.3, 0.5],
    [-0.7, -0.5, 0, 0.2, 0.4]
];
var boxData4Reddit = [ // for 5 days' boxplot Data for Reddit
    [-0.8, -0.5, 0, 0.2, 0.3],
    [-0.6, -0.5, 0, 0.1, 0.2],
    [-0.2, -0.1, 0.2, 0.3, 0.4],
    [-0.4, -0.3, 0, 0.5, 1],
    [-0.6, -0.1, 0.3, 0.3, 0.5],
];

let sentiments = res.sentiments;


for(var i = 0; i < 5; i++){
    if(sentiments[i].length == 2){
        boxData4Reddit[i] = sentiments[i][0].scores;
        boxData4Twitter[i] = sentiments[i][1].scores;
    }
}


var closePrices = res.prices[curStockNum];  //[36.84, 33.94, 28.57, 30.28, 29.01]; // for seven days' close prices

// outlier datas for twitter and reddit below, data is in format of ['date_index', 'value'] ([x_axis_value, y_axis_value])
var outliers4Twitter = [ // x, y positions where 0 is the first category
    // [0, -0.9],
    // [4, -0.8],
    // [4, 0.9],
    // [4, 0.95]
];
var outliers4Reddit = [ // x, y positions where 0 is the first category
    // [1, -0.9],
    // [2, -0.8],
    // [2, 0.9],
    // [2, 0.95]
];

// Change the number of 4 charts on details.html
let prices = res.prices;
for (var i = 1; i < 5; i++){
    if (document.getElementById("stockPrice" + i) != null){
	    document.getElementById("stockPrice" + i).innerText = prices[i-1][4];
    }
}

//Your code ends

let stockName = res.stock_names[curStockNum];

Highcharts.chart('picture', {
    title: {
        text: 'Price and Emotion score for ' + stockName
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

//pic2
const fetchData2 = fetchOHLC(url + '/' + stockName[curStockNum]);
    fetchData2.then(res=>{
        // console.log(res)
        let data = res.data["word_cloud"][curStockNum]["freq"]
        let comments = res.data.sample_comments[curStockNum].sample_comments;
        console.log(comments);
        return {data, comments}
    }).then( res =>{
        var chartdata = [];
        for (let i = 0; i < res.data.length; i++){
            chartdata.push({name: res.data[i][0], weight: res.data[i][1]});
        }
        // console.log('here2');
        // console.log(chartdata);

        let newComments = res.comments;
        for(var i = 0; i < 4; i++){
            document.getElementById("comment_date" + i).innerText = date[4];
            document.getElementById("comment" + i).innerText = newComments[i];
        }

        Highcharts.chart('chart2', {
            accessibility: {
                screenReaderSection: {
                    beforeChartFormat: '<h5>{chartTitle}</h5>' +
                        '<div>{chartSubtitle}</div>' +
                        '<div>{chartLongdesc}</div>' +
                        '<div>{viewTableButton}</div>'
                }
            },
            series: [{
                type: 'wordcloud',
                data: chartdata,
                name: 'Occurrences'
            }],
            title: {
                text: 'Wordcloud of comments'
            }
        });

});
})//The end of "then" function

