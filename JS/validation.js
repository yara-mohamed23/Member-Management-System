function validation(){
	let isValid = true

	//firstname
	if(!/^[a-zA-Z\u0600-\u06FF]{2,}$/.test(firstNameInp.value)){
		document.getElementById('firstNameError').textContent 
		= 'First name must be at least 2 letters, no numbers or symbols.';
		isValid = false
	}else{
		document.getElementById('firstNameError').textContent = ''
	}

	// Last Name
	if(!/^[a-zA-Z]{2,}$/.test(lastNameInp.value)){
		document.getElementById('lastNameError').textContent 
		= 'Last name must be at least 2 letters, no numbers or symbols.';
		isValid = false
	}else{
		document.getElementById('lastNameError').textContent = ''
	}

	// Phone (Egyptian: starts 010/011/012/015 + 8 digits)
  if (!/^(010|011|012|015)[0-9]{8}$/.test(phoneInp.value)) {
    document.getElementById('phoneError').textContent = 'Phone must be a valid Egyptian number.';
    isValid = false;
  } else {
    document.getElementById('phoneError').textContent = '';
  }

  // Email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInp.value)) {
    document.getElementById('emailError').textContent = 'Email must be valid.';
    isValid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  // Birthday
  if(!birthdayInp.value){
	document.getElementById('birthdayError').textContent = 'Birthday is required.';
	isValid = false
  }else{
	document.getElementById('birthdayError').textContent = ''
  }

 // Marital Status
 if(!marriedInp.checked && !singlInp.checked){
	document.getElementById('maritalError').textContent = 'Please select a marital status.';
	isValid = false
 }else{
	document.getElementById('maritalError').textContent = ''
 }

	return isValid
}