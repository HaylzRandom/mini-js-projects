const images = document.querySelectorAll('.project-image');

images.forEach((image) => {
	image.addEventListener('click', () => {
		if (image.classList.contains('expand')) {
			image.classList.remove('expand');
		} else {
			image.classList.add('expand');
		}
	});
});
