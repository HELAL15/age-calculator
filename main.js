  //inputs
  let d1 = document.getElementById('day');
  let m1 = document.getElementById('month');
  let y1 = document.getElementById('year');
  //labels
  let label1 = document.getElementById('label1');
  let label2 = document.getElementById('label2');
  let label3 = document.getElementById('label3');
  //spans
  let span1 = document.getElementById('d');
  let span2 = document.getElementById('m');
  let span3 = document.getElementById('y');
  //vars to show message
  let required = 'this field is required';
  let invalid = 'must be a valid';
  let isValid = false;
  //definitions
  var date = new Date();
  var day =  date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var months = [31,28,31,30,31,30,31,31,30,31,30,31];
//btn for result
var btn = document.querySelector('button');
// Age Calculator
function age() {
  //values
  let d = d1.value;
  let m = m1.value;
  let y = y1.value;
  //outputs
  let d2 = document.querySelector('.dd');
  let m2 = document.querySelector('.mm');
  let y2 = document.querySelector('.yy');
  //to reset date to be correct
  if (d>day){
    day = day + months[m-1];
    month = month - 1;
    }
    if (m > month) { // Convert m to a numeric value using parseInt
      year = year - 1;
      month = month + 12;}
  // vars to do the sum
  var final_day = day - d;
  var final_month = month - m;
  var final_year = year - y;
  // to print the result into html elements
  d2.innerHTML = final_day;
  m2.innerHTML = final_month;
  y2.innerHTML = final_year;
}
btn.addEventListener('click',age);//to active the previous function
/////////////////////////////////////////////////////////////////////
  d1.addEventListener("input", (e)=>{
    if(+d1.value>31){
      isValid = false;
      span1.innerHTML= invalid;
      label1.classList.add('active');
      span1.classList.add('active');
      d1.classList.add('wrong');
      return;
    }else{
      isValid = true;
      span1.innerHTML= '';
      label1.classList.remove('active');
      span1.classList.remove('active');
      d1.classList.remove('wrong');
    }
    if(+d1.value===0){
      isValid=false;
      span1.innerHTML= required;
      label1.classList.add('active');
      span1.classList.add('active');
      d1.classList.add('wrong');
      return;
    }else{
      span1.innerHTML= '';
      label1.classList.remove('active');
      span1.classList.remove('active');
      d1.classList.remove('wrong');
    }
  });

  m1.addEventListener("input", (e)=>{
    if(+m1.value>12){
      isValid = false;
      span2.innerHTML= invalid;
      label2.classList.add('active');
      span2.classList.add('active');
      m1.classList.add('wrong');
      return;
    }else{
      isValid = true;
      span2.innerHTML= '';
      label2.classList.remove('active');
      span2.classList.remove('active');
      m1.classList.remove('wrong');
    }
    if(+m1.value===0){
      isValid=false;
      span2.innerHTML= required;
      label2.classList.add('active');
      span2.classList.add('active');
      m1.classList.add('wrong');
      return;
    }else{
      span2.innerHTML= '';
      label2.classList.remove('active');
      span2.classList.remove('active');
      m1.classList.remove('wrong');
    }
  });
  y1.addEventListener("input", (e)=>{
    if(+y1.value>year){
      isValid = false;
      span3.innerHTML= invalid;
      label3.classList.add('active');
      span3.classList.add('active');
      y1.classList.add('wrong');
      return;
    }else{
      isValid = true;
      span3.innerHTML= '';
      label3.classList.remove('active');
      span3.classList.remove('active');
      y1.classList.remove('wrong');
    }
    if(+y1.value===0){
      isValid=false;
      span3.innerHTML= required;
      label3.classList.add('active');
      span3.classList.add('active');
      y1.classList.add('wrong');
      return;
    }else{
      span3.innerHTML= '';
      label3.classList.remove('active');
      span3.classList.remove('active');
      y1.classList.remove('wrong');
    }
  });