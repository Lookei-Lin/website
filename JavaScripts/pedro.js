const navLinks = document.querySelectorAll('.navbar a');
const audio = document.getElementById('hoverAudio');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        try {
            audio.currentTime = 0; 
            audio.play();          
        } catch (err) {
            console.log("Audio blocked by browser until interaction:", err);
        }
    });

    link.addEventListener('mouseleave', () => {
        audio.pause();         
        audio.currentTime = 0; 
    });
});