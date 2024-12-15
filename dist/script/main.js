function toggleAnswer(faqId) {
    var answer = document.getElementById(faqId);
    // Toggle visibility of the answer with animation
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        setTimeout(() => { answer.style.maxHeight = answer.scrollHeight + "px"; }, 10); // Trigger transition
    } else {
        answer.style.maxHeight = "0px"; // Set max-height to 0 for collapsing effect
        setTimeout(() => { answer.classList.add('hidden'); }, 300); // Hide after transition
    }
}

// NAVBAR
 // Toggle menu for small screens
 const menuButton = document.getElementById('menu-button');
 const menu = document.getElementById('menu');

 menuButton.addEventListener('click', () => {
   menu.classList.toggle('hidden');
 });