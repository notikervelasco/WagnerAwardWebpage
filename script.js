

document.querySelectorAll('.tab').forEach(tab => {
    const soundFile = tab.getAttribute('data-sound');
    const sound = new Audio(`sounds/${soundFile}`);
    sound.volume = 1;

    let hoverTimeout;

    tab.addEventListener('mouseenter', () => {
        hoverTimeout = setTimeout(() => {
            sound.currentTime = 0;
            sound.play();
        }, 500); // 0.5 second delay
    });

    tab.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout); // Prevent sound if mouse leaves early
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


