let member = {
  id: 0,
  createdAt: "",
  updatedAt: "",
  firstName: "",
  lastName: "",
  phoneNum: "",
  email: "",
  birthday: "",
  maritalStatus: "",
  government: "",
  isPartTime: false,
};

let savedMembers = localStorage.getItem("members");
let members;
if (savedMembers) {
  members = JSON.parse(savedMembers);
} else {
  members = [
    // { id: 1, firstName: "..." },
    // { id: 2, firstName: "..." },
    // { id: 3, firstName: "..." },
  ];
}


// console.log(savedMembers)
// console.log(member)
// console.log(members)
// console.log('members')
// console.log(savedMembers)
//id, createdAt,updatedAt,firstName,lastName,phoneNum,email,birthday,maritalStatus, government,isPartTime

//addMember
function addMember(newMember){
let newId 
if (members.length !== 0){
	newId = Math.max(...members.map(mem=> mem.id)) + 1
}else{
	newId = 1
}
newMember.id = newId
let date = new Date().toISOString()
newMember.createdAt = date
newMember.updatedAt = date
members.push(newMember)
localStorage.setItem("members", JSON.stringify(members));
}

//getAllMembers
function getAllMembers() {
	return members
}

//deleteMember
function deleteMember(memberId){
members = members.filter((mem)=>mem.id !== memberId)
localStorage.setItem("members", JSON.stringify(members));
return members
}

//updateMember
function updateMember(memberId,updatedInfo){
let updatedUserIndex = members.findIndex((mem)=>mem.id === memberId)
let memberBeforeUpdate = members[updatedUserIndex]
updatedInfo.id = memberBeforeUpdate.id
updatedInfo.createdAt = memberBeforeUpdate.createdAt
let date = new Date().toISOString()
updatedInfo.updatedAt = date
members[updatedUserIndex] = updatedInfo
localStorage.setItem("members", JSON.stringify(members));
return updatedInfo
}

