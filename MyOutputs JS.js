function line1(){
    document.getElementById("line1").textContent = "This is the (My Outputs) page!";
};
function line2(){
    document.getElementById("line2").textContent = "(HTML Forms)";
};
function line2s1(){
    const iframe1 = document.createElement("iframe");
    document.getElementById("line2s1").appendChild(iframe1);
    iframe1.width = "1330x";
    iframe1.height = "600px";
    iframe1.src = "Survey Form (Home).html";
};
function line2s2(){
    document.getElementById("link1o2s2").textContent = "(Click here to view the full output!)";
};
function line2s3(){
    document.getElementById("line2s3").textContent = "This is an output done in html and css. The task was to create a form using html excluding the data processing.";
};
function line3(){
    document.getElementById("line3").textContent = "(The Playlist)";
};
function line3s1(){
    const iframe2 = document.createElement("iframe");
    document.getElementById("line3s1").appendChild(iframe2);
    iframe2.width = "1330px";
    iframe2.height = "600px";
    iframe2.src = "Reflection (Home Page).html";
};
function line3s2(){
    document.getElementById("link1o3s2").textContent = "(Click here to view the full output!)";
};
function line3s3(){
    document.getElementById("line3s3").textContent = "This is an output done in html and css. The task was to create a reflection about the show called 'The Playlist', which is about the creation of Spotify.";
};
function line4(){
    document.getElementById("line4").textContent = "(Dog Years Javascript Output)";
};
function line4s1(){
    const iframe3 = document.createElement("iframe");
    document.getElementById("line4s1").appendChild(iframe3);
    iframe3.width = "1330px";
    iframe3.height = "600px";
    iframe3.src = "Dog Years.html";
};
function line4s2(){
    document.getElementById("line4s2").textContent = "(Click here to view the full output! *Copy and paste the text into VSCode and run the code*)";
    document.getElementById("line4s2").style.cursor = "pointer";
};
function line4s2OnClick(){
    const openfile1 = document.createElement("a");
    openfile1.href = "DogYears.js"
    openfile1.target = "_blank"
    openfile1.click();
    openfile1.remove();
};
function line4s3(){
    document.getElementById("line4s3").textContent = "This is an output done in javacsript. The task was to create a human years to dog years age calculator.";
};
function line5(){
    document.getElementById("line5").textContent = "Choose which part of the page you want to view next:";
};
function line5s1(){
    document.getElementById("link1").textContent = "(Home Page)";
    document.getElementById("link2").textContent = "(About Me)";
    document.getElementById("link3").textContent = "(Contact Me)";
};

document.getElementById("line4s2").addEventListener("click", line4s2OnClick);
setTimeout(line1, 1000);
setTimeout(line2, 1500);
setTimeout(line2s1, 2000);
setTimeout(line2s2, 2500);
setTimeout(line2s3, 3000);
setTimeout(line3, 3500);
setTimeout(line3s1, 4000);
setTimeout(line3s2, 4500);
setTimeout(line3s3, 5000);
setTimeout(line4, 6000);
setTimeout(line4s1, 6500);
setTimeout(line4s2, 7000);
setTimeout(line4s3, 7500);
setTimeout(line5, 8000);
setTimeout(line5s1, 8500);