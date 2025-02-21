
const btn = document.querySelector('.btn');
btn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevents the form from submitting and refreshing the page

    document.querySelector('#my-form').style.background = 'red';  // Changes form background to red
    document.querySelector('body').classList.add('bg-dark');  // Adds 'bg-dark' class to body (changes background to dark)
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';  // Changes the last <li> to a <h1>Hello</h1>
});