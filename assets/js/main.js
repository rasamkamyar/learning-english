let flag = true;

function darkMode() {

  if (flag === true) {
    document.body.style.backgroundImage = "url('./assets/images/D60.jpg')";
    flag = false;
  }else{
    document.body.style.backgroundImage = "url('./assets/images/tmob.jpg')";
    flag = true;
}
}
