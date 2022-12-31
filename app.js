function multiply(){
     var para1, para2, para3;
     para1=Number (document.getElementById("side1").value);
     para2= Number(document.getElementById("side2").value);
     para3= Number(document.getElementById("height").value);
     document.getElementById("totalarea").value= para1*para2*para3;

}