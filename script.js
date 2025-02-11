document.addEventListener('DOMContentLoaded', function() {
    // Add any interactive JavaScript functionality here
    const bookButtons = document.querySelectorAll('.book-btn, .event-card button');
    bookButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Booking functionality to be implemented.');
        });
    });
});