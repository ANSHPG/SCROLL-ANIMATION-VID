// window.addEventListener("scroll",function(details) {
//     console.log(details);
// })

let video = document.querySelector(".video");
let progress = 0.325;

function videoProgress(value) {
    if(value) {
        video.currentTime += progress;

        console.log('Scroll Down');
        console.log(video.currentTime);
    }
    else {
        if (video.currentTime >= 0) {
            video.currentTime -= progress;

            console.log('Scroll Up');
            console.log(video.currentTime);  
        }
    }
}

window.onwheel = e => {
    if (e.deltaY >= 0) {
        // Scrolling Down with mouse
        videoProgress(true);

    } else {
        // Scrolling Up with mouse
        videoProgress(false);
    }
}

setTimeout(function() {
    window.addEventListener('keydown', function(details) {
        if(details.key == 'ArrowUp') {
            setTimeout(function() {
                videoProgress(false);
            },100)
            
        }
        if (details.key == 'ArrowDown') {
            setTimeout(function() {
                videoProgress(true);
            },100)
        }
    })
},200)
// window.addEventListener('keydown', function(details) {
//     console.log(details);
//     if(details.key == 'ArrowUp') {
//         setTimeout(function() {
//             videoProgress(false);
//         },100)
        
//     }
//     if (details.key == 'ArrowDown') {
//         setTimeout(function() {
//             videoProgress(true);
//         },100)
//     }
// })
