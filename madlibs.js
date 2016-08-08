function generateMadlib() {
  
  // This is the starting story
  var story = "We're at an away game. " + 
  "Our mascot is a ANIMAL. " +  "We love to VERB! " + "You have the number NUMBER on your back. "
  + "You're playing SPORT and you need to score. " + "CLOSEFRIEND is on your team to assist you. " +
  "Your FAMILYMEMBER is the one who got you here in the first place. " + "After the game, we're going to FAVORITERESTAURANT to eat and chill. "
  + "You can sleep over at my house, here is where I live: ADDRESS. "
  
  

  var inputValue = document.getElementById("animal").value;
  story = story.replace("ANIMAL", inputValue);
  
  inputValue = document.getElementById("verb").value;
  story = story.replace("VERB", inputValue);
  
  inputValue = document.getElementById("number").value;
  story = story.replace("NUMBER", inputValue);
  
  inputValue = document.getElementById("sport").value;
  story = story.replace("SPORT", inputValue);
  
  inputValue = document.getElementById("closefriend").value;
  story = story.replace("CLOSEFRIEND", inputValue);
  
  inputValue = document.getElementById("familymember").value;
  story = story.replace("FAMILYMEMBER", inputValue);
  
  inputValue = document.getElementById("favoriterestaurant").value;
  story = story.replace("FAVORITERESTAURANT", inputValue);
  
  inputValue = document.getElementById("address").value;
  story = story.replace("ADDRESS", inputValue);
  
  // This writes the story when the user clicks the "Generate MadLib" button"
  document.getElementById("result").innerHTML = story;
}