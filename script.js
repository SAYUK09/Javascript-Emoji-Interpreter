const likeDiv = document.getElementById("like")
var likeCounter = 0

function clickHandler(){
    console.log("initial", likeCounter)
    likeCounter=likeCounter+1
    console.log( "clicked",likeCounter)
    likeDiv.innerText = `liked by ${likeCounter}`;
}

// >>>>>>>>..//

const result = document.getElementById("setUserInput")
const input = document.getElementById("input")

var emojiDict = {
    "😊": "smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑": "annoyance"
  };
  

function changeHandler(){
    
    userInput=input.value
    meaning=emojiDict[userInput]
    setUserInput.innerText = `Means ${meaning}`
    
    if (meaning==undefined){
        setUserInput.innerText = `😔 We don't recogize this emoji`
    }

}

var shoppingList = ["s", "a", "y", "u", "k"]
const listDiv = document.getElementById("list")
console.log(listDiv)

shoppingList.map(item=>{
    console.log(item)
   

})