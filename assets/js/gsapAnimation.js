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
});

let i=0
function headerAnimation(){
    if(i%2==0){
        document.getElementById("header-container").style.top="1rem"
        i++
    }else if(i%2!=0){
        document.getElementById("header-container").style.top="-2.5rem"
        i++
    }
}

