const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
	const cases = rotator.querySelectorAll('.rotator__case');
	let index = 0;

	function rotate() {
		const current = cases[index];
		current.classList.remove('rotator__case_active');

		index = (index + 1) % cases.length;
		const next = cases[index];

		next.style.color = next.dataset.color;

		next.classList.add('rotator__case_active');

		const speed = next.dataset.speed;

		setTimeout(rotate, speed);
	}

	setTimeout(rotate, cases[index].dataset.speed);
});