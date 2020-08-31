document.getElementById("input").addEventListener("click", function(){
    console.log("ok");
    document.getElementById("input").blur(); 
    document.getElementById("input").value = ""; 
    document.getElementById("choose").style.display = "block";
    document.getElementById("choose").style.zIndex = "101";
    document.getElementById("full").style.display = "block";
    document.getElementById("full").style.zIndex = "101";
    event.preventDefault();
}, false);


document.getElementById("c1").addEventListener("click", function(){
    console.log("ok"); 
    document.getElementById("input").value = "Core"; 
    document.getElementById("choose").style.display = "none";
    document.getElementById("choose").style.zIndex = "-1";
    document.getElementById("full").style.display = "none";
    document.getElementById("full").style.zIndex = "-1";
    event.preventDefault();
}, false);

document.getElementById("c2").addEventListener("click", function(){
    console.log("ok"); 
    document.getElementById("input").value = "Byte"; 
    document.getElementById("choose").style.display = "none";
    document.getElementById("choose").style.zIndex = "-1";
    document.getElementById("full").style.display = "none";
    document.getElementById("full").style.zIndex = "-1";
    event.preventDefault();
}, false);

document.getElementById("c3").addEventListener("click", function(){
    console.log("ok"); 
    document.getElementById("input").value = "Minet"; 
    document.getElementById("choose").style.display = "none";
    document.getElementById("choose").style.zIndex = "-1";
    document.getElementById("full").style.display = "none";
    document.getElementById("full").style.zIndex = "-1";
    event.preventDefault();
}, false);

document.getElementById("c4").addEventListener("click", function(){
    console.log("ok"); 
    document.getElementById("input").value = "Tech Syndicate"; 
    document.getElementById("choose").style.display = "none";
    document.getElementById("choose").style.zIndex = "-1";
    document.getElementById("full").style.display = "none";
    document.getElementById("full").style.zIndex = "-1";
    event.preventDefault();
}, false);

document.getElementById("c5").addEventListener("click", function(){
    console.log("ok"); 
    document.getElementById("input").value = "nCrypt"; 
    document.getElementById("choose").style.display = "none";
    document.getElementById("choose").style.zIndex = "-1";
    document.getElementById("full").style.display = "none";
    document.getElementById("full").style.zIndex = "-1";
    event.preventDefault();
}, false);

document.getElementById("c6").addEventListener("click", function(){
    console.log("ok"); 
    document.getElementById("input").value = "Exun"; 
    document.getElementById("choose").style.display = "none";
    document.getElementById("choose").style.zIndex = "-1";
    document.getElementById("full").style.display = "none";
    document.getElementById("full").style.zIndex = "-1";
    event.preventDefault();
}, false);

document.getElementById("submit").addEventListener("click", function(event) {
    if (document.getElementById('aadhar').value < 100000000000 || document.getElementById('aadhar').value > 999999999999){
    event.preventDefault();
    window.alert("invalid aadhar format");
    }

}, false);