const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMsg = document.querySelector('.final');
const replay = document.getElementById('replay');

const resetDOM = () => {
	counter.classList.remove('hide');
	finalMsg.classList.remove('show');

	nums.forEach((number) => {
		number.classList.value = '';
	});

	nums[0].classList.add('in');
};

const runAnimation = () => {
	nums.forEach((number, idx) => {
		const nextToLast = nums.length - 1;

		number.addEventListener('animationend', (e) => {
			if (e.animationName === 'goIn' && idx !== nextToLast) {
				number.classList.remove('in');
				number.classList.add('out');
			} else if (e.animationName === 'goOut' && number.nextElementSibling) {
				number.nextElementSibling.classList.add('in');
			} else {
				counter.classList.add('hide');
				finalMsg.classList.add('show');
			}
		});
	});
};

runAnimation();

replay.addEventListener('click', () => {
	resetDOM();
	runAnimation();
});
