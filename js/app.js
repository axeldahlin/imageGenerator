var btn = document.getElementById('button');
var response = document.getElementById('response');
var wordInput = document.getElementById('inputWord');
var form = document.querySelector('.form');



 


/*====================================
FETCH FUNCTIONS
====================================*/

function fetchData(url) {
	return fetch(url)
		.catch(error => console.log('Request failed', error)) 
}



/*====================================
HELPER FUNCTIONS
====================================*/
form.addEventListener('submit', function (e) {
	e.preventDefault();
	
	const searchWord = wordInput.value;

	const imageTypes = document.getElementsByName('imageType');

	let imageTypeURL = '';

	let imageTypeText = '';

	for (let i = 0; i < imageTypes.length; i++) {

		if (imageTypes[i].checked) {
			imageTypeURL = imageTypes[i].value;

			imageTypeText = imageTypes[i].nextElementSibling.innerHTML.toLowerCase();


		}

	}

	fetchData(`https://robohash.org/${searchWord}${imageTypeURL}`)
		.then(data => insertImage(data.url, searchWord, imageTypeText));
})


function insertImage(url, searchWord, imageTypeText) {
	document.querySelector('.card').style.display = 'block';
	document.querySelector('.card-img-top').src = url;

	document.querySelector('.card-text').innerHTML = `A ${imageTypeText} generatied with the text "${searchWord}".`;





}



