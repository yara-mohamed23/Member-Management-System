let params = new URLSearchParams(window.location.search)
let memberId = params.get('id')
console.log(memberId)

let mem = getAllMembers().
	find((e)=> e.id === Number(memberId))



let form = document.getElementById('form')
let firstNameInp = document.getElementById('firstNameInp')
let lastNameInp = document.getElementById('lastNameInp')
let phoneInp = document.getElementById('phoneInp')
let emailInp = document.getElementById('emailInp')
let birthdayInp = document.getElementById('birthdayInp')
let singlInp = document.getElementById('singlInp')
let marriedInp = document.getElementById('marriedInp')
let govenrnmentInp = document.getElementById('govenrnmentInp')
let partTimeInp = document.getElementById('partTimeInp')
let addMemberBtn = document.getElementById('addMemberBtn')
let showAllMembersBtn = document.getElementById('showAllMembersBtn')


addMemberBtn.addEventListener('click', ()=>{
	let newMember = {
	firstName : firstNameInp.value,
	lastName : lastNameInp.value,
	phoneNum : phoneInp.value,
	email : emailInp.value,
  birthday : birthdayInp.value,
	maritalStatus: singlInp.checked ? 'Single' : 'Married',
	government : govenrnmentInp.value,
	isPartTime : partTimeInp.checked,
}
if(validation()){
	if(mem){
		updateMember(mem.id, newMember)
	}else{
		addMember(newMember)
	}
}
// window.location.href = "member.html"
firstNameInp.value = ''
lastNameInp.value = ''
phoneInp.value = ''
emailInp.value = ''
birthdayInp.value = ''
singlInp.checked = false
marriedInp.checked = false
govenrnmentInp.value = ''
partTimeInp.checked = false
})

showAllMembersBtn.addEventListener('click', ()=>{ window.location.href = "member.html"})

if(mem){
	document.querySelector('h1').textContent = 'Update Member'
    addMemberBtn.textContent = 'Update Member'
	firstNameInp.value = mem.firstName
	lastNameInp.value = mem.lastName
	phoneInp.value = mem.phoneNum
	emailInp.value = mem.email
	birthdayInp.value = mem.birthday
	govenrnmentInp.value = mem.government
	partTimeInp.checked = mem.isPartTime

	if(mem.maritalStatus === 'Single'){
		singlInp.checked = true
	}else{
		marriedInp.checked = true
	}
}

