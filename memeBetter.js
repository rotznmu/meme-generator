// for event listeners
const inpFile = document.querySelector("#inpFile");
const upperTextForm = document.querySelector("#upperText");
const lowerTextForm = document.querySelector("#lowerText");
// for capturing submissions
const picInput = document.querySelector('input[name="inpFile"]');
const upperTextInput = document.querySelector('input[name="textOne"]');
const lowerTextInput = document.querySelector('input[name="textTwo"]');
// for where to add file
const addedMeme = document.querySelector('#newMemeLocation');


//event listener for picture
inpFile.addEventListener('change', function(event) {
    event.preventDefault();
    const imgDisplayed = document.querySelector("#imgHere");
    //imgDisplayed.src = document.getElementById("inpFile").files[0].name
    let file = document.querySelector("input[type=file]").files[0];
    imgDisplayed.src = window.URL.createObjectURL(file);
})

//event Listern for upper text
upperTextForm.addEventListener('submit', function(e){
    e.preventDefault();
    let memeOne = document.querySelector("#meme_text1");
    memeOne.innerText = upperTextInput.value;
})

//event listener for lower text
lowerTextForm.addEventListener('submit', function(e){
    e.preventDefault();
    let memeTwo = document.querySelector("#meme_text2");
    memeTwo.innerText = lowerTextInput.value;
})

function update_image(){
    let img = document.querySelector('img');
    img.src
}