 function show_menu(id) {
  document.getElementById(id + '_white').style.display = "block";
  document.getElementById(id + '_left').style.display = "block";
  //document.getElementById(id + '_right').style.display = "block";
 // document.getElementById(id + '_line').style.display = "block";
  //document.getElementById('menu_' + id).style.color = "#444";
 // document.getElementById(id + '_white').style.zIndex = "1";
  document.getElementById(id + '_left').style.zIndex = "1";
  //document.getElementById(id + '_right').style.zIndex = "1";
  //document.getElementById(id + '_line').style.zIndex = "1";
}

function hide_menu(id) {
  document.getElementById(id + '_white').style.display = "none";
  document.getElementById(id + '_left').style.display = "none";
  //document.getElementById(id + '_right').style.display = "none";
  document.getElementById(id + '_line').style.display = "none";
  document.getElementById('menu_' + id).style.color = "#ff7f00";
  document.getElementById(id + '_white').style.zIndex = "0";
  document.getElementById(id + '_left').style.zIndex = "0";
  //document.getElementById(id + '_right').style.zIndex = "0";
  document.getElementById(id + '_line').style.zIndex = "0";
}
