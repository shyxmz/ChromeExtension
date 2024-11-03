document.addEventListener('DOMContentLoaded', () => {
    const factText = document.getElementById('factText');
    const newFactBtn = document.getElementById('newFactBtn');
    const factContainer = document.getElementById('factContainer');
    const loadingSpinner = document.getElementById('loading');

    async function getFact() {
        try {
            // Show loading state
            factContainer.style.opacity = '0.6';
            loadingSpinner.style.display = 'flex';
            newFactBtn.disabled = true;

            // Add loading animation to button
            newFactBtn.innerHTML = `
                <div class="loading-spinner" style="width: 16px; height: 16px; border-width: 2px;"></div>
                <span>Loading...</span>
            `;

            const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
            const data = await response.json();

            // Animate fact transition
            factContainer.style.transform = 'translateY(10px)';
            factContainer.style.opacity = '0';

            setTimeout(() => {
                factText.textContent = data.text;
                factContainer.style.transform = 'translateY(0)';
                factContainer.style.opacity = '1';
            }, 200);

        } catch (error) {
            factText.textContent = "Oops! Couldn't load a fact. Try again!";
            factContainer.classList.add('fact-error');
        } finally {
            // Reset loading states
            setTimeout(() => {
                loadingSpinner.style.display = 'none';
                factContainer.style.opacity = '1';
                newFactBtn.disabled = false;
                newFactBtn.innerHTML = '<span>Get New Fact</span>';
            }, 300);
        }
    }

    // Add hover effect to fact container
    factContainer.addEventListener('mouseenter', () => {
        factContainer.style.transform = 'translateY(-2px)';
    });

    factContainer.addEventListener('mouseleave', () => {
        factContainer.style.transform = 'translateY(0)';
    });

    // Add button click animation
    newFactBtn.addEventListener('mousedown', () => {
        newFactBtn.style.transform = 'scale(0.98)';
    });

    newFactBtn.addEventListener('mouseup', () => {
        newFactBtn.style.transform = 'scale(1)';
    });

    // Load initial fact
    getFact();

    // Add click event listener to button
    newFactBtn.addEventListener('click', getFact);

    // Add keyboard shortcut (spacebar) for new fact
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space' && !newFactBtn.disabled) {
            event.preventDefault();
            getFact();
            newFactBtn.classList.add('button-active');
            setTimeout(() => newFactBtn.classList.remove('button-active'), 200);
        }
    });
});