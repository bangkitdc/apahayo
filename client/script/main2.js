var flag = sessionStorage.getItem("flag")
if (flag != false) {
    document.querySelector('.song').play();
}