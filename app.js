
//First portfolio piece
//Get the modal
var modal = document.getElementById('myModal');
//Get the img that opens the modal
var btn = document.getElementById("img");
//get the span element that closes the modal
var span = document.getElementsByClassName("close")[0];
//open the modal from clicking on img
btn.onclick = function(){
	modal.style.display = "block";
};
//close the modal by clicking x
span.onclick = function(){
	modal.style.display = "none";
};
//close the modal by click anywhere outside of it - can't get this to work with mult
// window.onclick = function(event){
// 	if (event.target === modal){
// 		modal.style.display = "none";
// 	}
// };

//Second portfolio piece
var oneModal = document.getElementById('myModal1');
var oneBtn = document.getElementById("img1");
var oneSpan = document.getElementsByClassName("close")[1];

oneBtn.onclick = function(){
	oneModal.style.display = "block";
};
oneSpan.onclick = function(){
	oneModal.style.display = "none";
};
// window.onclick = function(event){
// 	if (event.target === oneModal){
// 		oneModal.style.display = "none";
// 	}
// };

//Third portfolio piece
var twoModal = document.getElementById('myModal2');
var twoBtn = document.getElementById("img2");
var twoSpan = document.getElementsByClassName("close")[2];

twoBtn.onclick = function(){
	twoModal.style.display = "block";
};
twoSpan.onclick = function(){
	twoModal.style.display = "none";
};

//Fourth portfolio piece
var threeModal = document.getElementById('myModal3');
var threeBtn = document.getElementById("img3");
var threeSpan = document.getElementsByClassName("close")[3];

threeBtn.onclick = function(){
	threeModal.style.display = "block";
};
threeSpan.onclick = function(){
	threeModal.style.display = "none";
};

//Fifth portfolio piece
var fourModal = document.getElementById('myModal4');
var fourBtn = document.getElementById("img4");
var fourSpan = document.getElementsByClassName("close")[4];

fourBtn.onclick = function(){
	fourModal.style.display = "block";
};
fourSpan.onclick = function(){
	fourModal.style.display = "none";
};

//Sixth portfolio piece
var fiveModal = document.getElementById('myModal5');
var fiveBtn = document.getElementById("img5");
var fiveSpan = document.getElementsByClassName("close")[5];

fiveBtn.onclick = function(){
	fiveModal.style.display = "block";
};
fiveSpan.onclick = function(){
	fiveModal.style.display = "none";
};











