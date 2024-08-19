let cron = 1
document.querySelector('input#radio1').checked = true;

setInterval ( function() {
    nextImage()
}, 4000)

function nextImage(){
    cron++
    if (cron > 2) {
        cron = 1
    }

    document.querySelector('input#radio'+ cron).checked = true;

}

