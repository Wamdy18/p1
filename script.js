const btnS = document.getElementById('btnS');
const btnM = document.getElementById('btnM');
const btnL = document.getElementById('btnL');

const menuBtn = document.getElementById('menuBurger');
const openMenu = document.getElementById('open-menu');

let isOpenMenu = false;

btnS.addEventListener('click', () => {
	btnS.classList.add('btn-active');
	btnM.classList.remove('btn-active');
	btnL.classList.remove('btn-active');
})

btnM.addEventListener('click', () => {
	btnM.classList.add('btn-active');
	btnS.classList.remove('btn-active');
	btnL.classList.remove('btn-active');
})

btnL.addEventListener('click', () => {
	btnL.classList.add('btn-active');
	btnM.classList.remove('btn-active');
	btnS.classList.remove('btn-active');
})

menuBtn.addEventListener('click', () => {
	if (!isOpenMenu) {
		openMenu.style.display = 'block';
		isOpenMenu = !isOpenMenu;
	} else {
		openMenu.style.display = 'none';
		isOpenMenu = !isOpenMenu;
	}

})