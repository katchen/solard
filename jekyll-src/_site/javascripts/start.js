    var names = ["home", "oPower", "facebook", "vision", "up"];
    var links = ["http://www.solardecathlon.stanford.edu", "http://www.opower.com", "https://www.facebook.com/pages/Stanford-Solar-Decathlon-2013/277641402302890", "http://www.intel.com", "#"];
    var classes = ["red", "green", "blue", "yellow", "orange"];
    var index = 0;

function changer(){
    var elem = document.getElementById("toChange");
    if(index == links.length){
        index = 0;
    }
    elem.innerHTML = names[index];
    elem.href = links[index];
    elem.className = classes[index];
    index++;
    setTimeout(changer, 3000);
}

function load() {
    changer();
}