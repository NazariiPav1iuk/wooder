window.addEventListener('DOMContentLoaded', () => {
	// burger
	const burgerBtn = document.querySelector('.burger_wrapper');
	const burgerNav = document.querySelector('.burger__nav');
	const burgerIcon = document.querySelectorAll('.burger__icon span');

	burgerBtn.addEventListener('click', () => {
		burgerNav.classList.toggle('active-burger');
		burgerBtn.classList.toggle('active-burger');
		burgerIcon.forEach((el) => {
			el.classList.toggle('close-icon');
		});
	});
	// lang switcher
	const current = document.querySelector('.switcher__current');
	const langList = document.querySelector('.switcher_inner');
	const langBtn = document.querySelector('.lang__switcher');
	const switcherArrow = document.querySelector('.switcher__icon');
	const langItem = document.querySelectorAll('.switcher__item');

	langBtn.addEventListener('click', () => {
		langList.classList.toggle('switcher_inner-active');
		switcherArrow.classList.toggle('switcher__icon_transform');
		langItem.forEach((el) => {
			el.addEventListener('click', (e) => {
				let target = e.target;
				let lang = target.textContent;
				current.innerHTML = lang;
			});
		});
	});
});
