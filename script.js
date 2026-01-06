const PASSWORDS=["KEY=19192810932","KEY=922389231","KEY=1268869712","KEY=9223678877","KEY=2026","KEY=SALAM120"]

const main=document.getElementById("main")
const loader=document.getElementById("loader")
const lock=document.getElementById("lock")
const site=document.getElementById("site")
const input=document.getElementById("pass")
const msg=document.getElementById("msg")

setTimeout(()=>{
  loader.style.display="none"
  lock.style.display="flex"
  setTimeout(()=>input.focus(),100)
},1500)

let panicURL = localStorage.getItem("panicURL") || "https://classroom.google.com"
let panicKey = localStorage.getItem("panicKey") || "Escape"

// -------------------- PASSWORD CHECK --------------------
function check(){
  if(!PASSWORDS.includes(input.value)){
    msg.textContent="Wrong password"
    return
  }

  // Open about:blank tab and load the site
  const win = window.open("about:blank", "_blank")
  if(!win){
    msg.textContent = "Allow popups"
    return
  }

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>XAMAS PROXY V2.014</title>
    <link rel="icon" href="https://companieslogo.com/img/orig/PWSC-358b9060.png">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    ${site.outerHTML}
    <script src="script.js"><\/script>
    <script>
      document.getElementById("site").style.display="block"
      home()
    <\/script>
  </body>
  </html>
  `

  win.document.open()
  win.document.write(html)
  win.document.close()

  // Close original tab automatically
  setTimeout(()=>{
    window.open("","_self")
    window.close()
  },300)
}

// -------------------- GLOBAL SET --------------------
function set(html){
  main.innerHTML = html
  document.querySelectorAll(".snow").forEach(e=>e.remove())
}

// -------------------- SNOW --------------------
function createSnow(){
  for(let i=0;i<50;i++){
    const s=document.createElement("div")
    s.className="snow"
    s.style.left = Math.random()*100+"vw"
    const size = Math.random()*4+2
    s.style.width = size+"px"
    s.style.height = size+"px"
    s.style.animationDuration = Math.random()*6+4+"s"
    document.body.appendChild(s)
  }
}

// -------------------- PAGES --------------------
function home(){
  set(`<div class="grid type">🎮 Game Page</div>`)
  createSnow()
}

function about(){
  set(`
  <div class="about-card">
    <h2 class="type">This site is for learning & focus.</h2>

    <p class="about-text type">
      This project helps students learn, research,
      and stay focused on educational content.
    </p>

    <p class="about-warning type">
      ⚠ If used without learning purposes,
      access may be blocked.
    </p>

    <p class="about-text type" style="margin-top:30px">
      Made by <b>Tamim / Xama</b>
    </p>
  </div>
  `)
  createSnow()
}

function search(){
  set(`<iframe src="https://815moniquelane.cfd" style="width:80%;height:90%;border:none;border-radius:14px;box-shadow:0 0 25px cyan"></iframe>`)
}

function ai(){
  set(`<iframe src="https://815moniquelane.cfd/algebra.html" style="width:60%;height:90%;border:none;border-radius:14px;box-shadow:0 0 25px cyan"></iframe>`)
}

// -------------------- SETTINGS / PANIC --------------------
function settings(){
  set(`
  <div class="settings-card">
    <h2 class="type">Panic Settings</h2>

    <label>Panic Website</label>
    <input id="panicURL" value="${panicURL}">

    <label>Panic Key</label>
    <input id="panicKey" value="${panicKey}">

    <button onclick="saveSettings()">Save</button>
  </div>
  `)
}

function saveSettings(){
  panicURL = document.getElementById("panicURL").value || panicURL
  panicKey = document.getElementById("panicKey").value || panicKey
  localStorage.setItem("panicURL", panicURL)
  localStorage.setItem("panicKey", panicKey)
  alert("Saved")
}

// -------------------- KEY LISTENER --------------------
input.addEventListener("keydown", e=>{
  if(e.key==="Enter") check()
})

document.addEventListener("keydown", e=>{
  if(e.key === panicKey){
    window.location.replace(panicURL)
  }
})
