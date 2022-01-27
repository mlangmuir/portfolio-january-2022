var textArray = ["I am passionate about travelling, sports, and WEB DEVELOPMENT!"];
  //array with display message
var textPosition = 0; 
  //animation starts at character 0
var speed = 75;
  //speed of effect per character in ms

typewriter = () => {
  //function creates typewriter effect
  document.querySelector("#passionate").innerHTML = textArray[0].substring(0, textPosition);
    //access #passionate from the HTML file
    //set its innerHTML equal to 1st index of array [0]
    //attach built in substring(0, textPosition) function to array
  if(textPosition++ != textArray[0].length)
     //if textPosition not equal to size of our string, it will keep incrementing and calling setTimeout function, which keeps calling typewriter function
    //Each time this happens, new letter of string is displayed
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)
  //calls typewriter function when page loads