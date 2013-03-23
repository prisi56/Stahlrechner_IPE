function loese() {
var tl=document.formular.tl.value;
var mp=document.formular.mp.value;
var s=document.formular.s.value;
var p=tl.replace(/,/,".");
var q=mp.replace(/,/,".");
if (s=="IPE80") {document. formular.x1.value=p*6
document. formular.x2.value=p*6*q;
}
else if (s=="IPE100") {document. formular.x1.value=p*8.1
document. formular.x2.value=p*8.1*q;
}
else if (s=="IPE120") {document. formular.x1.value=p*10.4
document. formular.x2.value=p*10.4*q;
}
else if (s=="IPE140") {document. formular.x1.value=p*12.9
document. formular.x2.value=p*12.9*q;
}
else if (s=="IPE160") {document. formular.x1.value=p*15.8
document. formular.x2.value=p*15.8*q;
}
else if (s=="IPE180") {document. formular.x1.value=p*18.8
document. formular.x2.value=p*18.8*q;
}
else if (s=="IPE200") {document. formular.x1.value=p*22.4
document. formular.x2.value=p*22.4*q;
}
else if (s=="IPE220") {document. formular.x1.value=p*26.2
document. formular.x2.value=p*26.2*q;
}
else if (s=="IPE240") {document. formular.x1.value=p*30.7
document. formular.x2.value=p*30.7*q;
}
else if (s=="IPE270") {document. formular.x1.value=p*36.1
document. formular.x2.value=p*36.1*q;
}
else if (s=="IPE300") {document. formular.x1.value=p*42.2
document. formular.x2.value=p*42.2*q;
}
else if (s=="IPE330") {document. formular.x1.value=p*49.1
document. formular.x2.value=p*49.1*q;
}
else if (s=="IPE360") {document. formular.x1.value=p*57.1
document. formular.x2.value=p*57.1*q;
}
else if (s=="IPE400") {document. formular.x1.value=p*66.3
document. formular.x2.value=p*66.3*q;
}
else if (s=="IPE450") {document. formular.x1.value=p*77.6
document. formular.x2.value=p*77.6*q;
}
else if (s=="IPE500") {document. formular.x1.value=p*90.7
document. formular.x2.value=p*90.7*q;
}
else if (s=="IPE550") {document. formular.x1.value=p*106
document. formular.x2.value=p*106*q;
}
else {document.formular.x1.value=p/q
document.formular.x2.value=(p+q);
}
}