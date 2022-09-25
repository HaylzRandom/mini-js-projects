const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'We love JavaScript!';

let idx = 1;
let speed = 300 / speedEl.value;

const writeText = () => {
	textEl.innerText = text.slice(0, idx);

	idx++;

	if (idx > text.length) {
		idx = 1;
	}

	setTimeout(writeText, speed);
};

writeText();

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value));
