const button = document.querySelector('#button-send');
const sms = document.querySelector('#input-message');
const output = document.querySelector('.output');
const day = new Date();
const hr = day.getHours();
const mn = day.getMinutes();
const both = hr + ":" + mn;

    

button.onclick = ()=>{
    const hElement = document.createElement('h1');
    const pElement = document.createElement('div');
    const tElement = document.createElement('p');
    hElement.textContent = "Me";
    hElement.style.fontSize = "20px"
    pElement.textContent = sms.value;
    pElement.style.fontSize = "18px"
    tElement.textContent = both;
    tElement.style.fontSize = "14px"
    output.appendChild(hElement);
    output.appendChild(pElement);
    output.appendChild(tElement);
     
    localStorage.setItem("Name",hElement);
    localStorage.setItem("Message", pElement)

};

const asideXButton = document.querySelector('.btn-close');
const asideInput = document.querySelector('.aside__input');
asideXButton.onclick = ()=>{
    asideInput.value= null;
};


const asideCenter = document.querySelector('.aside-center')
const asideButton = document.querySelector('.aside-button');
const component_1 = document.querySelector('.component_1');
const component_2 = document.querySelector('.component_2');
const component_3 = document.querySelector('.component_3');
const component_4 = document.querySelector('.component_4');
const component_5 = document.querySelector('.component_5');
const component_6 = document.querySelector('.component_6');
const component_7 = document.querySelector('.component_7');
const component_8 = document.querySelector('.component_8');
const Xato = document.createElement('p');
Xato.textContent = "No matching"




asideButton.onclick = ()=>{
    if(asideInput.value == "Telegram"){
        asideCenter.removeChild(component_2);
        asideCenter.removeChild(component_3);
        asideCenter.removeChild(component_4);
        asideCenter.removeChild(component_5);
        asideCenter.removeChild(component_6);
        asideCenter.removeChild(component_7);
        asideCenter.removeChild(component_8);
        asideCenter.style.height = "500px";
    }else if(asideInput.value == "Instagram"){
        asideCenter.removeChild(component_1);
        asideCenter.removeChild(component_3);
        asideCenter.removeChild(component_4);
        asideCenter.removeChild(component_5);
        asideCenter.removeChild(component_6);
        asideCenter.removeChild(component_7);
        asideCenter.removeChild(component_8);
        asideCenter.style.height = "500px";
    }else if(asideInput.value=="Facebook"){
        asideCenter.removeChild(component_1);
        asideCenter.removeChild(component_2);
        asideCenter.removeChild(component_4);
        asideCenter.removeChild(component_5);
        asideCenter.removeChild(component_6);
        asideCenter.removeChild(component_7);
        asideCenter.removeChild(component_8);
        asideCenter.style.height = "500px";
    } else if(asideInput.value =="Youtube"){
        asideCenter.removeChild(component_1);
        asideCenter.removeChild(component_2);
        asideCenter.removeChild(component_3);
        asideCenter.removeChild(component_5);
        asideCenter.removeChild(component_6);
        asideCenter.removeChild(component_7);
        asideCenter.removeChild(component_8);
        asideCenter.style.height = "500px";
    }else if(asideInput.value=="Tiktok"){
        asideCenter.removeChild(component_1);
        asideCenter.removeChild(component_2);
        asideCenter.removeChild(component_3);
        asideCenter.removeChild(component_4);
        asideCenter.removeChild(component_6);
        asideCenter.removeChild(component_7);
        asideCenter.removeChild(component_8);
        asideCenter.style.height = "500px";
    }else if(asideInput.value=="Apple"){
        asideCenter.removeChild(component_1);
        asideCenter.removeChild(component_2);
        asideCenter.removeChild(component_3);
        asideCenter.removeChild(component_4);
        asideCenter.removeChild(component_5);
        asideCenter.removeChild(component_7);
        asideCenter.removeChild(component_8);
        asideCenter.style.height = "500px";
    }else if(asideInput.value =="Twitter"){
        asideCenter.removeChild(component_1);
        asideCenter.removeChild(component_2);
        asideCenter.removeChild(component_3);
        asideCenter.removeChild(component_4);
        asideCenter.removeChild(component_5);
        asideCenter.removeChild(component_6);
        asideCenter.removeChild(component_8);
        asideCenter.style.height = "500px";
    }else if(asideInput.value == "HP"){
        asideCenter.removeChild(component_1);
        asideCenter.removeChild(component_2);
        asideCenter.removeChild(component_3);
        asideCenter.removeChild(component_4);
        asideCenter.removeChild(component_5);
        asideCenter.removeChild(component_6);
        asideCenter.removeChild(component_7);
        asideCenter.style.height = "500px";
    }else if (asideInput.value == null){
        asideCenter.appendChild(component_1);
        asideCenter.appendChild(component_2);
        asideCenter.appendChild(component_3);
        asideCenter.appendChild(component_4);
        asideCenter.appendChild(component_5);
        asideCenter.appendChild(component_6);
        asideCenter.appendChild(component_7);
        asideCenter.appendChild(component_8);
        asideCenter.style.height = "500px";
    }
    else {
        asideCenter.insertBefore(Xato, component_1)
        asideCenter.appendChild(component_1);
        asideCenter.appendChild(component_2);
        asideCenter.appendChild(component_3);
        asideCenter.appendChild(component_4);
        asideCenter.appendChild(component_5);
        asideCenter.appendChild(component_6);
        asideCenter.appendChild(component_7);
        asideCenter.appendChild(component_8);
        asideCenter.style.height = "500px";
    }
}

const telegram = document.querySelector('.telegram');
const instagram = document.querySelector('.instagram');
const facebook = document.querySelector('.facebook');
const youtube = document.querySelector('.youtube');
const tiktok = document.querySelector('.tiktok');
const apple = document.querySelector('.apple');
const twitter = document.querySelector('.twitter');
const hp = document.querySelector('.hp');

component_1.onclick = () =>{
    component_1.classList.add("style1")
    component_2.classList.remove("style1")
    component_3.classList.remove("style1")
    component_4.classList.remove("style1")
    component_5.classList.remove("style1")
    component_6.classList.remove("style1")
    component_7.classList.remove("style1")
    component_8.classList.remove("style1")
    telegram.classList.add("style2");
    telegram.classList.remove("style3");
    instagram.classList.remove("style2");
    instagram.classList.add("style3");
    facebook.classList.remove("style2");
    facebook.classList.add("style3");
    youtube.classList.remove("style2");
    youtube.classList.add("style3");
    tiktok.classList.remove("style2");
    tiktok.classList.add("style3");
    apple.classList.remove("style2");
    apple.classList.add("style3");
    twitter.classList.remove("style2");
    twitter.classList.add("style3");
    hp.classList.remove("style2");
    hp.classList.add("style3");
}

component_2.onclick = () =>{
    component_2.classList.add("style1");
    component_1.classList.remove("style1");
    component_3.classList.remove("style1");
    component_4.classList.remove("style1");
    component_5.classList.remove("style1");
    component_6.classList.remove("style1");
    component_7.classList.remove("style1");
    component_8.classList.remove("style1");
    instagram.classList.add("style2");
    instagram.classList.remove("style3");
    telegram.classList.remove("style2");
    telegram.classList.add("style3");
    facebook.classList.remove("style2");
    facebook.classList.add("style3");
    youtube.classList.remove("style2");
    youtube.classList.add("style3");
    tiktok.classList.remove("style2");
    tiktok.classList.add("style3");
    apple.classList.remove("style2");
    apple.classList.add("style3");
    twitter.classList.remove("style2");
    twitter.classList.add("style3");
    hp.classList.remove("style2");
    hp.classList.add("style3");
    
}

component_3.onclick = () =>{
    component_3.classList.add("style1")
    component_2.classList.remove("style1")
    component_1.classList.remove("style1")
    component_4.classList.remove("style1")
    component_5.classList.remove("style1")
    component_6.classList.remove("style1")
    component_7.classList.remove("style1")
    component_8.classList.remove("style1")
    facebook.classList.add("style2");
    facebook.classList.remove("style3");
    telegram.classList.remove("style2");
    telegram.classList.add("style3");
    instagram.classList.remove("style2");
    instagram.classList.add("style3");
    youtube.classList.remove("style2");
    youtube.classList.add("style3");
    tiktok.classList.remove("style2");
    tiktok.classList.add("style3");
    apple.classList.remove("style2");
    apple.classList.add("style3");
    twitter.classList.remove("style2");
    twitter.classList.add("style3");
    hp.classList.remove("style2");
    hp.classList.add("style3");
}

component_4.onclick = () =>{
    component_4.classList.add("style1")
    component_2.classList.remove("style1")
    component_1.classList.remove("style1")
    component_3.classList.remove("style1")
    component_5.classList.remove("style1")
    component_6.classList.remove("style1")
    component_7.classList.remove("style1")
    component_8.classList.remove("style1")
    youtube.classList.add("style2");
    youtube.classList.remove("style3");
    telegram.classList.remove("style2");
    telegram.classList.add("style3");
    facebook.classList.remove("style2");
    facebook.classList.add("style3");
    instagram.classList.remove("style2");
    instagram.classList.add("style3");
    tiktok.classList.remove("style2");
    tiktok.classList.add("style3");
    apple.classList.remove("style2");
    apple.classList.add("style3");
    twitter.classList.remove("style2");
    twitter.classList.add("style3");
    hp.classList.remove("style2");
    hp.classList.add("style3");
}

component_5.onclick = () =>{
    component_5.classList.add("style1")
    component_2.classList.remove("style1")
    component_1.classList.remove("style1")
    component_4.classList.remove("style1")
    component_3.classList.remove("style1")
    component_6.classList.remove("style1")
    component_7.classList.remove("style1")
    component_8.classList.remove("style1")
    tiktok.classList.add("style2");
    tiktok.classList.remove("style3");
    telegram.classList.remove("style2");
    telegram.classList.add("style3");
    facebook.classList.remove("style2");
    facebook.classList.add("style3");
    youtube.classList.remove("style2");
    youtube.classList.add("style3");
    instagram.classList.remove("style2");
    instagram.classList.add("style3");
    apple.classList.remove("style2");
    apple.classList.add("style3");
    twitter.classList.remove("style2");
    twitter.classList.add("style3");
    hp.classList.remove("style2");
    hp.classList.add("style3");
}

component_6.onclick = () =>{
    component_6.classList.add("style1")
    component_2.classList.remove("style1")
    component_1.classList.remove("style1")
    component_4.classList.remove("style1")
    component_5.classList.remove("style1")
    component_3.classList.remove("style1")
    component_7.classList.remove("style1")
    component_8.classList.remove("style1")
    apple.classList.add("style2");
    apple.classList.remove("style3");
    telegram.classList.remove("style2");
    telegram.classList.add("style3");
    facebook.classList.remove("style2");
    facebook.classList.add("style3");
    youtube.classList.remove("style2");
    youtube.classList.add("style3");
    tiktok.classList.remove("style2");
    tiktok.classList.add("style3");
    instagram.classList.remove("style2");
    instagram.classList.add("style3");
    twitter.classList.remove("style2");
    twitter.classList.add("style3");
    hp.classList.remove("style2");
    hp.classList.add("style3");
}

component_7.onclick = () =>{
    component_7.classList.add("style1")
    component_2.classList.remove("style1")
    component_1.classList.remove("style1")
    component_4.classList.remove("style1")
    component_5.classList.remove("style1")
    component_6.classList.remove("style1")
    component_3.classList.remove("style1")
    component_8.classList.remove("style1")
    twitter.classList.add("style2");
    twitter.classList.remove("style3");
    telegram.classList.remove("style2");
    telegram.classList.add("style3");
    facebook.classList.remove("style2");
    facebook.classList.add("style3");
    youtube.classList.remove("style2");
    youtube.classList.add("style3");
    tiktok.classList.remove("style2");
    tiktok.classList.add("style3");
    apple.classList.remove("style2");
    apple.classList.add("style3");
    instagram.classList.remove("style2");
    instagram.classList.add("style3");
    hp.classList.remove("style2");
    hp.classList.add("style3");
}

component_8.onclick = () =>{
    component_8.classList.add("style1")
    component_2.classList.remove("style1")
    component_1.classList.remove("style1")
    component_4.classList.remove("style1")
    component_5.classList.remove("style1")
    component_6.classList.remove("style1")
    component_7.classList.remove("style1")
    component_3.classList.remove("style1")
    hp.classList.add("style2");
    hp.classList.remove("style3");
    telegram.classList.remove("style2");
    telegram.classList.add("style3");
    facebook.classList.remove("style2");
    facebook.classList.add("style3");
    youtube.classList.remove("style2");
    youtube.classList.add("style3");
    tiktok.classList.remove("style2");
    tiktok.classList.add("style3");
    apple.classList.remove("style2");
    apple.classList.add("style3");
    twitter.classList.remove("style2");
    twitter.classList.add("style3");
    instagram.classList.remove("style2");
    instagram.classList.add("style3");
}








const instagramButton = document.querySelector('#instagram-button-send');
const instagramInput = document.querySelector('#instagram-input-message');
const instagramOutput = document.querySelector('.instagram-output');
const instagramDay = new Date();
const instagramHr = day.getHours();
const instagramMn = day.getMinutes();
const instagramBoth = instagramHr + ":" + instagramMn;

    

instagramButton.onclick = ()=>{

    const instagramHElement  = document.createElement('h1');
    const instagramPElement = document.createElement('div');
    const instagramTElement = document.createElement('p');
    instagramHElement.textContent = "Me";
    instagramHElement.style.fontSize = "20px"
    instagramPElement.textContent = instagramInput.value;
    instagramPElement.style.fontSize = "18px"
    instagramTElement.textContent = instagramBoth;
    instagramTElement.style.fontSize = "14px"
    instagramOutput.appendChild(instagramHElement );
    instagramOutput.appendChild(instagramPElement);
    instagramOutput.appendChild(instagramTElement);
     
    localStorage.setItem("Name",instagramHElement );
    localStorage.setItem("Message", instagramPElement)

};

const facebookButton = document.querySelector('#facebook-button-send');
const facebookInput = document.querySelector('#facebook-input-message');
const facebookOutput = document.querySelector('.facebook-output');
const facebookDay = new Date();
const facebookHr = day.getHours();
const facebookMn = day.getMinutes();
const facebookBoth = facebookHr + ":" + facebookMn;

    

facebookButton.onclick = ()=>{

    const facebookHElement  = document.createElement('h1');
    const facebookPElement = document.createElement('div');
    const facebookTElement = document.createElement('p');
    facebookHElement.textContent = "Me";
    facebookHElement.style.fontSize = "20px"
    facebookPElement.textContent = facebookInput.value;
    facebookPElement.style.fontSize = "18px"
    facebookTElement.textContent = facebookBoth;
    facebookTElement.style.fontSize = "14px"
    facebookOutput.appendChild(facebookHElement );
    facebookOutput.appendChild(facebookPElement);
    facebookOutput.appendChild(facebookTElement);
     
    localStorage.setItem("Name",facebookHElement );
    localStorage.setItem("Message", facebookPElement)

};

const youtubeButton = document.querySelector('#youtube-button-send');
const youtubeInput = document.querySelector('#youtube-input-message');
const youtubeOutput = document.querySelector('.youtube-output');
const youtubeDay = new Date();
const youtubeHr = day.getHours();
const youtubeMn = day.getMinutes();
const youtubeBoth = youtubeHr + ":" + youtubeMn;

    

youtubeButton.onclick = ()=>{

    const youtubeHElement  = document.createElement('h1');
    const youtubePElement = document.createElement('div');
    const youtubeTElement = document.createElement('p');
    youtubeHElement.textContent = "Me";
    youtubeHElement.style.fontSize = "20px"
    youtubePElement.textContent = youtubeInput.value;
    youtubePElement.style.fontSize = "18px"
    youtubeTElement.textContent = youtubeBoth;
    youtubeTElement.style.fontSize = "14px"
    youtubeOutput.appendChild(youtubeHElement );
    youtubeOutput.appendChild(youtubePElement);
    youtubeOutput.appendChild(youtubeTElement);
     
    localStorage.setItem("Name",youtubeHElement );
    localStorage.setItem("Message", youtubePElement)

};

const tiktokButton = document.querySelector('#tiktok-button-send');
const tiktokInput = document.querySelector('#tiktok-input-message');
const tiktokOutput = document.querySelector('.tiktok-output');
const tiktokDay = new Date();
const tiktokHr = day.getHours();
const tiktokMn = day.getMinutes();
const tiktokBoth = tiktokHr + ":" + tiktokMn;

    

tiktokButton.onclick = ()=>{

    const tiktokHElement  = document.createElement('h1');
    const tiktokPElement = document.createElement('div');
    const tiktokTElement = document.createElement('p');
    tiktokHElement.textContent = "Me";
    tiktokHElement.style.fontSize = "20px"
    tiktokPElement.textContent = tiktokInput.value;
    tiktokPElement.style.fontSize = "18px"
    tiktokTElement.textContent = tiktokBoth;
    tiktokTElement.style.fontSize = "14px"
    tiktokOutput.appendChild(tiktokHElement );
    tiktokOutput.appendChild(tiktokPElement);
    tiktokOutput.appendChild(tiktokTElement);
     
    localStorage.setItem("Name",tiktokHElement );
    localStorage.setItem("Message", tiktokPElement)

};

const appleButton = document.querySelector('#apple-button-send');
const appleInput = document.querySelector('#apple-input-message');
const appleOutput = document.querySelector('.apple-output');
const appleDay = new Date();
const appleHr = day.getHours();
const appleMn = day.getMinutes();
const appleBoth = appleHr + ":" + appleMn;

    

appleButton.onclick = ()=>{

    const appleHElement  = document.createElement('h1');
    const applePElement = document.createElement('div');
    const appleTElement = document.createElement('p');
    appleHElement.textContent = "Me";
    appleHElement.style.fontSize = "20px"
    applePElement.textContent = appleInput.value;
    applePElement.style.fontSize = "18px"
    appleTElement.textContent = appleBoth;
    appleTElement.style.fontSize = "14px"
    appleOutput.appendChild(appleHElement );
    appleOutput.appendChild(applePElement);
    appleOutput.appendChild(appleTElement);
     
    localStorage.setItem("Name",appleHElement );
    localStorage.setItem("Message", applePElement)

};


const twitterButton = document.querySelector('#twitter-button-send');
const twitterInput = document.querySelector('#twitter-input-message');
const twitterOutput = document.querySelector('.twitter-output');
const twitterDay = new Date();
const twitterHr = day.getHours();
const twitterMn = day.getMinutes();
const twitterBoth = twitterHr + ":" + twitterMn;

    

twitterButton.onclick = ()=>{

    const twitterHElement  = document.createElement('h1');
    const twitterPElement = document.createElement('div');
    const twitterTElement = document.createElement('p');
    twitterHElement.textContent = "Me";
    twitterHElement.style.fontSize = "20px"
    twitterPElement.textContent = twitterInput.value;
    twitterPElement.style.fontSize = "18px"
    twitterTElement.textContent = twitterBoth;
    twitterTElement.style.fontSize = "14px"
    twitterOutput.appendChild(twitterHElement );
    twitterOutput.appendChild(twitterPElement);
    twitterOutput.appendChild(twitterTElement);
     
    localStorage.setItem("Name",twitterHElement );
    localStorage.setItem("Message", twitterPElement)

};

const hpButton = document.querySelector('#hp-button-send');
const hpInput = document.querySelector('#hp-input-message');
const hpOutput = document.querySelector('.hp-output');
const hpDay = new Date();
const hpHr = day.getHours();
const hpMn = day.getMinutes();
const hpBoth = hpHr + ":" + hpMn;

    

hpButton.onclick = ()=>{

    const hpHElement  = document.createElement('h1');
    const hpPElement = document.createElement('div');
    const hpTElement = document.createElement('p');
    hpHElement.textContent = "Me";
    hpHElement.style.fontSize = "20px"
    hpPElement.textContent = hpInput.value;
    hpPElement.style.fontSize = "18px"
    hpTElement.textContent = hpBoth;
    hpTElement.style.fontSize = "14px"
    hpOutput.appendChild(hpHElement );
    hpOutput.appendChild(hpPElement);
    hpOutput.appendChild(hpTElement);
     
    localStorage.setItem("Name",hpHElement );
    localStorage.setItem("Message", hpPElement)

};


const infoButton = document.querySelector('.component-info')
const main = document.querySelector('.main')


infoButton.onclick = ()=>{
    main.classList.add("main2")
}

















console.log(localStorage);