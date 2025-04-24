
// Load the sound
const hoverSound = new Audio('sounds/soundeffect.wav');

// Optional settings
hoverSound.volume = 0.5; // Set the volume lower (0 = silent, 1 = full volume)

// Play sound on hover
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; // Reset to start in case hovered repeatedly
        hoverSound.play();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    
   
    tabs.forEach(tab => {
        // Single click event to show content
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the data-tab of the clicked tab
            const targetTab = tab.getAttribute('data-tab');
            
            // Hide all content
            contents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show the corresponding content
            const activeContent = document.getElementById(targetTab);
            activeContent.classList.add('active');

            // Optionally, add active class to tab
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            tab.classList.add('active');
        });

        // Double-click event to clear content
        tab.addEventListener('dblclick', function (e) {
            // Clear all active states
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            contents.forEach(content => {
                content.classList.remove('active');
            });
        });
    });
});


