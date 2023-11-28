// firstly, create a function for the button.
document.getElementById('calculate').addEventListener('click', function() {

    // make sure to declare the values from within the html document.
    let principalAmount = document.querySelector('[data-principal]').value
    let interest = document.querySelector('[data-interest]').value;

    // insert a calculation the button to 
    let calculate = (principalAmount * interest) / 100;
    // display the answer
    document.querySelector('[data-output]').textContent = `Your interest amount is ${calculate}`;
});