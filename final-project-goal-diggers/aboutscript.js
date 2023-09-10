document.addEventListener("DOMContentLoaded", function() {
    const linkedinIcons = document.querySelectorAll('.profile-card .fab.fa-linkedin');
    const twitterIcons = document.querySelectorAll('.profile-card .fab.fa-twitter');
    //Shakes the icon 
    function shakeIcon(iconElement) {
        iconElement.classList.add('shake');
    }
    function stopShakingIcon(iconElement) {
        iconElement.classList.remove('shake');
    }

    linkedinIcons.forEach(linkedinIcon => {
        linkedinIcon.addEventListener('mouseover', function() {
            shakeIcon(this);
            this.style.color = '#0077B5'; // LinkedIn blue color
        });

        linkedinIcon.addEventListener('mouseout', function() {
            stopShakingIcon(this);
            this.style.color = ''; // Reset to default color
        });
    });

    twitterIcons.forEach(twitterIcon => {
        twitterIcon.addEventListener('mouseover', function() {
            shakeIcon(this);
            this.style.color = '#1DA1F2'; // Twitter blue color
        });

        twitterIcon.addEventListener('mouseout', function() {
            stopShakingIcon(this);
            this.style.color = ''; // Reset to default color
        });
    });
});

// box shadow on the profile card
const profileCard = document.querySelector('.profile-card');
profileCard.addEventListener('mouseover', () => {
    profileCard.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.5)';
    profileCard.style.transform = 'translateY(-5px)';
});
profileCard.addEventListener('mouseout', () => {
    profileCard.style.boxShadow = 'none';
    profileCard.style.transform = 'none';
});
