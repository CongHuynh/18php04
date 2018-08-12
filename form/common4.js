function validateForm() {
	var name = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var male = document.getElementById('male').checked;
	var female = document.getElementById('female').checked;
	var other = document.getElementById('other').checked;
	var text ;
	check = true;
	
	if(name == ''){
		text = "Please input your name";
		document.getElementById("demo").innerHTML = text;
		document.getElementById("demo").style.color = 'red';
		check = false;
		}else{
		document.getElementById("demo").innerHTML = '';
		}
	if(phone == ''){
		text = "Please input your phone";
		document.getElementById("demo1").innerHTML = text;
		document.getElementById("demo1").style.color = 'red';
		check = false;
		}else{
		document.getElementById("demo").innerHTML = '';
		}
	
	if(email == ''){
		text = "Please input your email";
		document.getElementById("demo2").innerHTML = text;
		document.getElementById("demo2").style.color = 'red';
		check = false;
		}else{
			document.getElementById("demo").innerHTML = '';
		}
	if(!male && !female && !other){
		document.getElementById('demo3').innerHTML = 'Please choose gender!';
		document.getElementById("demo3").style.color = 'red';

		}else{
		document.getElementById('demo3').innerHTML = '';
		}
	if(check){
		document.getElementById('registerForm').style.display = 'none';
		document.getElementById('success').style.display = 'block';
	}
}
