

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

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the corresponding tab content
            const targetTab = tab.getAttribute('data-tab');
            const currentTabContent = document.getElementById(targetTab);

            // Check if the tab content is currently visible
            const isContentVisible = currentTabContent.classList.contains('active');

            if (isContentVisible) {
                // If the content is visible, remove the 'active' class to hide it
                currentTabContent.classList.remove('active');
            } else {
                // Otherwise, add the 'active' class to display the content
                currentTabContent.classList.add('active');
            }
        });
    });
});



