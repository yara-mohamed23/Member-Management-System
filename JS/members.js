let tableBody = document.getElementById("tableBody");
let RemoveMembersBtn = document.getElementById("RemoveMembersBtn");

function renderMembers(){
    let showAllmembers = getAllMembers().map((mem) => {
  return `
	<tr>
	<td>${mem.firstName}</td>
    <td>${mem.lastName}</td>
    <td>${mem.phoneNum}</td>
    <td>${mem.government}</td>
    <td>${mem.createdAt}</td>
    <td>${mem.updatedAt}</td>
	<td><button data-id=${mem.id}>Delete</button>
	<button data-id=${mem.id}>View</button>
	<button data-id=${mem.id}>Update</button>
	</td>
    </tr>
`;
});
tableBody.innerHTML = showAllmembers.join('');
}

renderMembers()



tableBody.addEventListener(('click'),(event)=>{

	if(event.target.textContent === 'Delete'){
	deleteMember(Number(event.target.dataset.id))
	renderMembers()
	}

	if(event.target.textContent === 'View'){
		let mem = getAllMembers().
		find((e)=> e.id === Number(event.target.dataset.id))

		document.getElementById('view').innerHTML = `
	<tr>
	<td>${mem.firstName}</td>
    <td>${mem.lastName}</td>
    <td>${mem.phoneNum}</td>
    <td>${mem.government}</td>
    <td>${mem.createdAt}</td>
    <td>${mem.updatedAt}</td>
    </tr>
`;
}

if(event.target.textContent === 'Update'){
	window.location.href = "index.html?id=" + event.target.dataset.id
	
}
})


RemoveMembersBtn.addEventListener('click', ()=>{
	if(confirm("Are you sure you want to remove all members?")){
	members = []
  localStorage.setItem("members", JSON.stringify(members));
  renderMembers()
}
})
