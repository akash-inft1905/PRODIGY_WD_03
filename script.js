let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string;
    }
    // else if (e.target.innerHTML == NaN) {
    //   string = "Not a Valid String !";
    //   document.querySelector('input').value = string;
    //   // console.log('Please Enter the Valid Numbers !')
    // }
    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})