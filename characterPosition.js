let args = process.argv;
args.splice(0,2);
args = args.join();
console.log(position(args));

function position(string) {
    var letterInPosition = {};
    for (var i=0; i< string.length;i++) {
        if (string[i] === ","){
            continue 
        }
        
        var indexNum = string[i]; 
        if ( letterInPosition[indexNum]) {
            letterInPosition[indexNum].push(i);
        } else {

           
            letterInPosition[indexNum] = [i];
        }
    }
        
    return letterInPosition;
};



