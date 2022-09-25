const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

// Event Bubbling
ratingsContainer.addEventListener('click', (e) => {
	if (e.target.parentNode.classList.contains('rating')) {
		removeActive();
		e.target.parentNode.classList.add('active');
		selectedRating = e.target.nextElementSibling.innerHTML;
	}
});

sendBtn.addEventListener('click', (e) => {
	panel.innerHTML = `
        <i class="fa-solid fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improeve our customer support</p>
    `;
});

const removeActive = () => {
	for (let i = 0; i < ratings.length; i++) {
		ratings[i].classList.remove('active');
	}
};
