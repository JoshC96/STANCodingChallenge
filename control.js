/*
AUTHOR: Josh Campbell
CREATE DATE: 01/09/17
PURPOSE: Controls the HTML page
*/

var image_index = 1;  
var iterator = 0;
var slides = document.getElementsByClassName("showSlide"); 
displayImage(image_index);  
timer(true);

/**
 * next
 * Used to display the next image in the carousel
 * @param {integer} slide - used to determine whether or not to move the images forward or back 
 */
function next(slide) {
    displayImage(image_index += slide);  
}

/**
 * displayImage
 * Used to display images to the slidercontainer
 * @param {integer} slide - number of slide to move image forward or back in the carousel
 */
function displayImage(slide) {  
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


/**
 * startTimer
 * Used to initialize and control the image carousel switch 
 * @param {Boolean} start - is it the first time loading the function?
 */

function timer(){
    var imageInterval = setInterval(function(){next(1)}, 6000);
}

/**
 * On click event handlers to switch images forward and back
 */
document.getElementById("left").onclick = function() {next(-1)};
document.getElementById("right").onclick = function() {next(1)};