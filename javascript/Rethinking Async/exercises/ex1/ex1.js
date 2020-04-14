function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function() {
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************
// The old-n-busted callback way

function getFile(file) {
	fakeAjax(file, function(text) {
		handleResponse(file,text);
	});
}


let arr = ['file1','file2','file3'];

function handleResponse(file, text) {

	if(!response[file]) {
		response[file] = text;
	}

	console.log('Received File => ' , file, text);
	for( let i = 0 ; i < arr.length; i++) {
			if(arr[i] in response) {
				if(response[arr[i]] != true) {
					response[arr[i]] = true;
					console.log("Result is => " + arr[i], response)
				}
			} else {
				return false
			}	
	}	
	
}

let response = {}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
