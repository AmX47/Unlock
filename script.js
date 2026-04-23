document.addEventListener('DOMContentLoaded', () => {
    const dataInput = document.getElementById('data-input');
    const resultText = document.getElementById('result-text');
    const particlesContainer = document.getElementById('particles');

    // Create background particles
    function createParticles() {
        const particleCount = 20;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 3 + 1;
            const left = Math.random() * 100;
            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${left}%`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `-${delay}s`;
            
            particlesContainer.appendChild(particle);
        }
    }

    createParticles();

    const decryptBtn = document.getElementById('decrypt-btn');

    // Input monitoring logic
    dataInput.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        decryptBtn.disabled = value.length === 0;
        
        // Hide message if user clears input
        if (value.length === 0) {
            resultText.classList.remove('visible');
        }
    });

    // Handle button click
    decryptBtn.addEventListener('click', () => {
        const value = dataInput.value.trim();
        if (value.length === 0) return;

        // Visual feedback on button
        decryptBtn.innerText = 'Processing...';
        decryptBtn.disabled = true;

        setTimeout(() => {
            resultText.classList.add('visible');
            decryptBtn.innerText = 'Decrypt Sequence';
            decryptBtn.disabled = false;
        }, 800);
    });

    // Initial state
    decryptBtn.disabled = true;

    // Optional: Digital glitch effect on terminal input focus
    dataInput.addEventListener('focus', () => {
        dataInput.parentElement.style.transform = 'scale(1.02)';
        dataInput.parentElement.style.transition = 'transform 0.3s ease';
    });

    dataInput.addEventListener('blur', () => {
        dataInput.parentElement.style.transform = 'scale(1)';
    });
});
