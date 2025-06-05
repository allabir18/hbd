document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const velas = document.querySelector('.velas');
    const fuegos = document.querySelectorAll('.fuego');
    const text = document.createElement('div');
    text.className = 'text';
    text.innerHTML = '<h1>Click the flame\nto blow out the candle!</h1>';
    document.querySelector('.container').appendChild(text);
    
    const container = document.querySelector('.container');
    const body = document.body;
    let clickCount = 0;

    // Create and style message container with spans around each character
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';
    
    const leftMessage = "Happy Birthday, my Pookie! I love you a lot. Many, many happy returns of the day. I know I couldn't be with you this year, but In Sha Allah, I will be with you in your upcoming birthdays.";
    const rightMessage = "May Allah bless you and give you all the happiness you deserve. Always be happy. I really love your smile, Jaan. Be who you are and always smile with your heart. May this year bring you all the happiness. You deserve the best because you are the best.";

    messageContainer.innerHTML = `
        <div class="message-left">
            ${[...leftMessage].map(char => `<span>${char}</span>`).join('')}
        </div>
        <div class="message-right">
            ${[...rightMessage].map(char => `<span>${char}</span>`).join('')}
        </div>
    `;
    document.body.appendChild(messageContainer);

    // Animation for the candle flames
    const animateFlames = () => {
        fuegos.forEach((fuego, index) => {
            fuego.style.animation = `fuego ${2 - index * 0.4}s 6.5s infinite`;
        });
    };

    // Initialize flames
    animateFlames();

    // Function to animate text
    const animateText = (element) => {
        const spans = element.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.animationDelay = `${index * 50}ms`;
        });
    };

    // Handle candle clicks
    velas.addEventListener('click', function() {
        clickCount++;
        
        switch(clickCount) {
            case 1:
                // First click - show left message
                messageContainer.classList.add('visible');
                const leftMsg = document.querySelector('.message-left');
                leftMsg.classList.add('show');
                animateText(leftMsg);
                text.querySelector('h1').textContent = "Click again\nfor more wishes!";
                break;
            
            case 2:
                // Second click - show right message
                const rightMsg = document.querySelector('.message-right');
                rightMsg.classList.add('show');
                animateText(rightMsg);
                text.querySelector('h1').textContent = "One last click\nfor a surprise!";
                break;
            
            case 3:
                // Third click - transition to flowers
                fuegos.forEach(fuego => {
                    fuego.style.animation = 'none';
                    fuego.style.opacity = '0';
                });

                text.querySelector('h1').textContent = "✨ Happy Birthday! ✨";
                body.classList.add('dim-background');
                container.classList.add('fade-out');
                messageContainer.style.opacity = '0';

                // Create starry night effect
                const nightDots = document.createElement('div');
                nightDots.className = 'night-dots';
                document.body.appendChild(nightDots);

                // Redirect after animations complete
                setTimeout(() => {
                    window.location.href = 'flowers.html';
                }, 3000); // Increased delay to 3s for smoother transition
                break;
        }
    });
});