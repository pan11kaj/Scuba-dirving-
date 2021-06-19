AFRAME.registerComponent('control', {
    schema: {
        rotateX:{type:"number",default:0}
    },

    init: function () {
      // Do something when component first attached.
    
    },

    update: function () {
        let man = document.getElementById("controlman"); 
        let rotation = man.getAttribute("rotation");
        let sea  = document.getElementById("sea");
        let sea_rotation = sea.getAttribute("rotation");
        window.addEventListener("keydown",function(key){
            if(key.key == "ArrowLeft"){
                if(rotation.y < 380){
                    rotation.y +=0.4;
                    sea_rotation.y -=0.4
                    man.setAttribute("rotation",{x:rotation.x,y:rotation.y,z:rotation.z})
                    sea.setAttribute("rotation",{x:sea_rotation.x,y:sea_rotation.y,z:sea_rotation.z})
                   
                }
            }
            if(key.key == "ArrowRight"){
                if(rotation.y > 330){
                    rotation.y -=0.4;
                    man.setAttribute("rotation",{x:rotation.x,y:rotation.y,z:rotation.z});
                    sea_rotation.y+=0.4;
                    sea.setAttribute("rotation",{x:sea_rotation.x,y:sea_rotation.y,z:sea_rotation.z})
                }
            }
        });
    },

    remove: function () {
      // Do something the component or its entity is detached.   
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
