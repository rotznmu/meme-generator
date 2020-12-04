// for event listeners
const inpFile = document.querySelector('#inpFile');
const upperTextForm = document.querySelector('#upperText');
const lowerTextForm = document.querySelector('#lowerText');
// for capturing submissions
const picInput = document.querySelector('input[name="inpFile"]');
const upperTextInput = document.querySelector('input[name="textOne"]');
const lowerTextInput = document.querySelector('input[name="textTwo"]');
const submitPic = document.querySelector('#picButton');
// for where to add file
const addedMeme = document.querySelector('#newMemeLocation');
const imgDisplayed = document.querySelector('#meme_picture');
//event listener for picture

submitPic.addEventListener('click', function(event) {
	event.preventDefault();
	console.log('clicked');
	//imgDisplayed.src = document.getElementById("inpFile").files[0].name
	let file = document.querySelector('input[type=file]').files[0];
	let newDiv = document.createElement('div');
	let newImg = document.createElement('img');
	newImg.src = window.URL.createObjectURL(file);
	newImg.height = '500';
	newImg.width = '600';
	newDiv.appendChild(newImg);
	addDeleteBtn(newDiv);
	imgDisplayed.appendChild(newDiv);
	inpFile.value = '';
});

function addDeleteBtn(randomVar) {
	let deleteBtn = document.createElement('button');
	deleteBtn.innerText = 'X';
	randomVar.appendChild(deleteBtn);
}

imgDisplayed.addEventListener('click', function(evt) {
	evt.preventDefault();
	let clickedButton = evt.target;
	console.log(clickedButton.tagName);
	if (clickedButton.tagName === 'BUTTON') {
		clickedButton.parentElement.remove();
	}
});

//event Listern for upper text
upperTextForm.addEventListener('submit', function(e) {
	e.preventDefault();
	let textValue = upperTextInput.value;
	createMeme('meme_text1', textValue);
	upperTextInput.value = '';
});

//event listener for lower text
lowerTextForm.addEventListener('submit', function(e) {
	e.preventDefault();
	let textValue = lowerTextInput.value;
	createMeme('meme_text2', textValue);
	lowerTextInput.value = '';
});

function update_image() {
	let img = document.querySelector('img');
	img.src;
}

function createMeme(className, inputLocation) {
	let pElement = document.createElement('p');
	pElement.className = className;
	pElement.innerText = inputLocation;
	let newMeme = imgDisplayed.lastElementChild;
	newMeme.append(pElement);
}
