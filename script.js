$("#kezdes").click(function() {
    szám = Math.floor(Math.random() * 3)
})

$(".kartya").click(function() {
    if (szám == 0) {
        document.getElementById('egy').src='assets/piros.jpg'
    } if (szám == 0) {
        document.getElementById('ketto').src='assets/fekete.jpg'
    } if (szám == 0) {
        document.getElementById('harom').src='assets/fekete.jpg'
    }
})

$(".kartya").click(function() {
    if (szám == 1) {
        document.getElementById('egy').src='assets/fekete.jpg'
    } if (szám == 1) {
        document.getElementById('ketto').src='assets/piros.jpg'
    } if (szám == 1) {
        document.getElementById('harom').src='assets/fekete.jpg'
    }
})

$(".kartya").click(function() {
    if (szám == 2) {
        document.getElementById('egy').src='assets/fekete.jpg'
    } if (szám == 2) {
        document.getElementById('ketto').src='assets/fekete.jpg'
    } if (szám == 2) {
        document.getElementById('harom').src='assets/piros.jpg'
    }
})

$("#egy").click(function() {
    if (szám == 0) {
        $("#valasz").html("Nyertél")
    } else {
        $("#valasz").html("Vesztettél")
    }
})

$("#ketto").click(function() {
    if (szám == 1) {
        $("#valasz").html("Nyertél")
    } else {
        $("#valasz").html("Vesztettél")
    }
})

$("#harom").click(function() {
    if (szám == 2) {
        $("#valasz").html("Nyertél")
    } else {
        $("#valasz").html("Vesztettél")
    }
})

$("#retry").click(function() {
    szám = -1
    if (szám == -1) {
        document.getElementById('egy').src='assets/kártya.png'
        document.getElementById('ketto').src='assets/kártya.png'
        document.getElementById('harom').src='assets/kártya.png'
        $("#valasz").html("")
        $("#szam"),html("")
    }
})