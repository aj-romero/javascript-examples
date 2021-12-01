const readline = require('readline')
  
const rl = readline.createInterface(
     process.stdin, process.stdout)

rl.question('', (str) => {
	[w, b] = str.split(' ',2)
	w = parseInt(w)
	b = parseFloat(b)
	if(w%5 == 0){
		if(b >= (w + 0.50)){
			b = b - (w + 0.50)
			console.log(b.toFixed(2))
		}else{
			console.log(b.toFixed(2))
		}
	}
	else{
		console.log(b.toFixed(2))
	
	}
    	//console.log(w)
    	rl.close()	
	
});
