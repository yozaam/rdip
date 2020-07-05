function add(){
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = Number(a)+Number(b);
	document.getElementById('c').value = ""+c;
	return c;
}

function sub(){
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = a-b;
	document.getElementById('c').value = ""+c;
	return c;
}

function mul(){
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = a*b;
	document.getElementById('c').value = ""+c;
	return c;
}

function div(){
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = a/b;
	document.getElementById('c').value = ""+c;
	return c;
}

function per(){
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = a*b/100;
	document.getElementById('c').value = ""+c;
	return c;
}

function abs(){
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = Math.abs(a);
	document.getElementById('c').value = ""+c;
	return c;
}


function sqrt(){
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = Math.sqrt(a);
	if (c%1 != 0){
		c = c.toFixed(3);
	}
	document.getElementById('c').value = ""+c;
	return c;
}

// task 2 now

function valid(){
	a = document.getElementById('name').value;
	b = document.getElementById('email').value;
	c = document.getElementById('number').value;

	if(a=="" || b=="" || c==""){
		alert("FILL ALL FIELDS");
		return false;
	}
	c  = Number(c);
	console.log(c);
	if(c <= 999999999 && c>= 10000000000){
		alert("FILL REAL NO.");
		return false;
	}

	if( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(b)  == false){
		alert("FILL REAL EMAIL.");
		return false;
	}

	return true;
}
//helper for anagram:
function sortString(string) {
        return string.split('').sort().join('');
}

function anagram(){
	stringA = document.getElementById('stra1').value;
	stringB =document.getElementById('stra2').value;

	stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

    if(sortString(stringA) === sortString(stringB)){
    	alert("anagram! yay :)");
  		return true;
  	}else{
  		alert("NO.");
  		return false;
  	}


}

function palindrome(){
	string = document.getElementById('strp').value;
	string = string.toLocaleLowerCase();
  	if( Array.from(string).toString() === Array.from(string).reverse().toString() ){
  		alert("palindrome! yay :)");
  		return true;
  	}else{
  		alert("NO.");
  		return false;
  	}
}


function survive(){
	a = document.getElementById('a');
	b = document.getElementById('b');

	var r1 = Math.floor(Math.random()*(0,1000));
    var r2 = Math.floor(Math.random()*(0,1000));
	
	a.value = r1%3;
	b.value = r2%3;

	a = Number(a.value);
	b = Number(b.value);

	if(a == b){
		return false;
	}

	else if(a + b == 1)
	{
		alert("human");
		return "human";
	}else if(a + b == 2){
		alert("nuclear");
		return "nuclear";
	}else if(a + b == 3){
		alert("cockroach");
		return "cockroach";
	}

}