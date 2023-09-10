list = document.querySelector('.options')

list.addEventListener('mouseover', function(){
    list.classList.add(".java-options");
});

list.addEventListener('mouseout', function(){
    list.classList.remove(".java-options");
});

// zoom the home image
document.querySelector('.home-welcome img').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
});

document.querySelector('.home-welcome img').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

// For the image shadow on hover
let image_listen = document.querySelector('.image-listen');
image_listen.addEventListener('mouseover', function(){
    image_listen.classList.add("emphasis_image");
});

image_listen.addEventListener('mouseout', function(){
    image_listen.classList.remove("emphasis_image");
});

// Completes the Who are we(Home Page)
const incompleteText = "We are more than just web developers; we are students, innovators, and dreamers. Our journey in the world...";
const completeText = "We are more than just web developers; we are students, innovators, and dreamers. Our journey in the world of web development started with a simple idea - to create and learn, and it has since evolved into a passion for crafting digital experiences that inspire and engage.";
const typingTextElement = document.querySelector(".sentence-container");
let isHovering = false;
function typeCharacter() {
    if (isHovering) {
        const currentText = typingTextElement.textContent;
        if (currentText.length < completeText.length) {
            typingTextElement.textContent = completeText.slice(0, currentText.length + 1);
            setTimeout(typeCharacter, 10); 
        }
    }
}
typingTextElement.addEventListener("mouseenter", () => {
    isHovering = true;
    typeCharacter();
});
typingTextElement.addEventListener("mouseleave", () => {
    isHovering = true;
});
typingTextElement.textContent = incompleteText; 
document.addEventListener("DOMContentLoaded", function() {
    const linkedinLink = document.getElementById('linkedin-link');
    
    linkedinLink.addEventListener('mouseover', function() {
        this.querySelector('i').style.color = '#0077B5'; // LinkedIn blue color
    });
    
    linkedinLink.addEventListener('mouseout', function() {
        this.querySelector('i').style.color = ''; // Reset to default color
    });
});


const profileCard = document.querySelector('.profile-card');

profileCard.addEventListener('mouseover', () => {
    profileCard.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.5)';
    profileCard.style.transform = 'translateY(-5px)';
});

profileCard.addEventListener('mouseout', () => {
    profileCard.style.boxShadow = 'none';
    profileCard.style.transform = 'none';
});

let  Github_link = document.body.getElementsByClassName(".Github_link");

Github_link.addEventListener('clicked', function(){
    Github_link.style.color = red;
})

