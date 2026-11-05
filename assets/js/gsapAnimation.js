// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Draggable,DrawSVGPlugin,EaselPlugin,Flip,GSDevTools,InertiaPlugin,MotionPathHelper,MotionPathPlugin,MorphSVGPlugin,Observer,Physics2DPlugin,PhysicsPropsPlugin,PixiPlugin,ScrambleTextPlugin,ScrollTrigger,ScrollToPlugin,SplitText,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase)
// gsap code here!

    ScrollTrigger.create(
        {
            onUpdate:(self)=>{
                if(self.direction===1){
                    // vers le bas
                    document.getElementById("header-container").style.top="-2.5rem"
                    // let tab=document.getElementsByClassName("header-a")
                    // for(let i=0;i<tab.length;i++){
                    //     tab[i].style.opacity="0"
                    // }

                }else if(self.direction===-1){
                    // vers le haut
                    document.getElementById("header-container").style.top="1rem"
                    // let tab=document.getElementsByClassName("header-a")
                    // for(let i=0;i<tab.length;i++){
                    //     tab[i].style.opacity="1"
                    // }

                }
            }
        }
    )
    document.fonts.ready.then(() => {
    const split = SplitText.create("#welcome-screen", { type: "chars, words, lines" });

    gsap.from(split.chars, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.03,
        ease: "power3.out",
    });
    });
    //VARIABLE
    const machin1  = document.querySelector(".homeContainer")
    const machin2 = document.querySelector(".skillsContainer-part")
    const machin3 = document.querySelector(".allProjectContainer")

    const box1 = document.querySelector(".aboutMe_texte")
    const box2 = document.querySelector(".aboutMe_container")

    const chose1 = document.querySelector(".animation_texte")
    const chose2= document.querySelector(".animation")

    const titre1 =document.querySelector(".skills_title-1")
    const titre2 =document.querySelector(".skills_title-2")
    const titre3 =document.querySelector(".skills_title-3")
    const texte1 =document.querySelector(".skills_texte-1")
    const texte2 =document.querySelector(".skills_texte-2")
    const texte3 =document.querySelector(".skills_texte-3")
    //HEADER
    gsap.to(".home_container-animation",{
      delay:1.5,
      y:"70px",
      opacity:0,
      yoyo:true,
      scrollTrigger:{
        trigger:machin1,
        // markers:true,
        toggleActions : "play reverse play reverse",
        scrub:1,
        start: 0,
      }
    })
    
    gsap.from(".home_container-animation2",{
        delay:1.9,
        y:"70px",
        opacity:0,
        duration:1,
        stagger:0.2,
        ease: "power3.out",
    })

    gsap.from(".home_container-fleur",{
        delay:1,
          y:"50px",
        duration:1,
        opacity:0,
        // stagger: 0.15,
        ease: "power3.out",
    })
    
    // gsap.to(".home_container-fleur",{
    //     y:"790px",
    //     opacity:0,
    //     yoyo:true,
    //     scrollTrigger:{
    //         trigger:machin1,
    //         // markers:true,
    //         toggleActions : "play reverse play reverse",
    //         scrub:1.7,
    //         start: 0,
    //     }
    // })

    gsap.from(".home_container-point",{
        delay:1.4,
        y:"50px",
        duration:1,
        opacity:0,
        stagger: 0.20,
        ease: "power3.out",
    })

    gsap.from(".skillsContainer-part",{
        delay:0.4,
        // y:"790px",
        opacity:0,
        duration:2,
        stagger:0.5,
        ease: "power3.out",
        scrollTrigger:{
            trigger:machin2,
            // markers:true,
            start: "top bottom",
            end: "center 20%",
            toggleActions : "play reverse play reverse",
            // scrub:1.7,
        }
    })

    // gsap.from(".project",{
    //     delay:1.2,
    //     y:"310px",
    //     duration:1.5,
    //     opacity:0,
    //     stagger: 0.3,
    //     ease: "power3.out",
    // })

});

function animateProjects() {
  const visibles = Array.from(document.querySelectorAll(".project"))
    .filter((p) => getComputedStyle(p).display !== "none");

  gsap.fromTo(
    visibles,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.4,
      ease: "circ.out",
      overwrite: true,        // un clic rapide coupe l'animation précédente
      clearProps: "transform,opacity",
    }
  );
}



//VERSION 2
//IMAGE HOME CONTAINER

gsap.to(".home_container-image",{
  y:"790px",
  opacity:0,
  yoyo:true,
  scrollTrigger:{
    trigger:machin1,
    // markers:true,
    toggleActions : "play reverse play reverse",
    scrub:1.7,
    start: 0,
  }
})

gsap.from(".home_container-image", {
  yPercent:20,
  opacity:0,
  duration:1,
  delay:4,
})

//HOME CONTAINER ANIMATION TEXTE
gsap.from(selection[0].chars, {
  delay:3.8,
  color : "#EAEAEA",
  stagger : 0.08,
  duration:0.1,
  scrollTrigger : {
    trigger : ".home_container",
    toggleActions : "play reverse play reverse",
    // markers:true,
    start : "top 80%",
    end : "20%",
  }
})

//ABOUT ME CONTAINER
gsap.from(box1, {
  yPercent:-20,
  opacity : 0,
  duration:1,
  yoyo:true,
  delay:0.5,
  scrollTrigger: {
    trigger : box2,
    toggleActions : "play none none reverse",
    start:"top 60%",
    end : "bottom 40%",
    // markers : true,
    // scrub : 1,
    // pin : true,
  }
})

//SKILLS
gsap.from(".skills-1",{
  yPercent:80,
  duration:0.26,
  paddingBottom:"50px 0",
  opacity:0,
  stagger:{
    each : 0.2,
  },
  scrollTrigger: {
  trigger : texte1,
  // toggleActions : "play reverse play reverse",
  toggleActions : "play none none reverse",
  start:"top 80%",
  end : "bottom 50% ",
  // markers : true,
  delay:2,
  }
})
    
gsap.from(".skills-2",{
  yPercent:80,
  duration:0.26,
  paddingBottom:"50px 0",
  opacity:0,
  stagger:{
    each : 0.2,
  },
  scrollTrigger: {
  trigger : texte2,
  // toggleActions : "play reverse play reverse",
  toggleActions : "play none none reverse",
  start:"top 80%",
  end : "bottom 50% ",
  // markers : true,
  delay:2,
  }
})

gsap.from(".skills-3",{
  yPercent:80,
  duration:0.26,
  paddingBottom:"50px 0",
  opacity:0,
  stagger:{
    each : 0.2,
  },
  scrollTrigger: {
  trigger : texte3,
  // toggleActions : "play reverse play reverse",
  toggleActions : "play none none reverse",
  start:"top 80%",
  end : "bottom 50% ",
  // markers : true,
  delay:2,
  }
})

//MOCK UP

gsap.fromTo(".mockUp_image_type1", 
  { yPercent: -100 }, 
  { 
    yPercent: 0,
    // duration:80,
    // repeat:-1,
    scrollTrigger: {
      trigger: ".mockUp_container",
      toggleActions: "play none none reverse",
      scrub: 1,
      start : "top 86%",
      staggers: 1.7,
    }
  }
);

gsap.fromTo(".mockUp_image_type2", 
  { yPercent: 0}, 
  { 
    yPercent: -100,
    // duration:10,
    // repeat:-1,
    scrollTrigger: {
      trigger: ".mockUp_container",
      toggleActions: "play none none reverse",
      scrub: 1,
      start : "top 86%",
      staggers: 1.5,
    }
  }
);

gsap.fromTo(".mockUp_image_type3", 
  { yPercent: -100 }, 
  { 
    yPercent: 0,
    // duration:80,
    // repeat:-1,
    scrollTrigger: {
      trigger: ".mockUp_container",
      toggleActions: "play none none reverse",
      scrub: 1,
      start : "top 86%",
      staggers: 1.7,
    }
  }
);
