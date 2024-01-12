document.querySelectorAll("*").forEach((ele) => {
    ele.style.margin = "0";
    ele.style.padding = "0";
    ele.style.border = "0";
    ele.style.boxSizing = "border-box";
});

const body = document.querySelector("body");
body.style.width = "100vw";
body.style.height = "100vh";
body.style.overflowX = "hidden";
body.style.fontFamily = "Helvetica Neue,Helvetica,Arial,メイリオ,meiryo,ヒラギノ角ゴ pro w3,hiragino kaku gothic pro,sans-serif;";

const top_nav = document.createElement("div");
top_nav.style.position = "fixed";
top_nav.style.top = "0";
top_nav.style.left = "0";
top_nav.style.width = "100%";
top_nav.style.height = "50px";
top_nav.style.display = "grid";
top_nav.style.placeItems = "center";
top_nav.style.backgroundColor = "rgb(210,225,238)";
top_nav.textContent = "Free Shipping Worldwide";
top_nav.style.zIndex = "999";

body.appendChild(top_nav);

const nav = document.createElement("div");
nav.style.position = "fixed";
nav.style.top = "50px";
nav.style.left = "0";
nav.style.width = "100%";
nav.style.height = "80px";
nav.style.display = "flex";
nav.style.justifyContent = "center";
nav.style.alignItems = "center";
nav.style.zIndex = "999";
nav.style.backgroundColor = "rgb(255,247,216)";
nav.style.padding = "0px 24px";

body.appendChild(nav);

const nm = document.createElement("p");
nm.style.fontSize = "34px";
nm.style.fontWeight = "500";
nm.textContent = "BREW";
nm.style.letterSpacing = "1.5px";
nm.style.marginRight = "16px";

nav.appendChild(nm);

const links = ["Shop", "About", "Location & Hours"];

const ul = document.createElement("ul");
ul.style.listStyleType = "none";

nav.appendChild(ul);

for(let i=0; i<3; i++) {
    const li = document.createElement("li");
    li.className = "li";
    li.textContent = `${links[i]}`;
    li.style.margin = "0px 14px";
    li.style.float = "left";
    li.style.fontSize = "18px";
    li.style.color = "blue";

    ul.appendChild(li);
}

const login = document.createElement("div");
login.style.display = "flex";
login.style.marginLeft = "700px";

nav.appendChild(login);

const logo = document.createElement("span");
logo.style.fontSize = "18px";
logo.innerHTML = `<i class="fa-solid fa-user"></i>`;

login.appendChild(logo);

const link = document.createElement("a");
link.href = "#login";
link.style.fontSize = "20px";
link.style.textDecoration = "none";
link.style.color = "#000";
link.textContent = "Log in";
link.style.marginLeft = "16px";

login.appendChild(link);

const button = document.createElement("button");
button.style.marginLeft = "28px";
button.style.width = "135px";
button.style.height = "40px";
button.style.backgroundColor = "#000";
button.style.color = "#ffff";
button.style.border = "none";
button.style.cursor = "pointer";
button.style.fontSize = "16px";
button.textContent = "Order Online";

nav.appendChild(button);

const home = document.createElement("div");
home.style.width = "100%";
home.style.height = "85%";
home.style.background = "url('./media/bg.webp')";
home.style.padding = "150px 0px 0px 80px";

body.appendChild(home);

const h1 = document.createElement("h1");
h1.textContent = "FOR THE LOVE OF COFFEE";
h1.style.width = "45%";
h1.style.fontSize = "64px";
h1.style.color = "#ffff";
h1.style.letterSpacing = "1.5px";

home.appendChild(h1);

const btn = document.createElement("button");
btn.textContent = "Shop Blends";
btn.style.width = "240px";
btn.style.height = "65px";
btn.style.backgroundColor = "rgb(255,247,216)";
btn.style.fontSize = "24px";
btn.style.border = "none";
btn.style.color = "blue";
btn.style.float = "right";
btn.style.transform = "translate(-180px, 290px)";
btn.style.transition = "all 0.2s ease-out";

btn.addEventListener("mousemove", () => {
    btn.style.background = "transparent";
    btn.style.border = "1px solid #ffff";
    btn.style.color = "#ffff";
});

btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "rgb(255,247,216)";
    btn.style.border = "none";
    btn.style.color = "blue";
});

home.appendChild(btn);

const section = document.createElement("div");
section.style.width = "100%";
section.style.height = "auto";
section.style.backgroundColor = "rgb(255,252,242)";
section.style.padding = "54px 0px";
section.style.display = "grid";
section.style.placeItems = "center";

body.appendChild(section);

const text = document.createElement("div");
text.style.width = "45%";
text.textContent = "Globally sourced but locally brewed our flavorful, full-bodied roasts taste as good as they smell.";
text.style.fontSize = "38px";
text.style.fontWeight = "400px";
text.style.textAlign = "center";
text.style.lineHeight = "42px";
text.style.letterSpacing = "1.5px";

section.appendChild(text);

const grab = document.createElement("div");
grab.style.width = "100%";
grab.style.height = "100%";
grab.style.backgroundColor = "rgb(255,247,216)";
grab.style.display = "flex";
grab.style.flexDirection = "column";
grab.style.justifyContent = "center";
grab.style.alignItems = "center";

body.appendChild(grab);

const h2 = document.createElement("div");
h2.textContent = "GRAB IT ON THE GO";
h2.style.fontSize = "44px";
h2.style.fontWeight = "400";
h2.style.letterSpacing = "1.2px";

grab.appendChild(h2);

const container = document.createElement("div");
container.style.width = "90%";
container.style.height = "520px";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.marginTop = "54px";

grab.appendChild(container);

for(let i=0; i<3; i++) {
    const div = document.createElement("div");
    div.className = "div";
    div.style.width = "32%";
    div.style.height = "100%";
    div.style.margin = "0px 14px";

    div.innerHTML = `<div style="width:100%;height:380px;background:url('./media/coffee.webp');background-size:cover;background-position:center;background-repeat:no-repeat;"></div>
    <p style="font-size:24px;font-weight:400;margin:16px 0px;">ESPRESSO</p>
    <p style="font-size:18px;font-weight:200;margin:16px 0px;">Describe your image here. Use catchy text to tell people the story behind the photo.
    Go to “Manage Media” to add your content.</p>`;

    container.appendChild(div);
}

const template = document.createElement("div");
template.style.width = "100%";
template.style.height = "85%";
template.style.background = "url('./media/template.webp')";
template.style.backgroundSize = "cover";
template.style.repeat = "no-repeat";
template.style.backgroundPosition = "center";

body.appendChild(template);

const footer = document.createElement("div");
footer.style.width = "100%";
footer.style.height = "55%";
footer.style.backgroundColor = "rgb(210,225,238)";
footer.style.display = "flex";
footer.style.flexDirection = "column";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";

body.appendChild(footer);

const contain = document.createElement("div");
contain.style.display = "flex";

footer.appendChild(contain);

const left = document.createElement("div");
left.style.marginRight = "200px";
left.innerHTML = `<ul style="list-style-type:none;">
<li style="font-size:32px;font-weight:500;margin:24px 0px;">COME VISIT US</li>
<li style="font-size:18px;font-weight:400;margin:12px 0px;">500 TERRY FRANCINE STREET</li>
<li style="font-size:18px;font-weight:400;margin:12px 0px;">SAN FRANCISCO, CA 94158</li>
<li style="font-size:18px;font-weight:400;margin:12px 0px;margin-top:28px;">MON - FRI: 8AM - 8PM</li>
<li style="font-size:18px;font-weight:400;margin:12px 0px;">MON - FRI: 8AM - 8PM</li>
<li style="font-size:18px;font-weight:400;margin:12px 0px;">MON - FRI: 8AM - 8PM</li>
</ul>`;

contain.appendChild(left);

const right = document.createElement("div");
right.style.marginLeft = "200px";
right.innerHTML = `<ul style="list-style-type:none;">
<li style="font-size:32px;font-weight:500;margin:24px 0px;">TALK TO US</li>
<li style="font-size:18px;font-weight:400;margin:12px 0px;">INFO@MYSITE.COM</li>
<li style="font-size:18px;font-weight:400;margin:12px 0px;">123 456 6780</li>
</ul>`;

contain.appendChild(right);

const input = document.createElement("div");
input.style.marginTop = "50px";
input.style.marginLeft = "35px";
input.innerHTML = `<p style="font-size:16px;font-weight:400;">Subsribe to our Newsletter*</p>
<div style="display:flex;">
<input type="email" placeholder="Email Address" style="width:280px;height:40px;padding-left:12px;border:none;border-bottom:2px solid brown;background:transparent;">
<button style="width:140px;height:40px;background-color:#000;color:#ffff;outline:none;border:none;cursor:pointer;transform:translateY(3px);margin-left:12px;">subscribe</button>
</div>`;

right.appendChild(input);

let email = document.querySelector('input[type="email"]');

email.addEventListener("focus", () => {
    email.style.outline = 'none';
});

const footer_nav = document.createElement("div");
footer_nav.style.marginTop = "32px";

footer.appendChild(footer_nav);

const ulEle = document.createElement("ul");
ulEle.style.listStyleType = "none";

footer_nav.appendChild(ulEle);

const navlinks = ["TERMS & CONDITIONS", "PRIVACY POLICY", "SHIPPING POLICY", "COOKIE POLICY", "REFUND POLICY"];

for(let i=0; i<navlinks.length; i++) {
    const liEle = document.createElement("li");
    liEle.className = "liEle";
    liEle.style.float = "left";
    liEle.style.margin = "0px 12px";
    liEle.style.fontSize = "18px";
    liEle.style.letterSpacing = "1.2px";
    liEle.textContent = navlinks[i];

    ulEle.appendChild(liEle);
}

function checkScreen() {
    const screenWidth = window.innerWidth;
    const mobileBreakPoint = 768;

    if(screenWidth < mobileBreakPoint) {
        console.log("mobile screen");

        // top_nav.style.display = "none";
        // nav.style.display = "none";

        top_nav.style.height = "40px";
        top_nav.style.fontSize = "14px";
        nav.style.justifyContent = "flex-start";
        nav.style.top = "40px";
        nav.style.height = "60px";
        nm.style.fontSize = "20px";
        // ul.style.display = "none";
        nav.style.padding = "0px 14px";
        nm.style.marginRight = "8px";
        login.style.display = "none";
        button.style.display = "none";

        document.querySelectorAll(".li").forEach((ele) => {
            ele.style.margin = "0px 6px";
        });

        home.style.padding = "0px";
        home.style.display = "flex";
        home.style.flexDirection = "column";
        home.style.justifyContent = "center";
        home.style.alignItems = "center";
        home.style.height = "100%";
        h1.style.width = "64%";
        h1.style.lineHeight = "54px";
        h1.style.fontSize = "54px";
        btn.style.transform = "translate(0px)";
        btn.style.margin = "100px 20px 0px 0px";
        btn.style.width = "180px";
        btn.style.height = "55px";
        btn.style.fontSize = "20px";
        text.style.width = "70%";
        text.style.fontSize = "24px";
        text.style.lineHeight = "38px";
        h2.style.fontSize = "34px";
        grab.style.height = "auto";
        grab.style.padding = "34px 0px";
        container.style.flexDirection = "column";
        container.style.height = "auto";

        document.querySelectorAll(".div").forEach((div) => {
            div.style.width = "100%";
            div.style.height = "33%"; 
            div.style.margin = "14px";       
        });

        footer.style.height = "auto";
        footer.style.padding = "34px 0px";
        contain.style.flexDirection = "column";
        contain.style.justifyContent = "center";
        contain.style.alignItems = "center";
        left.style.marginRight = "0";
        left.style.width = "100%";
        left.innerHTML = `<ul style="list-style-type:none;transform:translateX(0px);">
        <li style="font-size:32px;font-weight:500;margin:24px 0px;">COME VISIT US</li>
        <li style="font-size:18px;font-weight:400;margin:12px 0px;">500 TERRY FRANCINE STREET</li>
        <li style="font-size:18px;font-weight:400;margin:12px 0px;">SAN FRANCISCO, CA 94158</li>
        <li style="font-size:18px;font-weight:400;margin:12px 0px;margin-top:28px;">MON - FRI: 8AM - 8PM</li>
        <li style="font-size:18px;font-weight:400;margin:12px 0px;">MON - FRI: 8AM - 8PM</li>
        <li style="font-size:18px;font-weight:400;margin:12px 0px;">MON - FRI: 8AM - 8PM</li>
        </ul>`;
        right.style.width = "100%";
        right.style.marginLeft = "0px";
        input.innerHTML = `<p style="font-size:16px;font-weight:400;">Subsribe to our Newsletter*</p>
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <input type="email" placeholder="Email Address" style="width:280px;height:40px;padding-left:12px;border:none;border-bottom:2px solid brown;background:transparent;">
        <button style="width:140px;height:40px;background-color:#000;color:#ffff;outline:none;border:none;cursor:pointer;transform:translateY(3px);margin:20px 0px;">subscribe</button>
        </div>`;

        document.querySelectorAll(".liEle").forEach((Ele) => {
            Ele.style.fontSize = "14px";
            Ele.style.margin = "12px";
        });
        left.style.textAlign = "center";
        left.style.transform = "translateX(-25px)";
        right.style.textAlign = "center";
        right.style.transform = "translateX(-25px)";
    } else {
        console.log("desktop/laptop screen");
    }
}
checkScreen();

