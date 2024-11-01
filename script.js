document.addEventListener("DOMContentLoaded", function() {
    function countUpTo(target) {
        let count = 0;
        const countElement = document.getElementById("experience-count");
        const plusElement = document.getElementById("experience-plus");
        
        const interval = setInterval(() => {
            if (count < target) {
                count += Math.ceil(target / 50);
                if (count > target) count = target;
                countElement.textContent = count;
            } else {
                clearInterval(interval);
                plusElement.style.display = "inline"; 
                setTimeout(() => {
                    countElement.classList.add("size-increase");
                    setTimeout(() => {
                        countElement.classList.remove("size-increase");
                    }, 100);
                }, 50);
            }
        }, 20); 
    }

    const popup = document.getElementById("experience-popup");
    popup.classList.add("show");
    countUpTo(500); 
});

document.addEventListener("DOMContentLoaded", function() {
    function countUpTo(target) {
        let count = 0;
        const countElement = document.getElementById("experience-count2");
        const plusElement = document.getElementById("experience-plus");
        
        const interval = setInterval(() => {
            if (count < target) {
                count += Math.ceil(target / 50);
                if (count > target) count = target;
                countElement.textContent = count;
            } else {
                clearInterval(interval);
                plusElement.style.display = "inline"; 
                setTimeout(() => {
                    countElement.classList.add("size-increase");
                    setTimeout(() => {
                        countElement.classList.remove("size-increase");
                    }, 100);
                }, 50);
            }
        }, 20); 
    }

    const popup = document.getElementById("experience-popup");
    popup.classList.add("show");
    countUpTo(10
    ); 
});



const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const arrow = item.querySelector('.arrow');
    
    question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';
        answer.style.display = isOpen ? 'none' : 'block';
        arrow.textContent = isOpen ? '▶' : '▼';
    });
});

document.getElementById("faq-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("faq").scrollIntoView({
        behavior: "smooth"
    });
});