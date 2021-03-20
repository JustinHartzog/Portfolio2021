$(document).foundation()



/*
function contentAnimation() {

  var tl = gasp.timeline();
  tl.from('.grid-container' , { duration: 1.5, translateY: 50, opacity: 0});
  tl.to(cell , { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"})
}
*/

var tl = gsap.timeline({defaults:{duration: .9, ease: Back.easeOut.config(1), opacity: 0}})
        var tl2 = gsap.timeline({defaults:{duration: 1.5, delay:1}})
        var tl3 = gsap.timeline({defaults:{duration: 1.5}})

        tl.from(".grid-container", {delay: 1, scale: .2, transformOrigin: 'top'}, "=.2")
          .from(".lead", {scaleY:0, transformOrigin: 'top'})
          .from(".grid-x", {scale: .2, transformOrigin: 'center'}, "-=.7")
