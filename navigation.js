function navigation() {
    var select = document.querySelector("nav select");
    select.onchange = function() {
        window.location = this.value;
    };
}