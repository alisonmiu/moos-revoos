'use strict'

const items = document.querySelectorAll('.modals .movieDesc');

items.forEach((item) => {
	item.querySelector('img').addEventListener('click', (img) => {
		item.querySelector('dialog').showModal();
	});

	item.querySelector('button.close').addEventListener('click', (btn) => {
		btn.target.parentNode.close();
	})
});