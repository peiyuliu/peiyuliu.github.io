//CSS
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../src/css/index.css"

//PEGA Project Open & Close
var pp = document.querySelector(".pegaProject")

var status1 = 0
function show1(){
    if(status1 === 0){
        document.querySelector(".pegaProjectContents").style.display='block'
        status1 = 1
    }
    else if(status1 === 1){
        document.querySelector(".pegaProjectContents").style.display='none'
        status1 = 0
    }
}
pp.addEventListener("click", show1)

var status2 = 1
function show2(){
    if(status2 === 0){
        document.querySelector("#imgOpen1").style.display='none'
        document.querySelector("#imgClose1").style.display='inline-block'
        status2 = 1
    }
    else if(status2 === 1){
        document.querySelector("#imgOpen1").style.display='inline-block'
        document.querySelector("#imgClose1").style.display='none'
        status2 = 0
    }
}
pp.addEventListener("click", show2)


//NTU Project Open & Close
var Np = document.querySelector(".ntuProject")

var statusNpC = 0
function showNpC(){
    if(statusNpC === 0){
        document.querySelector(".ntuProjectContents").style.display='block'
        statusNpC = 1
    }
    else if(statusNpC === 1){
        document.querySelector(".ntuProjectContents").style.display='none'
        statusNpC = 0
    }
}
Np.addEventListener("click", showNpC)

var statusNp = 1
function showNpI(){
    if(statusNp === 0){
        document.querySelector("#imgOpenNpI").style.display='none'
        document.querySelector("#imgCloseNpI").style.display='inline-block'
        statusNp = 1
    }
    else if(statusNp === 1){
        document.querySelector("#imgOpenNpI").style.display='inline-block'
        document.querySelector("#imgCloseNpI").style.display='none'
        statusNp = 0
    }
}
Np.addEventListener("click", showNpI)


