const makeBigger = () => {
   alert('make bigger!');
   document.querySelector('.content').style.fontSize = "xx-large";

   // document.querySelector("#a1").style.
   // document.querySelector('#a1').style.fontSize = ;
   // document.getElementById("#a1").style.fontSize = "xx-small";
};

const makeSmaller = () => {
   alert('make smaller!');
   document.querySelector('.content').style.fontSize = "xx-small";


   // document.querySelector("#a2").style
   // document.querySelector('#a2').style.fontSize = 200;
   // document.getElementById("#a2").style.fontSize = "xx-large";
};

/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
