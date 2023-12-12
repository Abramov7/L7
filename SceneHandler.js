import data from "./options.js";

const BUTTONS_AREA = document.querySelector('.buttons')
const SCENE_TEXT = document.querySelector('.scene_content p')
const IMAGE = document.querySelector('img')
var CURRENT_SCENE = 0


//func for changing text content to current scene
function DisplayScene(){
    SCENE_TEXT.textContent = data[CURRENT_SCENE].text
    IMAGE.setAttribute('src',`./images/${CURRENT_SCENE}.png`)
}


//func for adding eventlistener for every button of current scene
function AttachButtons(){
    let cb;
    Object.keys(data[CURRENT_SCENE].options).forEach((option) => {
        cb = document.createElement("button")
        cb.textContent = option
        EventsHandler(cb)
        BUTTONS_AREA.append(cb)
    })
}

//func for displaying extra text
function DisplayOption(option){
    SCENE_TEXT.textContent = data[CURRENT_SCENE].options[option]
        setTimeout(() => {
            DisplayScene()
        }, 5000)
}


//func for deleting all children of .buttons element
function CleanUp(){
    document.querySelectorAll('button').forEach((btn) => {BUTTONS_AREA.removeChild(btn)})
}

//func that check event type (just text or next scene)
function EventsHandler(btn){
    let x = data[CURRENT_SCENE].options[btn.textContent]
    if (typeof(x) == "number") {
        btn.addEventListener("click", () => NextScene(x))
    }
    else {
        btn.addEventListener("click", () => DisplayOption(btn.textContent))
    }
}

//func for changing scenes
function NextScene(id){
    CleanUp();
    CURRENT_SCENE = id
    DisplayScene()
    AttachButtons()
    
}

DisplayScene()
AttachButtons()


