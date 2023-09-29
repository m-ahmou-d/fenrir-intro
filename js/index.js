//footer
var today = new Date();
var thisYear = today.getFullYear();

var footer = document.querySelector('footer');
var copyright = document.createElement('p');
copyright.innerHTML = `&#169 MAHMOUD ELRMLY ${thisYear}`;
footer.appendChild(copyright);

//skills
const skills = [
    "Java",
    "JavaScript",
    "HTML",
    "C++",
    "CSS",
    "English & Arabic Translator",
    "Word, Excel, and PowerPoint"
];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
for (let i=0; i<skills.length; i++ ) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
};

//message form
const messageForm = document.getElementsByName('leave_message')[0];
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;
    console.log(`Name: ${name} Email: ${email} Message: ${message}`);

//display form inputs
    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `
    <a href = "mailto:${email}">${name}</a>
    <span >${message}</span>`;

//button to remove message
const removeButton = document.createElement('button');
function makeRemoveButton() {
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';
    newMessage.append(removeButton);
};
    makeRemoveButton();
    removeButton.addEventListener('click', (e) =>{
        removeButton.parentNode.remove();
    });

//button to edit messages
const editButton = document.createElement('button');
function makeEditButton() {
    editButton.innerText = 'Edit';
    editButton.type = 'button';
    newMessage.append(editButton);
};
    makeEditButton();
    editButton.addEventListener('click', () => {
        const editedMessage = prompt('Updated message: ');
        if(editedMessage !== null){
            newMessage.innerHTML = `<a href = "mailto:${email}">${name}</a>
            <span>${editedMessage}</span>`;
            makeEditButton();
            makeRemoveButton();
        }
    });

    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});