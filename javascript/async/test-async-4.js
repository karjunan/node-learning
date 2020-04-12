var http = require("http");

function func(url, id, callback) {
    console.log("Getting ", url, "=>  ", id);
    http
        .get(url, (resp) => {
            let data = "";
            resp.on("data", (chunk) => {
                data = data + chunk;
            });
            resp.on("end", () => {
                console.log("Final Data => ", id);
                callback(id);
            });
        })
        .on("error", (err) => {
            console.log(err);
        });
}

let arr = new Array(3);

function finalOutput() {
    setTimeout(() => {
        func("http://www.linkedin.com", "a", function (id) {
            arr[0] = id;
            console.log("Inside linkedIn => ", id, arr[0]);
        });
        //  console.log("Function returned with a value", arr[0]);
    }, 100);
    setTimeout(() => {
        func("http://www.facebook.com", "b", function (id) {
            arr[1] = id;
            console.log("Inside facebook => ", id, arr[1]);
        });
        //  console.log("Function2 returned with a value", arr[1]);
    }, 100);
    setTimeout(() => {
        func("http://www.google.com", "c", function (id) {
            arr[2] = id;
            console.log("Inside google => ", id, arr[2]);
        });
        // console.log("Function3 returned with a value", arr[2]);
    }, 100);

    let timerId = setInterval(() => {
        loop();
    }, 1000);

    setTimeout(() => {clearInterval(timerId)},3000)
}

function loop() {
    console.log("Looping");
    let counter = 0;
    while (counter <= 10) {
        if (arr[0] === "a" && arr[1] === "b" && arr[2] === "c") {
            console.log("Array Result => ", arr);
            break;
        }
        counter++;
    }
}

finalOutput();