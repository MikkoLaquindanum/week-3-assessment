console.log("hello world");

const compliment = () => {
	alert('#compliments-from-chef')
}

let feels = document.querySelector('img')
 
feels.addEventListener('mouseover', compliment)

function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('Form has been submitted successfully')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);