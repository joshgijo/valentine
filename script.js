document.getElementById('noButton').addEventListener('mouseover', function() {
    const button = this;
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});

document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'why-you.html';
});

document.getElementById('noButton').addEventListener('click', function() {
    window.location.href = 'index.html';
});
function showMessage() {
    const surpriseMessage = document.getElementById('surprise');
    surpriseMessage.classList.add('visible');
}