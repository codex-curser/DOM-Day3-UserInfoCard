const forms = document.querySelector('#user-form');
const container = document.querySelector('#card-container');


forms.addEventListener('submit',(event)=>{
  event.preventDefault();
const name = document.querySelector('#name').value;
const email = document.querySelector('#email').value;
const age = document.querySelector('#age').value;


const card = document.createElement('div');
 card.style.backgroundColor = 'blue';
 card.style.color = 'White';
 card.style.padding = '10px '
 card.style.display = "Block";
 card.style.margin = '20px';
 card.style.borderRadius = "10px";

card.innerHTML = `
<h2>${name}</h2>
<p>Email: ${email}</p>
<p>Age: ${age}</p>
`

container.appendChild(card);
forms.reset();



const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.style.marginTop = '10px';
deleteBtn.style.backgroundColor = 'red';
deleteBtn.style.color = 'white';
deleteBtn.style.border = 'none';
deleteBtn.style.padding = '5px 10px';
deleteBtn.style.borderRadius = '5px';
deleteBtn.style.cursor = 'pointer';

// ✅ When delete button is clicked, remove the card
deleteBtn.addEventListener('click', () => {
  card.remove();
});

// ✅ Add the delete button inside the card
card.appendChild(deleteBtn);

});
