// function sizeOfCallToAction(){
//     tab=document.getElementsByClassName("callToAction")
//     for(let i=0;i<tab.length;i++){
//         if(tab[i].style.width<12rem){

//         }
//     }
// }

function rotateOnHover(number){
    let tab=document.getElementsByClassName("callToActionArrow")
    tab[number].style.rotate="45deg";
    tab[number].style.scale="1.1";    
}

function rotateOnLeave(number){
    let tab=document.getElementsByClassName("callToActionArrow")
    tab[number].style.rotate="0deg"
    tab[number].style.scale="1";
}

function rotateOnHoverPlus(){
    let tab=document.getElementById("callToActionPlus")
    tab.style.rotate="90deg";
    tab.style.scale="1.1";    
}

function rotateOnLeavePlus(){
    let tab=document.getElementById("callToActionPlus")
    tab.style.rotate="0deg"
    tab.style.scale="1";
}

function checkOrNot(number){
    let check = document.getElementsByClassName("isCheck")
    let checkh3 = document.getElementsByClassName("checkOrNotH3")
    for(let i=0;i<number;i++){
        check[i].style.backgroundColor="var(--dayModeProjetFiltreIsCheck)"
        checkh3[i].style.color="var(--dayModeFiltreButtonInactive)"
    }
    for(let i=number;i<7;i++){
        check[i].style.backgroundColor="var(--dayModeProjetFiltreIsCheck)"
        checkh3[i].style.color="var(--dayModeFiltreButtonInactive)"
    }
    checkh3[number].style.color="var(--dayModeBlack)"

    // Tout les filtres
    let allProjects=document.getElementsByClassName("project")

    let projectAudiovisual=document.getElementsByClassName("project-audiovisual")

    let projectDev=document.getElementsByClassName("project-dev")

    let projectUiUxDesign=document.getElementsByClassName("project-uiUxDesign")

    let project3D=document.getElementsByClassName("project-3D")

    let projectDesign=document.getElementsByClassName("project-design")
    
    let projectCom=document.getElementsByClassName("project-com")

    // application des filtres
    switch(number){
        // Tout
        case 0:
            for(let i=0;i<allProjects.length;i++){
                allProjects[i].style.display="flex"
            }
            check[number].style.backgroundColor="var(--dayModeBlack)"
            break
        // UI&UX Design
        case 1:
            for(let i=0;i<projectAudiovisual.length;i++){
                projectAudiovisual[i].style.display="none"
            }
            for(let i=0;i<project3D.length;i++){
                project3D[i].style.display="none"
            }
            for(let i=0;i<projectCom.length;i++){
                projectCom[i].style.display="none"
            }
            for(let i=0;i<projectDesign.length;i++){
                projectDesign[i].style.display="none"
            }
            for(let i=0;i<projectDev.length;i++){
                projectDev[i].style.display="none"
            }
            for(let i=0;i<projectUiUxDesign.length;i++){
                projectUiUxDesign[i].style.display="flex"
            }
            check[number].style.backgroundColor="red"
            break
        case 2:
            for(let i=0;i<projectAudiovisual.length;i++){
                projectAudiovisual[i].style.display="none"
            }
            for(let i=0;i<project3D.length;i++){
                project3D[i].style.display="none"
            }
            for(let i=0;i<projectCom.length;i++){
                projectCom[i].style.display="none"
            }
            for(let i=0;i<projectDesign.length;i++){
                projectDesign[i].style.display="none"
            }
            for(let i=0;i<projectUiUxDesign.length;i++){
                projectUiUxDesign[i].style.display="none"
            }
            for(let i=0;i<projectDev.length;i++){
                projectDev[i].style.display="flex"
            }
            check[number].style.backgroundColor="blue"
            break
        case 3:
            for(let i=0;i<projectAudiovisual.length;i++){
                projectAudiovisual[i].style.display="none"
            }
            for(let i=0;i<projectCom.length;i++){
                projectCom[i].style.display="none"
            }
            for(let i=0;i<projectDesign.length;i++){
                projectDesign[i].style.display="none"
            }
            for(let i=0;i<projectDev.length;i++){
                projectDev[i].style.display="none"
            }
            for(let i=0;i<projectUiUxDesign.length;i++){
                projectUiUxDesign[i].style.display="none"
            }
            for(let i=0;i<project3D.length;i++){
                project3D[i].style.display="flex"
            }
            check[number].style.backgroundColor="green"
            break
        case 4:
            for(let i=0;i<projectAudiovisual.length;i++){
                projectAudiovisual[i].style.display="none"
            }
            for(let i=0;i<project3D.length;i++){
                project3D[i].style.display="none"
            }
            for(let i=0;i<projectCom.length;i++){
                projectCom[i].style.display="none"
            }
            for(let i=0;i<projectDev.length;i++){
                projectDev[i].style.display="none"
            }
            for(let i=0;i<projectUiUxDesign.length;i++){
                projectUiUxDesign[i].style.display="none"
            }
            for(let i=0;i<projectDesign.length;i++){
                projectDesign[i].style.display="flex"
            }
            check[number].style.backgroundColor="orange"
            break
        case 5:
            for(let i=0;i<project3D.length;i++){
                project3D[i].style.display="none"
            }
            for(let i=0;i<projectCom.length;i++){
                projectCom[i].style.display="none"
            }
            for(let i=0;i<projectDesign.length;i++){
                projectDesign[i].style.display="none"
            }
            for(let i=0;i<projectDev.length;i++){
                projectDev[i].style.display="none"
            }
            for(let i=0;i<projectUiUxDesign.length;i++){
                projectUiUxDesign[i].style.display="none"
            }
            for(let i=0;i<projectAudiovisual.length;i++){
                projectAudiovisual[i].style.display="flex"
            }
            check[number].style.backgroundColor="purple"
            break
        case 6:
            for(let i=0;i<projectAudiovisual.length;i++){
                projectAudiovisual[i].style.display="none"
            }
            for(let i=0;i<project3D.length;i++){
                project3D[i].style.display="none"
            }
            for(let i=0;i<projectDesign.length;i++){
                projectDesign[i].style.display="none"
            }
            for(let i=0;i<projectDev.length;i++){
                projectDev[i].style.display="none"
            }
            for(let i=0;i<projectUiUxDesign.length;i++){
                projectUiUxDesign[i].style.display="none"
            }
            for(let i=0;i<projectCom.length;i++){
                projectCom[i].style.display="flex"
            }
            check[number].style.backgroundColor="rgb(255, 240, 34)"
            break
    }
}

let quelDispo=2

function changeDisposition(){
    let allProjects = document.getElementsByClassName("allProjects")[0]
    switch(quelDispo){
        case 2:
            allProjects.style.gridTemplateColumns="repeat(2,1fr)"
            quelDispo++
            break
        case 3:
            allProjects.style.gridTemplateColumns="repeat(3,1fr)"
            quelDispo++
            break
        case 4:
            allProjects.style.gridTemplateColumns="repeat(4,1fr)"
            quelDispo++
            break
        case 5:
            allProjects.style.gridTemplateColumns="repeat(5,1fr)"
            quelDispo++
            break
        case 6:
            allProjects.style.gridTemplateColumns="repeat(1,1fr)"
            if(quelDispo==6){
                quelDispo=2
            }
            break
    }
}

let openOrClose=0

function socialMediaMenuAnimationEnter(){
    let tab=document.getElementsByClassName("menuReseauxSociaux-item")
    tab[0].style.right="10rem"
    tab[1].style.right="8.75rem"
    tab[2].style.right="6rem"
    tab[3].style.right="2.5rem"

    tab[0].style.top="2.5rem"
    tab[1].style.top="6rem"
    tab[2].style.top="8.7rem"
    tab[3].style.top="10rem"

    tab[0].style.opacity="1"
    tab[1].style.opacity="1"
    tab[2].style.opacity="1"
    tab[3].style.opacity="1"
}

function socialMediaMenuAnimationLeave(){
    let tab=document.getElementsByClassName("menuReseauxSociaux-item")
    tab[0].style.right="3.5rem"
    tab[1].style.right="3.5rem"
    tab[2].style.right="3.5rem"
    tab[3].style.right="3.5rem"

    tab[0].style.top="3.5rem"
    tab[1].style.top="3.5rem"
    tab[2].style.top="3.5rem"
    tab[3].style.top="3.5rem"

    tab[0].style.opacity="0"
    tab[1].style.opacity="0"
    tab[2].style.opacity="0"
    tab[3].style.opacity="0"
}

function socialMediaMenuAnimationOpenOrClose(){
    if(openOrClose%2==0){
        socialMediaMenuAnimationEnter()
        openOrClose++
    }else if(openOrClose%2!=0){
        socialMediaMenuAnimationLeave()
        openOrClose++
    }
}

// function updateProjectButtons() {

//     let projects = document.querySelectorAll(".projectContainer-projects");

//     projects.forEach(project => {

//         let button = project.querySelector(".callToAction");
//         let width = project.getBoundingClientRect().width;

//         if(width > 100){
//             button.classList.add("isLarge");
//         }else{
//             button.classList.remove("isLarge");
//         }

//     });
// }

let position=0

function changeDispositionProjets(){
    let projects = document.getElementsByClassName("projectContainer")
    let callToAction = document.getElementsByClassName("callToActionTwo")
    let callToActionP = document.getElementsByClassName("isDisplay")
    switch(position){
        case 0 :
            projects[0].style.gridTemplateColumns="3fr 1fr 1fr 1fr 1fr 1fr"
            // callToActionP[5].style.display="none"
            callToActionP[0].style.display="block"
            callToActionP[0].style.opacity="1"
            // callToAction[5].style.width="3rem"
            callToAction[0].style.width="12rem"
            break
        case 1 :
            projects[0].style.gridTemplateColumns="1fr 3fr 1fr 1fr 1fr 1fr"
            callToActionP[0].style.display="none"
            callToActionP[1].style.display="block"
            callToActionP[0].style.opacity="0"
            callToActionP[1].style.opacity="1"            
            callToAction[0].style.width="3rem"
            callToAction[1].style.width="12rem"
            break
        case 2 : 
            projects[0].style.gridTemplateColumns="1fr 1fr 3fr 1fr 1fr 1fr"
            callToActionP[1].style.display="none"
            callToActionP[2].style.display="block"
            callToActionP[1].style.opacity="0"
            callToActionP[2].style.opacity="1"
            callToAction[1].style.width="3rem"
            callToAction[2].style.width="12rem"
            break
        case 3 :
            projects[0].style.gridTemplateColumns="1fr 1fr 1fr 3fr 1fr 1fr"
            callToActionP[2].style.display="none"
            callToActionP[3].style.display="block"
            callToActionP[2].style.opacity="0"
            callToActionP[3].style.opacity="1"
            callToAction[2].style.width="3rem"
            callToAction[3].style.width="12rem"
            break
        case 4 :
            projects[0].style.gridTemplateColumns="1fr 1fr 1fr 1fr 3fr 1fr"
            callToActionP[3].style.display="none"
            callToActionP[4].style.display="block"
            callToActionP[3].style.opacity="0"
            callToActionP[4].style.opacity="1"
            callToAction[3].style.width="3rem"
            callToAction[4].style.width="12rem"
            break
        case 5 :
            projects[0].style.gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 3fr"
            callToActionP[4].style.display="none"
            callToActionP[4].style.opacity="0"
            // callToActionP[5].style.display="block"
            callToAction[4].style.width="3rem"
            // callToAction[5].style.width="12rem"
            break
    }
}

// setInterval(() => {
//     changeDispositionProjets();
//     if(position>5){
//         position=0
//     }else{
//         position++
//     }
// }, 6000);

function initTestimonyCarousel() {
    const track = document.querySelector(".testimonyContainer-cards");
    const prev = document.getElementById("testimonyPrev");
    const next = document.getElementById("testimonyNext");
    if (!track || !prev || !next) return;

    // largeur d'une carte + l'espace (gap) entre deux cartes
    function getStep() {
        const card = track.querySelector(".testimonyContainer-card");
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        return card.offsetWidth + gap;
    }

    next.addEventListener("click", () => {
        track.scrollBy({ left: getStep(), behavior: "smooth" });
    });

    prev.addEventListener("click", () => {
        track.scrollBy({ left: -getStep(), behavior: "smooth" });
    });
}

document.addEventListener("DOMContentLoaded", initTestimonyCarousel);

let popOrNot1=0
let popOrNot2=0
function whatItMean(number){
    let bar1 = document.getElementsByClassName("homeContainer-bar1")
    let text1 = document.getElementsByClassName("homeContainer-texte1")
    let bar2 = document.getElementsByClassName("homeContainer-bar2")
    let text2 = document.getElementsByClassName("homeContainer-texte2")
    // texte 1
    if(number==1){
        if(popOrNot1%2==0){
            bar1[0].style.opacity="1"
            text1[0].style.opacity="1"
            popOrNot1++
        }else if(popOrNot1!=0){
            bar1[0].style.opacity="0"
            text1[0].style.opacity="0"
            popOrNot1++
        }
        // text2
    }else if(number==2){
        if(popOrNot2%2==0){
            bar2[0].style.opacity="1"
            text2[0].style.opacity="1"
            popOrNot2++
        }else if(popOrNot2!=0){
            bar2[0].style.opacity="0"
            text2[0].style.opacity="0"
            popOrNot2++
        }
    }
}

// son boutton

const clickSound = new Audio('/assets/sounds/click.mp3');   // ← ton lien ici
clickSound.volume = 0.4;
clickSound.preload = 'auto';

document.addEventListener('click', (e) => {
    if (e.target.closest('button, .callToAction, .callToActionTwo, .footer-link, a')) {
        playClick();
    }
});

let soundOn = localStorage.getItem('sound') !== 'off';

function toggleSound() {
    soundOn = !soundOn;
    try { localStorage.setItem('sound', soundOn ? 'on' : 'off'); } catch (e) {}
}

function playClick() {
    if (!soundOn) return;
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
}

function playSound(src, volume = 0.4) {
    const s = new Audio(src);
    s.volume = volume;
    s.play().catch(() => {});
}

let intervalId = null;
const isDesktop = window.matchMedia("(min-width: 801px)");

function resetDispositionProjets() {
    const projects = document.querySelector(".projectContainer");
    const callToAction = document.querySelectorAll(".callToActionTwo");
    const callToActionP = document.querySelectorAll(".isDisplay");

    // Vider les styles inline : le CSS reprend la main (y compris la media query)
    projects.style.gridTemplateColumns = "";
    callToAction.forEach((el) => (el.style.width = ""));
    callToActionP.forEach((el) => {
        el.style.display = "";
        el.style.opacity = "";
    });
}

function startAnimation() {
    if (intervalId !== null) return; // évite de cumuler plusieurs intervals

    intervalId = setInterval(() => {
        changeDispositionProjets();
        position = (position + 1) % 6; // états 0 à 5
    }, 6000);
}

function stopAnimation() {
    clearInterval(intervalId);
    intervalId = null;
}

function handleScreenChange(e) {
    if (e.matches) {
        startAnimation();
    } else {
        stopAnimation();
        position = 0;
        resetDispositionProjets();
    }
}

handleScreenChange(isDesktop);
isDesktop.addEventListener("change", handleScreenChange);