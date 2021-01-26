const questions = document.querySelectorAll('.faq-question');
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

questions.forEach(q =>
	q.addEventListener('click', e => {
		e.target.nextElementSibling.classList.toggle('hidden');
	})
);

navToggle.addEventListener('click', () => {
	navList.classList.toggle('hidden');
});
