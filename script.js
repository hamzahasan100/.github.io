// Basic interaction: Button click event
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');

    if (button) {
        button.addEventListener('click', function() {
            alert('Thanks for checking out my portfolio!');
        });
    }
});
