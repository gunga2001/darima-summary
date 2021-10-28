window.onscroll = dell
const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]


window.onload = function () {
    document.getElementById("photo").onclick = dell;
    document.getElementById("pit").onclick = look;
    document.getElementById("left-btn").onclick = leftBtn;
    document.getElementById("right-btn").onclick = rightBtn;
    document.getElementById("close").onclick = dell;
};

function look(event) {
    if (event.target.tagName === "IMG") {
        let sc = window.pageYOffset;
        document.getElementById("bas").style.top = sc + "px";
        document.getElementById("view").style.top = sc + "px";
        document.getElementById("photo").src = event.target.src;
        document.getElementById("left-btn").style.visibility = "visible";
        document.getElementById("right-btn").style.visibility = "visible";
        document.getElementById("bas").style.visibility = "visible";
        document.getElementById("view").style.visibility = "visible";
        let photo = document.getElementById("photo").src
        for (let i = 0; i < arr.length ; i++) {
            if (photo.indexOf(`img/galery/${arr[i]}.jpg`) >= 0) {
                if (arr[i] == 0) {
                    document.getElementById("left-btn").style.visibility = "hidden"
                }
                if (arr[i] == (arr.length - 1)) {
                    document.getElementById("right-btn").style.visibility = "hidden"
                }
            }
        }
    }
    return false
}


function leftBtn() {
    document.getElementById("left-btn").style.visibility = "visible"
    let photo = document.getElementById("photo").src
    for (let i = 0; i < arr.length; i++) {
        if (photo.indexOf(`img/galery/${arr[i]}.jpg`) >= 0) {
            i--;
            console.log(i)
            document.getElementById("photo").src = `img/galery/${arr[i]}.jpg`
            if (arr[i] == 0) {
                document.getElementById("left-btn").style.visibility = "hidden"
                break
            }
            document.getElementById("left-btn").style.visibility = "visible";
            document.getElementById("right-btn").style.visibility = "visible";

            break
        }
    }
    return false

}

function rightBtn() {
    document.getElementById("right-btn").style.visibility = "visible"
    let photo = document.getElementById("photo").src
    console.log(photo)
    for (let i = 0; i < arr.length; i++) {
        if (photo.indexOf(`img/galery/${arr[i]}.jpg`) >= 0) {
            i++;
            document.getElementById("photo").src = `img/galery/${arr[i]}.jpg`
            if (arr[i] == (arr.length - 1)) {
                document.getElementById("right-btn").style.visibility = "hidden"
                break
            }
            document.getElementById("left-btn").style.visibility = "visible";
            document.getElementById("right-btn").style.visibility = "visible";
            break
        }

    }
    return false
}

function dell() {
    document.getElementById("bas").style.visibility = "hidden"
    document.getElementById("view").style.visibility = "hidden"
    document.getElementById("left-btn").style.visibility = "hidden"
    document.getElementById("right-btn").style.visibility = "hidden"
    document.getElementById("photo").src = "img/galery/0.jpg"
    return false
}