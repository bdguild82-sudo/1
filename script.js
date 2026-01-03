const loading = document.getElementById("loadingScreen");
const lock = document.getElementById("lockScreen");
const header = document.getElementById("header");
const site = document.getElementById("site");
const main = document.getElementById("main");

window.onload = () => {
  setTimeout(() => {
    loading.classList.add("fadeOut");
    setTimeout(() => {
      loading.style.display = "none";
      lock.style.display = "flex";
      document.getElementById("passwordInput").focus();
    }, 1000);
  }, 2500);
};

/* PASSWORD SYSTEM */
const input = document.getElementById("passwordInput");
const btn = document.getElementById("passwordBtn");
const result = document.getElementById("passwordResult");
const tipsBox = document.getElementById("passwordTips");

const PASSWORD = "1";

const tips = [
  "♖♖Tucker get Off Chess♖♖",
  "🎆Happy New Year Bois🎆",
  "Obama Have Dihhh💔🥀",
  "Your In The Epstien File📁",
  "Indian Pajeet On Fire🔥"
];

let tipIndex = 0;

setInterval(() => {
  tipsBox.textContent = tips[tipIndex++ % tips.length];
  tipsBox.style.opacity = 1;
  setTimeout(() => tipsBox.style.opacity = 0, 2000);
}, 5000);

btn.onclick = checkPassword;
input.addEventListener("keydown", e => {
  if (e.key === "Enter") checkPassword();
});

function checkPassword(){
  if(input.value === PASSWORD){
    result.style.color = "#4da3ff";
    result.textContent = "Unlocked...";
    lock.style.display = "none";

    loading.style.display = "flex";
    loading.classList.remove("fadeOut");

    setTimeout(() => {
      loading.classList.add("fadeOut");
      setTimeout(() => {
        loading.style.display = "none";
        header.style.display = "flex";
        site.style.display = "flex";
        home();
      }, 1000);
    }, 1500);
  } else {
    result.style.color = "red";
    result.textContent = "Wrong Password";
  }
}

/* MAIN CONTENT */
function setMain(html){
  main.classList.remove("visible");
  setTimeout(() => {
    main.innerHTML = html;
    main.classList.add("visible");
  }, 50);
}

function home(){
  setMain(`
    <div class="game-grid">
      <img src="https://img.poki-cdn.com/cdn-cgi/image/q=78,width=314,height=314,fit=cover,f=auto/ec1d51ed9ca8ab3698524f7daba12744/drive-mad.png">
      <img src="https://img.poki-cdn.com/cdn-cgi/image/q=78,width=204,height=204,fit=cover,f=auto/b87616bb88c0e3cb4c150c59fdc767fa/hill-climb-racing-lite.png">
      <img src="https://img.poki-cdn.com/cdn-cgi/image/q=78,width=204,height=204,fit=cover,f=auto/5c613c3572ec23612e351745bc986579/blacktop-police-chase.png">
    </div>
  `);
}

function about(){
  setMain(`
    <div class="about-box">
      <h2>About</h2>
      <p>Educational Proxy Project</p>
      <p>By Xama</p>
    </div>
  `);
}

function searchPage(){
  setMain(`<iframe src="https://815moniquelane.cfd" style="width:80%;height:90%;border:none"></iframe>`);
}

function openAI(){
  setMain(`<iframe src="https://815moniquelane.cfd/algebra.html" style="width:60%;height:90%;border:none"></iframe>`);
}
