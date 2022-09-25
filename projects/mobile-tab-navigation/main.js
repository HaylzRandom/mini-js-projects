const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, idx) => {
	item.addEventListener('click', () => {
		hideAllContents();
		hideAllItems();

		item.classList.add('active');
		contents[idx].classList.add('show');
	});
});

const hideAllContents = () => {
	contents.forEach((content) => content.classList.remove('show'));
};

const hideAllItems = () => {
	listItems.forEach((item) => item.classList.remove('active'));
};
