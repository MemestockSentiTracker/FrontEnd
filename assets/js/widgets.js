// Your code here
"use strict"
// const Http = new XMLHttpRequest();
const url='https://s1ll6i814a.execute-api.us-east-1.amazonaws.com/dev/memestocks';
// Http.open("GET", url);
// Http.send();

async function fetchOHLC(yUrl) {
	try {
	  const r = await ( await fetch(yUrl) ).json();
	//   alert(JSON.stringify(r.query));
	  return {
		  data: r.body
	  };
	} catch(e) { console.log(e); }
}
const fetchData = fetchOHLC(url);
fetchData.then(res=>{
	console.log(res)
	let data = res.data.data
	console.log(data)
	let stock_names = data.stock_names
	console.log(stock_names)
	return {stock_names}
}).then( res =>{
	let stock_names = res.stock_names
	console.log(stock_names)

// Http.onreadystatechange = (e) => {
// 	// console.log(Http.response)
// 	var data = JSON.parse(Http.responseText).body.data
//   	console.log(data)
// }

//  stock_names = []
// stock_names = Http.responseText.body.data.stock_names
// console.log(stock_names)

// for (var i = 0; i < 12; i++){
// 	stock_names.push(String.fromCharCode(97 + i));
// }
//stock_names[12:16] should be same as stock_names[0:4]
for (var i = 12; i < 16; i++){
	// stock_names.push(String.fromCharCode(97 + i - 12));
	stock_names.push(stock_names[i - 12]);
}

var stock_prices = [29.01, 1014.97, 8.95, 172.39, 19.14, 18.98, 0.56, 306.93, 113.79, 22.57, 14.37, 33.46]
// for (var i = 0; i < 12; i++){
// 	stock_prices.push(Math.random() * 100);
// }
//stock_prices[12:16] should be same as stock_prices[0:4]
for (var i = 12; i < 16; i++){
	stock_prices.push(stock_prices[i - 11]);
}
//price_data[12:16] should be same as price_data[0:4]
var price_data = [
	[36.84, 33.94, 28.57, 30.28, 29.01],
	[1136.99, 1144.76, 1095.00, 1084.60, 1014.97],
	[10.25, 10.12, 9.27, 9.54, 8.95], 	
	[202.01, 196.21, 179.84, 181.56, 172.39], 
	[19.67, 19.19, 19.58, 19.87, 19.14], 	
	[21.07, 20.65, 19.38, 19.69, 18.98],
	[0.64, 0.62, 0.57, 0.59, 0.56],
	[333.76, 326.76, 314.35, 321.26, 306.93],
	[129.36, 126.10, 113.41, 116.92, 113.79],
	[23.27, 22.61, 22.34, 22.38, 22.57],
	[16.25, 16.00, 14.86, 15.08, 14.37],
	[41.62, 39.85, 36.71, 36.42, 33.46]
];
// for (var i = 1; i < 16; i++){
// 	price_data.push([1,2,3,4,5,6,7]);
// }
//Your_code_ends


for (var i = 0; i < 16; i++){
    if (document.getElementById("stock_price_" + (i + 1)) != null){
        document.getElementById("stock_price_" + (i + 1)).innerText = stock_prices[i];
    }
}
	

for (var i = 0; i < 16; i++){
    if (document.getElementById("stock_name_" + (i + 1)) != null){
	    document.getElementById("stock_name_" + (i + 1)).innerText = stock_names[i];
    }
}

$(function()
{
    "use strict";
    var e = {
				series:[{name:"Total Users", data: price_data[0]}],
				chart: {
					type:"line",
					height:65,
					toolbar:{show:!1},
					zoom:{enabled:!1},
					dropShadow:{enabled:!0,top:3,left:14,blur:4,opacity:.12,color:"#17a00e"},
					sparkline:{enabled:!0}
				},
				markers:{size:0,colors:["#17a00e"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},
				plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},
				dataLabels:{enabled:!1},
				stroke:{show:!0,width:2.4,curve:"smooth"},
				colors:["#17a00e"],
				xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},
				fill:{opacity:1},
				tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},
						y:{title:{formatter:function(e){return""}}},marker:{show:!1}
				}
			};
    new ApexCharts(document.querySelector("#w-chart1"), e).render();
    new ApexCharts(document.querySelector("#w-chart13"), e).render();
    e={series:[{name:"Total Users",data: price_data[1]}],chart:{type:"area",height:65,toolbar:{show:!1},zoom:{enabled:!1},dropShadow:{enabled:!0,top:3,left:14,blur:4,opacity:.12,color:"#ffb207"},sparkline:{enabled:!0}},markers:{size:0,colors:["#ffb207"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2.4,curve:"smooth"},colors:["#ffb207"],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},fill:{opacity:1},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}};
	new ApexCharts(document.querySelector("#w-chart2"),e).render();
    new ApexCharts(document.querySelector("#w-chart14"), e).render();
	e={series:[{name:"Total Income",data: price_data[2]}],chart:{type:"area",height:65,toolbar:{show:!1},zoom:{enabled:!1},dropShadow:{enabled:!0,top:3,left:14,blur:4,opacity:.12,color:"#0d6efd"},sparkline:{enabled:!0}},markers:{size:0,colors:["#0d6efd"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2.4,curve:"smooth"},colors:["#0d6efd"],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},fill:{opacity:1},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}};
	new ApexCharts(document.querySelector("#w-chart3"),e).render();
    new ApexCharts(document.querySelector("#w-chart15"), e).render();
	e={series:[{name:"Total Orders",data: price_data[3]}],chart:{type:"area",height:65,toolbar:{show:!1},zoom:{enabled:!1},dropShadow:{enabled:!0,top:3,left:14,blur:4,opacity:.12,color:"#f41127"},sparkline:{enabled:!0}},markers:{size:0,colors:["#f41127"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2.4,curve:"smooth"},colors:["#f41127"],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},fill:{opacity:1},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}};
	new ApexCharts(document.querySelector("#w-chart4"),e).render();
    new ApexCharts(document.querySelector("#w-chart16"), e).render();
	e={series:[{name:"Total Orders",data: price_data[4]}],chart:{type:"area",height:65,toolbar:{show:!1},zoom:{enabled:!1},dropShadow:{enabled:!0,top:3,left:14,blur:4,opacity:.12,color:"#f41127"},sparkline:{enabled:!0}},markers:{size:0,colors:["#f41127"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2.4,curve:"smooth"},colors:["#f41127"],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},fill:{opacity:1},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}};
	new ApexCharts(document.querySelector("#w-chart5"),e).render();
	e={series:[{name:"Total Income",data: price_data[5]}],chart:{type:"area",height:65,toolbar:{show:!1},zoom:{enabled:!1},dropShadow:{enabled:!0,top:3,left:14,blur:4,opacity:.12,color:"#0d6efd"},sparkline:{enabled:!0}},markers:{size:0,colors:["#0d6efd"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2.4,curve:"smooth"},colors:["#0d6efd"],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},fill:{opacity:1},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}};
	new ApexCharts(document.querySelector("#w-chart6"),e).render();
	e={series:[{name:"Total Users",data: price_data[6]}],chart:{type:"area",height:65,toolbar:{show:!1},zoom:{enabled:!1},dropShadow:{enabled:!0,top:3,left:14,blur:4,opacity:.12,color:"#ffb207"},sparkline:{enabled:!0}},markers:{size:0,colors:["#ffb207"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2.4,curve:"smooth"},colors:["#ffb207"],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},fill:{opacity:1},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}};
	new ApexCharts(document.querySelector("#w-chart7"),e).render();
	e={series:[{name:"Comments",data: price_data[7]}],chart:{type:"area",height:65,toolbar:{show:!1},zoom:{enabled:!1},dropShadow:{enabled:!0,top:3,left:14,blur:4,opacity:.12,color:"#17a00e"},sparkline:{enabled:!0}},markers:{size:0,colors:["#17a00e"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2.4,curve:"smooth"},colors:["#17a00e"],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},fill:{opacity:1},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1}, y:{title:{formatter:function(e){return""}}},marker:{show:!1}}};
    new ApexCharts(document.querySelector("#w-chart8"),e).render();
	e = {series:[{name:"Total Users", data: price_data[8]}], chart: {type:"line", height:65, toolbar:{show:!1}, zoom:{enabled:!1}, dropShadow:{enabled:!0,top:3,left:14,blur:4,opacity:.12,color:"#17a00e"}, sparkline:{enabled:!0}}, markers:{size:0,colors:["#17a00e"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}}, plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}}, dataLabels:{enabled:!1}, stroke:{show:!0,width:2.4,curve:"smooth"}, colors:["#17a00e"], xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}, fill:{opacity:1}, tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1}, y:{title:{formatter:function(e){return""}}},marker:{show:!1}}};
    new ApexCharts(document.querySelector("#w-chart9"), e).render();
    e={series:[{name:"Total Users",data: price_data[9]}],chart:{type:"area",height:65,toolbar:{show:!1},zoom:{enabled:!1},dropShadow:{enabled:!0,top:3,left:14,blur:4,opacity:.12,color:"#ffb207"},sparkline:{enabled:!0}},markers:{size:0,colors:["#ffb207"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2.4,curve:"smooth"},colors:["#ffb207"],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},fill:{opacity:1},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}};
	new ApexCharts(document.querySelector("#w-chart10"),e).render();
	e={series:[{name:"Total Income",data: price_data[10]}],chart:{type:"area",height:65,toolbar:{show:!1},zoom:{enabled:!1},dropShadow:{enabled:!0,top:3,left:14,blur:4,opacity:.12,color:"#0d6efd"},sparkline:{enabled:!0}},markers:{size:0,colors:["#0d6efd"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2.4,curve:"smooth"},colors:["#0d6efd"],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},fill:{opacity:1},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}};
	new ApexCharts(document.querySelector("#w-chart11"),e).render();
	e={series:[{name:"Total Orders",data: price_data[11]}],chart:{type:"area",height:65,toolbar:{show:!1},zoom:{enabled:!1},dropShadow:{enabled:!0,top:3,left:14,blur:4,opacity:.12,color:"#f41127"},sparkline:{enabled:!0}},markers:{size:0,colors:["#f41127"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2.4,curve:"smooth"},colors:["#f41127"],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},fill:{opacity:1},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}};
	new ApexCharts(document.querySelector("#w-chart12"),e).render();
});

}

)
