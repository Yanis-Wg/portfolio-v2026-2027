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
        check[i].style.backgroundColor="#d9d9d9"
        checkh3[i].style.color="#9F9F9F"
    }
    for(let i=number;i<7;i++){
        check[i].style.backgroundColor="#d9d9d9"
        checkh3[i].style.color="#9F9F9F"   
    }
    checkh3[number].style.color="black"

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
            check[number].style.backgroundColor="black"
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