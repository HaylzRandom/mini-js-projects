const label = document.querySelectorAll('.form-control label');

label.forEach((label) => {
	label.innerHTML = label.innerText
		.split('')
		.map(
			(letter, index) =>
				`<span style="transition-delay:${index * 50}ms">${letter}</span>`
		)
		.join('');
});
