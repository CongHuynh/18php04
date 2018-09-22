function validateRegister(){
	var email, password, epassword, male, female, other, check;
	email   = document.getElementById('email').value;
	password  = document.getElementById('password').value;
	epassword = document.getElementById('epassword').value;
	male   = document.getElementById('male').checked;
	female = document.getElementById('female').checked;
	other  = document.getElementById('other').checked;
	check = true;
	if(email == ''){
		document.getElementById('error_email').innerHTML = 'Please input your email!';
		check = false;
	}else{
		document.getElementById('error_email').innerHTML = '';
	}
	if(password == ''){
		document.getElementById('error_password').innerHTML = 'Please input your password!';
		check = false;
	}else{
		document.getElementById('error_password').innerHTML = '';
	}
	if(epassword == ''){
		document.getElementById('error_epassword').innerHTML = 'Please input your e-password!';
		check = false;
	}else{
		document.getElementById('error_epassword').innerHTML = '';
	}
	// if(male == false && female == false && other == false){
	if(!male && !female && !other){
		document.getElementById('error_gender').innerHTML = 'Please choose your gender!';
		check = false;
	}else{
		document.getElementById('error_gender').innerHTML = '';
	}
	if(check){
		document.getElementById('registerForm').style.display = 'none';
		document.getElementById('success').style.display = 'block';
	}

}