function line1(){
    document.getElementById("line1").textContent = "Welcome";
};
function line2(){
    document.getElementById("line2").textContent = "To my personal portfiolo, made for the fullfillment of the final project for ICT 9.";
};
function line2s1(){
    document.getElementById("line2s1").textContent = "I am [Charles Christian Xianirant S. Urciada] from grade 9 section Air in RTPM - Dumaguete Science High School."
};
function line2s2(){
    document.getElementById("line2s2").textContent = "Here is a picture of me:";
};
function line2s3(){
    document.getElementById("img1oline2s3").src = "Screenshot 2024-05-19 103815.png";
}
function line3(){
    document.getElementById("line3").textContent = "Choose which part of the page you want to view:";
};
function line4(){
    document.getElementById("link1").textContent = "(About Me)";
    document.getElementById("link2").textContent = "(My Outputs)";
    document.getElementById("link3").textContent = "(Contact Me)";
};

setTimeout(line1, 1000);
setTimeout(line2, 1500);
setTimeout(line2s1, 2000);
setTimeout(line2s2, 2500);
setTimeout(line2s3, 3000);
setTimeout(line3, 3500);
setTimeout(line4, 4000);