const http = require('http');

var urlList = process.argv.filter((val)=> process.argv.indexOf(val) >= 2);

var final = ['', '', ''];
var returned = 0;


for(var i =0; i< urlList.length; i++){
	myfunc(urlList[i], i);
};


function myfunc(url, i){
	http.get(url, (res)=>{
		res.on('error', (err)=>{
			console.error(err);
		});
		res.on('data', (data)=>{
			final[i] = final[i] + data.toString();
		});
		res.on('end', ()=>{
			returned += 1;
			if(returned == 3){
				printit();
			}
		});
			
	});
}

function printit(){
	for(var i = 0; i < final.length; i++){
		console.log(final[i]);
	}
};





/*const http = require('http');

var urlList = process.argv.filter((val)=> process.argv.indexOf(val) >= 2);

var data0 = '';
var data1 = '';
var data2 = '';
var final = [];
var current = 0;

function juggle(urlList, current, callback){
	http.get(urlList[current], (res)=>{
		res.on('error', (err)=>{
			console.error(err);
		});
		res.on('data', (data)=>{
			data0 = data0 + data.toString();
		});
		res.on('end', ()=>{
			final.push(data0);
			data0 = '';
		});
	current += 1;
	if(current <= urlList.length){
		callback(urlList[current], current, juggle);
	}
	});
};

juggle(urlList, current, juggle);
*/





