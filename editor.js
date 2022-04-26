  let btn = document.querySelector("#btn")
 let sumIcon = document.querySelector(".sum_icon")
 let inputOne = document.querySelector("#inputOne")
 let inputTwo = document.querySelector("#inputTwo")
 let selectbtn = document.querySelector("#inputThree")
 let inputFour = document.querySelector("#inputFour")
 let tipIcon = document.querySelector(".tip_icon")
 let personIcon = document.querySelector(".person_icon")
 let updatePerson = ["https://cdn-icons.flaticon.com/png/128/4915/premium/4915527.png?token=exp=1650843809~hmac=d60dd475ad66c5b269d521fc6cf775ed"]
 let form = document.querySelector("#form")
 
 inputThree.addEventListener("change", function(){
   inputOne = (form.elements.inputOne.value)
   inputTwo = (form.elements.inputTwo.value)
   inputThree = (form.elements.inputThree.value)
   let cost = parseFloat(inputOne)
   let tip = parseFloat(inputTwo) /100
   let people = parseFloat(inputThree)
   let total = ( cost + cost * tip)/people
   inputFour.value= `$${total.toFixed(2)}`;
   sumIcon.classList.add("spin")
  const executeSpin = ()=>{
   sumIcon.classList.remove("spin")
  }
   setTimeout((executeSpin),1000)
 })
 function executeRotate(){
   tipIcon.classList.add("rotate_tip_icon")
 }
 inputTwo.addEventListener("keydown", executeRotate)
 
 //function executeChangePersonIcon(){
   //personIcon.src = updatePerson;
 //}
 //selectbtn.addEventListener("change", executeChangePersonIcon) cancelled
 
 function inputClearanceFirstThree(){
     if(form.elements.inputOne.value !== "" && 
        form.elements.inputTwo.value !== "" && 
         form.elements.inputThree.value !== ""){
         form.elements.inputOne.value= ""
          form.elements.inputTwo.value=""
          selectbtn.value=""
          tipIcon.classList.remove("rotate_tip_icon")
          personIcon.src = "https://cdn-icons-png.flaticon.com/128/3048/3048122.png"
          tipIcon.style.transition="1s"   
     }else{
         //ignored
     }
 }
 const inputClearanceFourth = ()=>{
    if(form.elements.inputFour.value !== ""){
     form.elements.inputFour.value= ""
    }
 }
 setInterval(()=>{
     inputClearanceFirstThree()
 },4500)
 setInterval(()=>{
     inputClearanceFourth()
 },20000)
 
 function Poweron(){
  let timeContainer = document.querySelector(".time")
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let meridian = "Am"
 
  if(hours > 12){
   hours = hours - 12
    meridian = "PM"
  }
  if(hours === 0){
      hours = "12"
  }
  if(minutes < 10){
      minutes =  "0" + minutes
  }
  if(seconds < 10){
      seconds = "0" + seconds
  }
  let alltime = `${hours} : ${minutes} : ${seconds} ${meridian}`
 timeContainer.innerText= alltime;
 }
  setInterval(()=>{
      Poweron()
  }, 1000)
 let allemoji = ["😄","😙","🤩","😍","😁","🥰","😉","🤑","🤗","😊","😇","😘","🙃","😋",]
 let emojis = document.querySelector(".emoji")
 const reRun = ()=>{
   let rand = Math.floor(Math.random() * allemoji.length)
  emojis.innerHTML=allemoji[rand]
 }
 setInterval(() => {
     reRun()
 }, 4000);
 setInterval(()=>{
     emojis.classList.toggle("emojistyle")
 },2000)
 
 
  let audio = new Audio("https://www.dropbox.com/s/pj4r95kxchzv2o5/button-17.mp3?dl=1")
  let calculator_Body = document.querySelector(".first_outerbox")
  let nav = document.querySelector(".nav_section")
  let checkbox = document.querySelector("#checkbox")
 let circle = document.querySelector(".circle")
 let circle_container = document.querySelector(".circle_container")
 function toggle(){
 if(circle.hasAttribute("offtoggle") === true){
   circle.removeAttribute("offtoggle")
   circle.style.backgroundColor="#000000"
   nav.classList.add("nav_section_style")
     calculator_Body.style.backgroundColor="rgba(38, 37, 59, 0.301)"
     calculator_Body.style.transition="1s"
     calculator_Body.style.color="#FFFFFF"
     inputOne.style.backgroundColor="#000000"
     inputOne.style.color="#FFFFFF"
     inputTwo.style.color="#FFFFFF"
     inputTwo.style.backgroundColor="#000000"
     selectbtn.style.backgroundColor="#000000"
     selectbtn.style.color="#FFFFFF"
     inputFour.style.color="#FFFFFF"
     inputFour.style.backgroundColor="#000000"
     audio.play();
 }else if(circle.hasAttribute("offtoggle") === !true){
   circle.setAttribute("offtoggle", "")
   circle.style.backgroundColor="yellow"
   nav.classList.remove("nav_section_style")
   calculator_Body.style.backgroundColor="whiteSmoke"
   calculator_Body.style.color="#000000"
   inputOne.style.color="#000000"
   inputOne.style.backgroundColor="#FFFFFF"
   inputTwo.style.color="#000000"
   inputTwo.style.backgroundColor="#FFFFFF"
   selectbtn.style.color="#000000"
   selectbtn.style.backgroundColor="#FFFFFF"
   inputFour.style.color="#000000"
   inputFour.style.backgroundColor="#FFFFFF"
   audio.play();
 }
 }
 circle_container.addEventListener("click", toggle)
