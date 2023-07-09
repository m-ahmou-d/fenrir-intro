//footer
var today = new Date();
var thisYear = today.getFullYear();

var footer = document.querySelector('footer');
var copyright = document.createElement('p');
copyright.innerHTML = `&#169 Mahmoud Elrmly ${thisYear}`;
footer.appendChild(copyright);

//skills
const skills = [
    "Basic Java",
    "Basic JavaScript",
    "Basic HTML",
    "Basic C++",
    "Customer Service Experience",
    "Translation ability between English & Arabic (and vice-versa)",
    "PC Building",
    "Word, Excel, and PowerPoint",
    "Certified Transportation Driver"
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
    <span>${message}</span>`;

//button to remove message
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', () =>{
        const entry = removeButton.parentNode;
        entry.removeChild();
    });

//button to edit messages
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.type = 'button';
    editButton.addEventListener('click', () => {
        const editedMessage = prompt('Updated message: ');
        if(editedMessage !== null){
            messageSpan.textContent = editedMessage;
        }
    });

    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});