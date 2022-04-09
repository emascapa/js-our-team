const membersGrid = document.querySelector('.members_grid');

const addUserForm = document.querySelector('form');

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];


console.log('Membri del Team:');
displayExistingMembers(team);


addUserForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const inputName = document.getElementById('input_name').value;
    const inputRole = document.getElementById('input_role').value;
    const inputImg = document.getElementById('input_img').value;

    document.getElementById('input_name').value = '';
    document.getElementById('input_role').value = '';
    document.getElementById('input_img').value = '';

    //console.log(inputName, inputRole, inputImg);

    addNewMember(membersGrid, inputName, inputRole, inputImg);

    const formButtonDiv = document.querySelector('.form_button_div');

    formButtonDiv.innerHTML = `<span class="text-success">Utente inserito con successo!</span>`;

    setTimeout(function() {
        formButtonDiv.innerHTML = '';
    }, 3000)
})



function displayExistingMembers(arrayMembers) {
    
    for (let i = 0; i < arrayMembers.length; i++) {

        const member = arrayMembers[i];

        //console.log(member);

        console.log(`Utente ${i+1}`);

        //loggo in console
        for (let key in member) {
        console.log(`${key}: ${member[key]}`);
        }

        console.log('__________________________________')

        //const nameMember = member.name;
        //const roleMember = member.role;
        //const imgPathMember = member.image;

       /*  const memberHtmlElement = `
        <div class="col">
        <div class="card">
            <img src="./assets/img/${member.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title text-center">${member.name}</h5>
                <p class="card-text text-center">${member.role}</p>
            </div>
        </div>
        </div>
        `;

        membersGrid.insertAdjacentHTML('beforeend', memberHtmlElement);   */  

        addNewMember(membersGrid, member.name, member.role, member.image)

    }
}

function addNewMember(htmlElement, name, role, img) {

    const memberHtmlElement = `
    <div class="col">
    <div class="card">
        <img src="./assets/img/${img}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title text-center">${name}</h5>
            <p class="card-text text-center">${role}</p>
        </div>
    </div>
    </div>
    `;

    htmlElement.insertAdjacentHTML('beforeend', memberHtmlElement);    
}





const pippo = `
<span class="text-success">Utente inserito con successo!</span>
`;