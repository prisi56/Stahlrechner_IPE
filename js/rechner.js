function loese() {
var tl=document.formular.tl.value;
var mp=document.formular.mp.value;
var s=document.formular.s.value;
var p=tl.replace(/,/,".");
var q=mp.replace(/,/,".");
if (s=="IPE80") {document. formular.x1.value=Math.round((p*0.6),2)/10;
document. formular.x2.value=Math.round((p*0.6*q),2)/10;
}
else if (s=="IPE100") {document. formular.x1.value=Math.round((p*0.81),2)/10;
document. formular.x2.value=Math.round((p*0.81*q),2)/10;
}
else if (s=="IPE120") {document. formular.x1.value=Math.round((p*1.04),2)/10;
document. formular.x2.value=Math.round((p*1.04*q),2)/10;
}
else if (s=="IPE140") {document. formular.x1.value=Math.round((p*1.29),2)/10;
document. formular.x2.value=Math.round((p*1.29*q),2)/10;
}
else if (s=="IPE160") {document. formular.x1.value=Math.round((p*1.58),2)/10;
document. formular.x2.value=Math.round((p*1.58*q),2)/10;
}
else if (s=="IPE180") {document. formular.x1.value=Math.round((p*1.88),2)/10;
document. formular.x2.value=Math.round((p*1.88*q),2)/10;
}
else if (s=="IPE200") {document. formular.x1.value=Math.round((p*2.24),2)/10;
document. formular.x2.value=Math.round((p*2.24*q),2)/10;
}
else if (s=="IPE220") {document. formular.x1.value=Math.round((p*2.62),2)/10;
document. formular.x2.value=Math.round((p*2.62*q),2)/10;
}
else if (s=="IPE240") {document. formular.x1.value=Math.round((p*3.07),2)/10;
document. formular.x2.value=Math.round((p*3.07*q),2)/10;
}
else if (s=="IPE270") {document. formular.x1.value=Math.round((p*3.61),2)/10;
document. formular.x2.value=Math.round((p*3.61*q),2)/10;
}
else if (s=="IPE300") {document. formular.x1.value=Math.round((p*4.22),2)/10;
document. formular.x2.value=Math.round((p*4.22*q),2)/10;
}
else if (s=="IPE330") {document. formular.x1.value=Math.round((p*4.91),2)/10;
document. formular.x2.value=Math.round((p*4.91*q),2)/10;
}
else if (s=="IPE360") {document. formular.x1.value=Math.round((p*5.71),2)/10;
document. formular.x2.value=Math.round((p*5.71*q),2)/10;
}
else if (s=="IPE400") {document. formular.x1.value=Math.round((p*6.63),2)/10;
document. formular.x2.value=Math.round((p*6.63*q),2)/10;
}
else if (s=="IPE450") {document. formular.x1.value=Math.round((p*7.76),2)/10;
document. formular.x2.value=Math.round((p*7.76*q),2)/10;
}
else if (s=="IPE500") {document. formular.x1.value=Math.round((p*9.07),2)/10;
document. formular.x2.value=Math.round((p*9.07*q),2)/10;
}
else if (s=="IPE550") {document. formular.x1.value=Math.round((p*10.6),2)/10;
document. formular.x2.value=Math.round((p*10.6*q),2)/10;
}
else {document.formular.x1.value=p/q
document.formular.x2.value=(p+q);
}
}