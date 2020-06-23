// //Chapter # 21 to 25

// //< TASK= 1 >

// // var firstname = 'Hamad';
// // var lastname = 'Tariq';
// // var fullname = firstname + ' ' + lastname;
// // alert("wellcome Mr.  "+" "+ fullname)

// //< TASK= 2 >

// // var favorite= 'Vivoy19pro';
// // var len =  favorite.length;
// // document.write("My favorite mobile phone is :" + favorite +"<br>" +"Length"+" ="  + len )

// //<task3>

// // var country = 'Pakistani';
// // var index = country.indexOf('n');
// // document.write('Index is n '+ "= "+ index )

// //< TASK= 4 >

// // var name = 'Hello World';
// // var name1 = name.lastIndexOf('l');
// // document.write('Last Index Of l  ='+ name1 )

// //< TASK =5 >

// // var Hello = 'Pakistani';
// // var search = Hello.charAt (3);
// // document.write('word pakistani, third Index is =  '+ search )

// //< TASK= 6>

// // var firstname = 'HAMMAD';
// // var lastname = 'TARIQ';
// // var fullname = firstname.concat(lastname);
// // alert("wellcome Mr  "+ fullname)

// //< TASK= 7>

// // var city = 'Hyderabad';
// // var rep = city.replace('Hyder','Islam')
// // document.write('Before replace =  '+ city )
// // document.write('<br>After replace =  '+ rep)

// //< TASK= 8>

// // var message = 'Ali and Sami are best friends. They play cricket and football together .';
// // var replace = message.replace(/and/g,"&")
// // document.write('<br>Before replace =  '+message )
// //  document.write('<br>After replace =  '+replace )

//  //< TASK= 9>

// //  var str = '472';
// //  var num = parseInt(str);
// //  document.write('value =  '+ str )
// //  document.write("<br>")
// //  document.write('Type of =  '+ typeof(str) )
// //  document.write("<br>")
// //  document.write('value =  '+ str )
// //  document.write('<br> Number =  '+ num )

//  //< TASK= 10>
 
// //  var input = 'peanuts';
// //  var upp = input.toUpperCase();
// //  document.write('Uppercase =  '+ upp )

//  //< TASK= 11>
 
// //  var input = 'javascript';
// //  var slc_j = input.slice(0,1)
// //  var rest = input.slice(1)
// //  var j1 =slc_j.toUpperCase();
// //  var titlecase = j1.concat(rest);
// //  document.write('Titlecase =  '+ titlecase )

//  //< TASK= 12>

// //  var number= 35.36;
// //  var flor = Math.floor(number)
// //  var str1 = flor.toString();
// //  document.write('Number =  '+ str1 )
// //  document.write("<br>")
// // document.write("Result ="+str1+"36")

//  //< TASK= 13>

// //  Concepts not Clear
    
// //  }
 
//  //< TASK= 14>
 
// //  var backeryitems = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// //  var input = prompt("Enter item name what do you want")
// //  for (let i = 0; i < backeryitems.length; i++) {
// //      if (input.toLowerCase() == backeryitems[i]) {
// //         alert("Item is available in our backery")        
// //         break;
// //      } 
// //      else{
// //          alert("Item is not available in our backery")
// //          break;
// //      }     
// //  }

//  //< TASK= 15>

// //  var password = '123cmd';
// //  var notnumber = password.charAt(0);

// //  if (notnumber >='0' && notnumber <='9') {
// //      alert("Please Enter a valid password ")     
// //  } 
// //  else if(password.length < 6 ){
// //     alert(" character must be 6 character long ")
// //  }
// //  else {
// //     alert("Valid Password");
// //  }

//  //< TASK= 16 > 

// //  var universityname = 'University of Karachi';
// //  var split = universityname.split("");
// // for (var i = 0; i < split.length; i++) {
// //     var z = split[i];
// //     document.write("<br>" + z)
// // }

//  //< TASK= 17 > 

// //  var country = 'PAKISTAN';
// //  var lastchar = country.charAt(country.length - 1);
// //  document.write("Last character is : " + lastchar)

 
//  //< TASK= 18 > 

// //  var PRA= 'the quick brown fox jumps over the lazy dog';
// //  var wordS  = 'the';
// //  var x = PRA.split(wordS).length - 1;
// //  document.write(" There is"+" "+ +x+" "+ "Occurence of words ") 


              // =========================== End CHAP 21 to 25==============================


             //=====================Start chap 26-30========================================

  //< TASK= 1 >


// var number = 61.55;
// var round = Math.round(number);
// var flor = Math.floor(number);
// var cel = Math.ceil(number);
// document.write("Number : " + number + " <br>" + "Round of value: "+ round + " <br>"+ "Floor value: "+ flor +"<br> "+ "Ceil value: "+ cel)

  //< TASK= 2 >

// var number = -30.15;
// var round = Math.round(number);
// var flor = Math.floor(number);
// var cel = Math.ceil(number);
// document.write("Number : " + number +" <br>" + "Round of value: "+ round +" <br>"+ "Floor value: "+ flor + " <br>"+ "Ceil value: "+ cel )

  //< TASK= 3 >

// var number = -4;
// var ht = Math.abs(number);
// document.write("Absolute value of number -4 is "+ht)

  //< TASK= 4 >

// var ran = Math.random()*6;
// var flo = Math.floor(ran);
// document.write("Dice Value is : " + flo)
// document.write("<br>")
// document.write("Dice Value is : " + flo*2)


  //< TASK= 5 >

// var rand = Math.random()*2;
// var flor = Math.floor(rand);
// if (flor < 0.5) {
//     alert(flor +"\nrandom value is : HEADS")
// } else {
//     alert(flor+"\nrandom value  is : TAILS")
// }


  // < TASK= 6 >

// var rand = Math.random()*100;
// var flor = Math.floor(rand);
// document.write("Random number Between 1 to 100 is  : " + flor)

  // < TASK= 7 >

// var weight=+prompt("Enter your weight")

// var weight1 = Math.random()*100;
// var flor = Math.floor(weight);
// document.write("Random number Between 1 to 100 is  : " + weight1)


  // < TASK= 8 >



// var input = prompt("Enter your number ","You can chose b/w 1 to 9")
// if (input ==3){
//     alert("Congratulation")
// } 
// else {
//     alert("Try Again")}





//     // =========================== End CHAP 26 to 30==============================



              // =========================== Start CHAP 31 to 34==============================


  // < TASK= 1 >


// var todate  = new Date();
// document.write(todate)

  // < TASK= 2> 

  // Mathod 1
  // var a = new Date();
  // var b= a.getMonth();
  // document.write(b)
  // if(b==5){
  //     alert("Current Month is "+" "+"June")
  // }

  // Mathod 2
  
// var month = new Date()
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var i= month.getMonth();
// if (i==0){
//   alert(month[0])
// }
// else if(i==1){
//   alert(month[1])
// }
// else if(i==2){
//   alert(month[2])
// }
// else if(i==3){
//   alert(month[3])
// }
// else if(i==4){
//   alert(month[4])
// }
// else if(i==5){
//   alert(month[5])
// }
// else if(i==6){
//   alert(month[6])
// }
// else if(i==7){
//   alert(month[7])
// }
// else if(i==8){
//   alert(month[8])
// }
// else if(i==9){
//   alert(month[9])
// }
// else if(i==10){
//   alert(month[10])
// }
// else if(i==11){
//   alert(month[11])
// }



  // < TASK= 3> 


// var a= new Date();
// var b= a.toString();
// var c=b.slice(0,3)
// document.write("Today is"+" "+c)

// < TASK= 4>

// var a=new Date();
// var b=a.getDay();
// if(b==0,5){
//     alert("Its Fun Day")
// }
// else{
//   alert("Its working day")
// }


// < TASK= 5>

//  var a= new Date();
// var b = a.getDate();
// if(b<=15){
//     alert("First Fifteen days of Months")
// }
// else{
//     alert("Last day's of Month")
// }


// < TASK= 6 >

// var dob= new Date("jan,01 1970")
// var dobmili=dob.getTime()
// var today= new Date();
// var todatmill=today.getTime()
// document.write("Current Date is "+" "+ today)
// document.write("<br>")
// document.write("Elapsed milisecond since "+todatmill )


// < TASK= 7 >

// var a = new Date();
// var b= a.getHours()
// if (b<12){
//     alert("AM")
// }
// else{
//     alert("PM")
// }

// < TASK= 8 >

// var date  = new Date("December 31, 2020");
// document.write("Later Date : " + date)

// < TASK= 9 >

// var now2  = new Date("june 18, 2015");
// var sincemili = now2.getTime();
// var diff =sincemili;
// var convert = diff / (1000 * 60 *60 * 24 )
//  document.write(convert + " day passed since : " + now2)

// < TASK= 10 >

// var new3  = new Date("December 05, 2015");
// document.write("On reference date : " + new3)
// var sincemili = new3.getTime();
// var new2 = new Date("January 01, 2015");

// var todaymili = new2.getTime();
// var diff = sincemili - todaymili;

// var convert = diff / (1000 * 60  )
// document.write("<br>"+convert +" seconds had  passed"+br +"since : " + new2)


// < TASK= 12 >

// var now  = new Date("June 23, 2020 ");
// var now2= new Date ("june 23,1920")
// document.write("Current date : "+ now)
// document.write("<br>" + "100 years back date  was : "+ now2)

// < TASK= 13 >

// var dob= new Date(prompt("Enter your date of Birth","jan 1,2000"));
// var dobmili=dob.getTime();
// var today=new Date();
// var todaymili=today.getTime();
// var diff=today-dobmili;
// var accurage= Math.floor(diff/(1000*60*60*60*30*12))
// document.write(accurage)

// < TASK= 14 >

// var name= "ABC";
// var units=410;
// var cost=15;
// var late=350
// document.write("Customer Name:"+" "+name);
// document.write("<br>")
// document.write("Number of units is:"+" "+units);
// document.write("<br>")
// document.write("Cost per unit is:"+" "+cost);
// document.write("<br>")
// document.write("Net Amount Payable (within Due Date:"+" "+units*cost);
// document.write("<br>")
// document.write("Late Payment Surcharge"+" "+late);
// document.write("<br>")
// document.write("Gross Amount Payable (after Due Date)"+" "+units*cost+late);



//     // =========================== End CHAP 31 to 34==============================




//     // =========================== START CHAP 34 to 38==============================


// < TASK= 1 >

// function ABC() {
//     var a = new Date();
//     document.write(a);
// }
// ABC();

// < TASK= 2 >

// function greet(firstname, lastname) {
//     var concat = firstname + ' ' + lastname;
//     alert(" wellcome " + concat)
// }
// greet('Muhammad','Hamad Tariq');

// < TASK= 3 >

// function addition(a, b) {
//     return (+a) + (+b);
// }
// var x = prompt("Enter Your Number 1 : ")
// var y =prompt("Enter Your Number 2: ")

// alert(addition(x , y));

// < TASK= 4 >

// function calc(a, b, oper) {
//     if (oper === '+') {
//         return (+a) + (+b);
//     }
//     else if (oper === '-') {
//         return a - b;
//     }
//     else if (oper === '*') {
//         return a * b;
//     }
//     else if (oper === '/') {
//         return a / b;
//     }
// }
// alert( calc(10,5,'*') );

// < TASK= 5 >

// var num=+prompt("Enter your value");
// function Square(x){
//     var result=x*x
//     alert("Squre of your number is"+result)

// }
// Square(num);

// < TASK= 6 >

// function factorial(n) {
//     if (n == 0) {
//         return 1;
//     }
//     else {
//         return n * factorial(n - 1);
//     }
// }
// document.write("Factorial of this number is  : " + factorial(2));


// < TASK= 7 >

// function count(){
//   var a=prompt("Enter your value")
//   var b=prompt("Enter your value")
//   for(i=a; i>=b; i++)
//   document.write(i)
//   }
//   count()

// < TASK= 8 >

// function Hypotenuse(base, perpen) {

//     function square() {
//         return Math.squ(Math.pow(base, 2) + Math.pow(perpen, 2));
//     }
//     return "Hypotenuse is : " + square();
// }
// alert(Hypotenuse(4,3))


// < TASK= 9 >

// function arearectangle(width, height) {
//     var area = width * height;
//     return "Area of Rectangle is : " + area;
// }
// alert(arearectangle(100,4));

// < TASK= 11 >

// function upper(input){
//         var array = input.split(' ');
//         var Array1 = [];
//         for(var i = 0; i < array.length; i++)    {
//             Array1.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
//         }
//         return Array1.join(' ');
// }

// alert(upper("the quick brown"));

// < TASK= 12 >

// function abcd(inputs){
//     var array1 = inputs.split(' ');    
//     for(var i = 0; i < array1.length; i++)    {
//         for(var j = 0; j < array1.length; j++)    {
//             if (array1[i].length < array1[j].length ) {
//                 var x = array1[j];
//                 break;
//             } 
//         }        
//     }
//     return x;
// }
// document.write("The longest word of given input is : " + abcd('web development tutorial series'));

// < TASK= 13 >

// function Letter(str , letter){
//     var count = 0;
//     var spli= str.split('');
//     for (var i = 0; i < spli.length; i++) {
//         if(letter === spli[i]){
//             count++;
//         }
//     }
//     return "Total count of given letter is " + count;
// }
// var x = prompt("Enter String : ")
// var lett = prompt("Enter Letter to find : ")
// document.write( Letter(x,lett));
// document.write(br+"String :" + x + br +"letter : "+ lett);

// < TASK= 14 >

// function calcCircumference(radius){
//     const pie = 3.142;
//     var circumOfCircle = 2 * radius * pie;
//     return "The Circumference Of circle is : " + circumOfCircle;
// }
// alert(calcCircumference(66))

// function calcArea(radius){
//     const pie = 3.142;
//     var areaOfCircle = pie * Math.pow(radius,2);
//     return "The Area Of circle is : " + areaOfCircle;
// }

// alert(calcArea(22))