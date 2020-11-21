function dnt(){
  document.getElementById("image-1").src= "https://toriavey.com/images/2011/06/donuts-740x555.jpg";
 var pawer = document.getElementById("odnt").value;
  var payaman1 = document.getElementById("pdnt").value;
  pawer++;
  var payaman = 0 + 4;
  var order = payaman * pawer;
  
  document.getElementById("odnt").value = pawer;
  document.getElementById("pdnt").value = order;
  document.getElementById("dnt").innerHTML = order + " (" + pawer + ")";
}


function pnl(){
  document.getElementById("image-1").src="https://www.lutongbahayrecipe.com/wp-content/uploads/2019/03/lutong-bahay-recipe-pandesal.jpg";
  var pawer = document.getElementById("opnl").value;
  var payaman1 = document.getElementById("ppnl").value;
  pawer++;
  var price = 0 + 2;
  var order = price*pawer;
  
  document.getElementById("opnl").value = pawer;
  document.getElementById("ppnl").value = order;
  document.getElementById("pnl").innerHTML = order + " (" + pawer + ")";
  
}

function cof(){
  document.getElementById("image-1").src="https://vistapointe.net/images/coffee-2.jpg";
  var pawer = document.getElementById("ocof").value;
  var payaman1 = document.getElementById("pcof").value;
  pawer++;
  var price = 0 + 12;
  var order = price*pawer;
  
  document.getElementById("ocof").value = pawer;
  document.getElementById("pcof").value = order;
  document.getElementById("cof").innerHTML = order + " (" + pawer + ")";
}

function ptk(){
  document.getElementById("image-1").src="https://www.pagkaingpinoytv.com/wp-content/uploads/2020/04/hopia-r.jpg";
  var pawer = document.getElementById("optk").value;
  var payaman1 = document.getElementById("pptk").value;
  pawer++;
  var price = 0 + 6;
  var order = price*pawer;
  
  document.getElementById("optk").value = pawer;
  document.getElementById("pptk").value = order;
  document.getElementById("ptk").innerHTML = order + " (" + pawer + ")";
}
 
function hpa(){
  document.getElementById("image-1").src="https://i.pinimg.com/originals/34/17/58/34175850be6fd278e3f33076b86551ab.jpg";
  var pawer = document.getElementById("ohpa").value;
  var payaman1 = document.getElementById("phpa").value;
  pawer++;
  var price = 0 + 3;
  var order = price*pawer;
  
  document.getElementById("ohpa").value = pawer;
  document.getElementById("phpa").value = order;
  document.getElementById("hpa").innerHTML = order + " (" + pawer + ")";

}
function blank(){
  document.getElementById("image-1").src="https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.15752-9/124260799_3212529755541507_3743254721775746707_n.png?_nc_cat=111&ccb=2&_nc_sid=ae9488&_nc_eui2=AeGx5esPzy6jEQsJyYbf2dffu_4zXKXqep67_jNcpep6nn64LD194GvRnbU79ENlGyrksbkFhXn5YcYPoZFtiqCu&_nc_ohc=EvMrpnoJ8bEAX-54-be&_nc_ht=scontent.fmnl4-5.fna&oh=2926fa5936391f3840d5d1fe27ec0a17&oe=5FDC5815";
  document.getElementById("dnt").innerHTML = " ";
  document.getElementById("pnl").innerHTML = " ";
  document.getElementById("cof").innerHTML = " ";
  document.getElementById("ptk").innerHTML = " ";
  document.getElementById("hpa").innerHTML = " ";
  
  document.getElementById("pdnt").value = "0";
  document.getElementById("ppnl").value = "0";
  document.getElementById("pcof").value = "0";
  document.getElementById("pptk").value = "0";
  document.getElementById("phpa").value = "0";
  
  document.getElementById("odnt").value = "0";
  document.getElementById("opnl").value = "0";
  document.getElementById("ocof").value = "0";
  document.getElementById("optk").value = "0";
  document.getElementById("ohpa").value = "0";
  document.getElementById("t").value = "0";
}

function total() {
  var dnt = parseInt(document.getElementById("pdnt").value);
  var pnl = parseInt(document.getElementById("ppnl").value);
  var cof = parseInt(document.getElementById("pcof").value);
  var ptk = parseInt(document.getElementById("pptk").value);
  var hpa = parseInt(document.getElementById("phpa").value);
  var total = dnt + pnl + cof + ptk + hpa;
  var ordnt = parseInt(document.getElementById("odnt").value);
  var orpnl = parseInt(document.getElementById("opnl").value);
  var orcof = parseInt(document.getElementById("ocof").value);
  var orptk = parseInt(document.getElementById("optk").value);
  var orhpa = parseInt(document.getElementById("ohpa").value);
  var order = ordnt + orpnl + orcof + orptk + orhpa;
  document.getElementById("t").innerHTML = total + "(" + order + ")";

}
