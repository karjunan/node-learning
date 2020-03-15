console.log("hello world")

function func () {

    var i = 0
     if( i == 0) {
         console.log('True')
         console.log('M is zero but displayed at higher level' + m);
         let k = 1;
         var i = 1;
         let k =2;
         if(k == 1) {
             console.log("k is 1 and true ");
             var m = 0;
             if(m == 0) {
                 console.log('M is zero');
             }
         }
     } else {
         console.log('False')
     }

}

func();