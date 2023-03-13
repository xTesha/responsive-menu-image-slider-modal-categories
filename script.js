const mobileMenu = (dugme)  => {
	let menu = document.querySelector('.header ul')
	
	if(dugme.innerText == 'MENU'){
		menu.style.display = 'block'
		dugme.innerText = 'CLOSE'

	}else{
		menu.style.display = 'none'
		dugme.innerText = 'MENU'
	}
}


let desnoDugme = document.querySelector('#right-btn')
let levoDugme = document.querySelector('#left-btn')
let pictures = document.querySelectorAll('.slider-images img')
let imgNumber = 0

desnoDugme.addEventListener('click', () => {
	displayNone(pictures)
	imgNumber++
	if(imgNumber == pictures.length){
		imgNumber = 0
	}
	pictures[imgNumber].style.display = 'block'
})

levoDugme.addEventListener('click', () => {
	displayNone(pictures)
	imgNumber--
	if(imgNumber < 0){
		imgNumber = pictures.length -1
	}
	pictures[imgNumber].style.display = 'block'
})

const displayNone = (element) => {
	element.forEach((slika) => {
		slika.style.display ='none'
	})
}

const portfolioSort = (dugme) => {
	let kategorija = dugme.getAttribute('data-category')
	let item = document.querySelectorAll('.portfolio-single-item')

	item.forEach((element) => {
		element.style.display = 'none'
	})

	item.forEach((item) => {
		if(kategorija == 'sve'){
			item.style.display = 'block'
		}
	})

	item.forEach((item) => {
		if(item.getAttribute('data-category').includes(kategorija)){
			item.style.display = 'block'
		}
	})

}

const openModal = () => {
	document.querySelector('.popup-modal').style.display = 'block'
	document.querySelector('.overlay').style.display = 'block'

}

const closeModal = () => {
	document.querySelector('.popup-modal').style.display = 'none'
	document.querySelector('.overlay').style.display = 'none'
}