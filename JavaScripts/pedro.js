    const navLinks = document.querySelectorAll('.navbar a');
    const audio = document.getElementById('hoverAudio');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            audio.currentTime = 0;
            audio.play();
        });

        link.addEventListener('mouseleave', () => {
            audio.pause();
            audio.currentTime = 0;
        })
    })