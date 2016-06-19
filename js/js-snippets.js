// code to edit transform
var style = $("#map").attr("style");
var re = /transform: (.+);/;
style.replace(re, "transform: rotate3d(1, 0, 0, 20deg);");
