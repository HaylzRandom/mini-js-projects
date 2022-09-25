const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
	const input = e.target.value;
	const length = input.length;

	const blurCalc = 20 - length * 2;
	background.style.filter = `blur(${blurCalc}px)`;
});
