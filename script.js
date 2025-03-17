// Initialize particles
particlesJS('particles-js', {
    particles: {
        number: { value: 120, density: { enable: true, value_area: 800 } },
        color: { value: '#ff4500' }, // Red particles
        shape: { type: 'polygon' }, // Hexagon shapes
        opacity: { value: 0.8, random: true },
        size: { value: 5, random: true },
        line_linked: { enable: true, distance: 120, color: '#ff0000', opacity: 0.5, width: 2 },
        move: { enable: true, speed: 4, direction: 'none', random: true }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 150 }, push: { particles_nb: 6 } }
    },
    retina_detect: true
});

let crashCount = 0;

function addCrash() {
    crashCount++;
    document.getElementById('crashCount').textContent = crashCount;
}

function resetCrashes() {
    crashCount = 0;
    document.getElementById('crashCount').textContent = crashCount;
}