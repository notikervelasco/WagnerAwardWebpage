

// document.querySelectorAll('.tab').forEach(tab => {
//     const soundFile = tab.getAttribute('data-sound');
//     // const sound = new Audio(`sounds/${soundFile}`);
//     const sound = new Audio(`sounds/communitycheer.mp3`);
//     sound.volume = 1;

//     tab.addEventListener('click', () => {
//         if (soundFile) {  // Only play sound if the data-sound is defined
//             sound.currentTime = 0; // Rewind in case it's played recently
//             sound.play();
//         }
//     });
// });

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the corresponding tab content
        const targetTab = tab.getAttribute('data-tab');
        const currentTabContent = document.getElementById(targetTab);

        // Check if the clicked tab is already active
        const isActive = tab.classList.contains('active');

        // Reset all tabs and content
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Hide images under all tabs
        document.querySelectorAll('.tab-image').forEach(image => {
            image.style.display = 'none'; // Hide images by default
            image.style.transform = 'scale(1)'; // Reset image size
            image.style.opacity = '1'; // Reset opacity to normal
        });

        if (isActive) {
            // If the tab was already active, reset everything
            tab.classList.remove('active');
            currentTabContent.classList.remove('active');
        } else {
            // Set the clicked tab as active
            tab.classList.add('active');
            currentTabContent.classList.add('active');

            // Show image of the active tab
            const image = tab.closest('.tab-with-image').querySelector('.tab-image');
            image.style.display = 'block'; // Show the image for the active tab

            // Center the active tab
            tab.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});



