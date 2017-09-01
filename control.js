/*
AUTHOR: Josh Campbell
CREATE DATE: 01/09/17
PURPOSE: Controls the HTML page
*/

var image_index = 1;  
displayImage(image_index);  

function next(slide) {  
    displayImage(image_index += slide);  
}  

function current(slide) {  
    displayImage(image_index = slide);  
}  

function displayImage(slide) {  

    var slides = document.getElementsByClassName("showSlide"); 

    if (slide > slides.length) 
    { 
    	image_index = 1 
    }  

    if (slide < 1)
    { 
    	image_index = slides.length 
    } 

    for (var i = 0; i < slides.length; i++) 
    {  
        slides[i].style.display = "none";  
    }  

    slides[image_index - 1].style.display = "block";  
} 

document.getElementById("left").onclick = function() {next(-1)};
document.getElementById("right").onclick = function() {next(1)};