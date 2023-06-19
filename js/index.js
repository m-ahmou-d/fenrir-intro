var today = new Date();
var thisYear = today.getFullYear();


var footer = document.querySelector('footer');
var copyright = document.createElement('p');
copyright.innerHTML = `Mahmoud Elrmly &#169 ${thisYear}`;
footer.appendChild(copyright);


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
