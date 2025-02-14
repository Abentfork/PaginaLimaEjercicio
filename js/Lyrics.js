document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-lyrics');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const lyrics = this.nextElementSibling;
            if (lyrics.style.display === 'none' || lyrics.style.display === '') {
                lyrics.style.display = 'block';
                this.textContent = 'Hide Lyrics';
            } else {
                lyrics.style.display = 'none';
                this.textContent = 'Show Lyrics';
            }
        });
    });
});