
//declaration
function call(){
	console.log('bwana yesu asifiwe');
}

//calling function
call()



//argument function
function age(age){
	if(age>18){
		console.log(`hello you're ${age} years old`)
		console.log('you can vote')
	}
	else if(age=18){
			console.log(`congratulations you're ${age} years`)
			console.log('you can vote')
	}    
	else{
		console.log(`hello you're ${age} years old`)
		console.log('you cannot vote')
	}
}
//calling func
age(18)




//function calculation

function discount(a,b){
		
        const result= a*b
        return result
}
//saving func to variable
let score=discount(40,50)
//printing score to terminal
console.log(score)


//function to determine old or even

function determiner(num){
   if(num%2===0){
	console.log(`${num} is even`)
	}
   else{
	console.log(`${num} is odd`)
	}
}
//calling func
determiner(11)
