/**
 * Created by nata on 30.06.17.
 */
function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("field-name-body");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var x = document.getElementsByClassName("field-name-comments-from-block");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var x = document.getElementsByClassName("field-name-checkout-info-block");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x = document.getElementsByClassName(cityName);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
     }
    var element1 = document.getElementById("field-name-body");
    element1.classList.remove("active");

    var element = document.getElementById("field-name-comments-from-block");
    element.classList.remove("active");

    var element = document.getElementById("field-name-checkout-info-block");
    element.classList.remove("active");

    var element = document.getElementById(cityName);
    element.classList.add("active");
}
