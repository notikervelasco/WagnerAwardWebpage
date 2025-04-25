

document.querySelectorAll('.tab').forEach(tab => {
    const soundFile = tab.getAttribute('data-sound');
    // const sound = new Audio(`sounds/${soundFile}`);
    const sound = new Audio(`sounds/communitycheer.mp3`);
    sound.volume = 1;

    tab.addEventListener('click', () => {
        if (soundFile) {  // Only play sound if the data-sound is defined
            sound.currentTime = 0; // Rewind in case it's played recently
            sound.play();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    const images = document.querySelectorAll('.tab-image');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetTab = tab.getAttribute('data-tab');
        const currentTabContent = document.getElementById(targetTab);
        
        // Check if the clicked tab is already active
        const isActive = tab.classList.contains('active');
  
        // Reset all tabs and content
        tabs.forEach(tab => {
          tab.classList.remove('active');
        });
        contents.forEach(content => {
          content.classList.remove('active');
        });
        images.forEach(image => {
          image.style.transform = 'scale(1)'; // Reset image size
          image.style.opacity = '1'; // Make sure images are visible
        });
  
        if (isActive) {
          // If the tab was already active, reset the layout
          tab.classList.remove('active');
          currentTabContent.classList.remove('active');
          images.forEach(image => {
            image.style.display = 'block'; // Re-display images under the tabs
          });
        } else {
          // Otherwise, set the clicked tab as active
          tab.classList.add('active');
          currentTabContent.classList.add('active');
  
          // Hide images under all tabs and center the clicked tab
          images.forEach(image => {
            image.style.display = 'none'; // Hide images under all tabs
          });
  
          // Center the active tab
          tab.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });
  });



