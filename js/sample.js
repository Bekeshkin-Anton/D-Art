const btn = document.querySelector('.button-selector');

if (btn != null) {
	const onClickHandler = async (e) => {
		e.preventDefault();

		// Проверяем правильность введённых данных

		// Здесь скрыть форму и показать что запрос отправляется

		let response = await fetch('https://server.com/send', {
			method: 'POST',
			body: {
				name: document.querySelector('input[name=name]').value,
				phone: document.querySelector('input[name=phone]').value,
			},
		});

		if (response.ok) {
			// Показываем что запрос отправлен
		} else {
			// Какая-то хуйня. Либо сервер послал нахуй, либо он вообще не отвечает
		}
	};

	btn.addEventListener('click', onClickHandler);
}
