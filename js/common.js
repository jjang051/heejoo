Splitting();
const gnbTL = gsap.timeline({paused:true});
gnbTL.to("#gnb",{
    top:0,
    duration:1,
    ease:"power4",
})
.from("#gnb li",{
    opacity:0,
    x:500,
    ease:"power4",
    duration:1,
    stagger:{
        each:0.05
    },
    onReverseComplete:()=>{
        //$("#header").removeClass("on");
    }
});

$(".btnAll").on("click",function(){
    $("#header").toggleClass("on");
    if($("#header").hasClass("on")){
        gnbTL.timeScale(1);
        gnbTL.play();
    } else {
        gnbTL.timeScale(1.8);
        gnbTL.reverse();

    }
});


mainTitleTL = gsap.timeline();
mainTitleTL.from(".roundItems li",{
    scale:0,
    duration:2,
    ease:"elastic",
    delay:function(i,item){
        return 1 - 0.1*i
    }
})
.from(".mainTitle .char",{
    opacity:0,
    duration:1,
    stagger:{
        each:0.1
    }
})
.fromTo(".movingItems li",{
    opacity:0,
    scale:0,
},{
    opacity:1,
    scale:1,
    duration:1,
    ease:"elastic",
    stagger:{
        each:0.1
    }
});

$(".movingItems li").each(function(i,item){
    
    let _this = $(this);
    let t = Math.random()*100;
    _this.data({t:t});
    gsap.set(_this,{
        x:Math.cos(t)*(i*100+150),
        y:Math.sin(t)*(i*100+150),
    });
    setInterval(function(){
        t+=0.002;
        gsap.set(_this,{
            x:Math.cos(t)*(i*100+150),
            y:Math.sin(t)*(i*100+150),
        }); 
    },10)
})

const mainSlider = new Swiper("#main .mask",{
    direction:"horizontal",
    mousewheel: {
        eventsTarget:"#main"
    },
    speed:1000,
    parallax: true,
});


//particlesJS.load("particle", "../js/particlesjs-config.json", function() {});
