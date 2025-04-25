

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

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        // Single click event to show content and toggle the active state
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the data-tab of the clicked tab
            const targetTab = tab.getAttribute('data-tab');
            const activeContent = document.getElementById(targetTab);

            // Check if the clicked tab is already active
            const isActive = activeContent.classList.contains('active');

            // Remove 'active' class from all content and tabs
            contents.forEach(content => content.classList.remove('active'));
            tabs.forEach(t => t.classList.remove('active'));

            // If the tab content was not active, show it
            if (!isActive) {
                activeContent.classList.add('active');
                tab.classList.add('active');
            }
        });
    });
});

