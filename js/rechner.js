function loese() {
var tl=document.formular.tl.value;
var mp=document.formular.mp.value;
var s=document.formular.s.value;
var p=tl.replace(/,/,".");
var q=mp.replace(/,/,".");
if (s=="IPE80") {document. formular.x1.value=Math.round(p*6.2)/100;
document. formular.x2.value=Math.round(p*6.2*q)/100;
}
else if (s=="IPE100") {document. formular.x1.value=Math.round(p*8.3)/100;
document. formular.x2.value=Math.round(p*8.3*q)/100;
}
else if (s=="IPE120") {document. formular.x1.value=Math.round(p*10.7)/100;
document. formular.x2.value=Math.round(p*10.7*q)/100;
}
else if (s=="IPE140") {document. formular.x1.value=Math.round(p*13.2)/100;
document. formular.x2.value=Math.round(p*13.2*q)/100;
}
else if (s=="IPE160") {document. formular.x1.value=Math.round(p*16.2)/100;
document. formular.x2.value=Math.round(p*16.2*q)/100;
}
else if (s=="IPE180") {document. formular.x1.value=Math.round(p*19.3)/100;
document. formular.x2.value=Math.round(p*19.3*q))/100;
}
else if (s=="IPE200") {document. formular.x1.value=Math.round(p*23)/100;
document. formular.x2.value=Math.round(p*23*q)/100;
}
else if (s=="IPE220") {document. formular.x1.value=Math.round(p*26.9)/100;
document. formular.x2.value=Math.round(p*26.9*q)/100;
}
else if (s=="IPE240") {document. formular.x1.value=Math.round(p*31.5)/100;
document. formular.x2.value=Math.round(p*31.5*q)/100;
}
else if (s=="IPE270") {document. formular.x1.value=Math.round(p*37)/100;
document. formular.x2.value=Math.round(p*37*q)/100;
}
else if (s=="IPE300") {document. formular.x1.value=Math.round(p*43.3)/100;
document. formular.x2.value=Math.round(p*43.3*q)/100;
}
else if (s=="IPE330") {document. formular.x1.value=Math.round((p*50.4),2)/100;
document. formular.x2.value=Math.round(p*50.4*q)/100;
}
else if (s=="IPE360") {document. formular.x1.value=Math.round(p*58.6)/100;
document. formular.x2.value=Math.round(p*58.6*q)/100;
}
else if (s=="IPE400") {document. formular.x1.value=Math.round((p*68),2)/100;
document. formular.x2.value=Math.round(p*68*q)/100;
}
else if (s=="IPE450") {document. formular.x1.value=Math.round(p*80)/100;
document. formular.x2.value=Math.round(p*80*q)/100;
}
else if (s=="IPE500") {document. formular.x1.value=Math.round((p*93),2)/100;
document. formular.x2.value=Math.round(p*93*q)/100;
}
else if (s=="IPE550") {document. formular.x1.value=Math.round(p*109)/100;
document. formular.x2.value=Math.round(p*109*q)/100;
}
else if (s=="IPE600") {document. formular.x1.value=Math.round(p*125)/100;
document. formular.x2.value=Math.round(p*125*q)/100;
}
else {document.formular.x1.value=p/q
document.formular.x2.value=(p+q);
}
}