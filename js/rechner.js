function loese() {
var tl=document.formular.tl.value;
var mp=document.formular.mp.value;
var s=document.formular.s.value;
var p=tl.replace(/,/,".");
var q=mp.replace(/,/,".");
if (s=="IPE80") {document. formular.x1.value=Math.round((p*6.2),2)/100;
document. formular.x2.value=Math.round((p*6.2*q),2)/100;
document. formular.x3.value="6.2";
}
else if (s=="IPE100") {document. formular.x1.value=Math.round((p*8.3),2)/100;
document. formular.x2.value=Math.round((p*8.3*q),2)/100;
document. formular.x3.value="8.3";
}
else if (s=="IPE120") {document. formular.x1.value=Math.round((p*10.7),2)/100;
document. formular.x2.value=Math.round((p*10.7*q),2)/100;
document. formular.x3.value="10.7";
}
else if (s=="IPE140") {document. formular.x1.value=Math.round((p*13.2),2)/100;
document. formular.x2.value=Math.round((p*13.2*q),2)/100;
document. formular.x3.value="13.2";
}
else if (s=="IPE160") {document. formular.x1.value=Math.round((p*16.2),2)/100;
document. formular.x2.value=Math.round((p*16.2*q),2)/100;
document. formular.x3.value="16.2";
}
else if (s=="IPE180") {document. formular.x1.value=Math.round((p*19.3),2)/100;
document. formular.x2.value=Math.round((p*19.3*q),2)/100;
document. formular.x3.value="19.3";
}
else if (s=="IPE200") {document. formular.x1.value=Math.round((p*23),2)/100;
document. formular.x2.value=Math.round((p*23*q),2)/100;
document. formular.x3.value="23";
}
else if (s=="IPE220") {document. formular.x1.value=Math.round((p*26.9),2)/100;
document. formular.x2.value=Math.round((p*26.9*q),2)/100;
document. formular.x3.value="26.9";
}
else if (s=="IPE240") {document. formular.x1.value=Math.round((p*31.5),2)/100;
document. formular.x2.value=Math.round((p*31.5*q),2)/100;
document. formular.x3.value="31.5";
}
else if (s=="IPE270") {document. formular.x1.value=Math.round((p*37),2)/100;
document. formular.x2.value=Math.round((p*37*q),2)/100;
document. formular.x3.value="37";
}
else if (s=="IPE300") {document. formular.x1.value=Math.round((p*43.3),2)/100;
document. formular.x2.value=Math.round((p*43.3*q),2)/100;
document. formular.x3.value="43.3";
}
else if (s=="IPE330") {document. formular.x1.value=Math.round((p*50.4),2)/100;
document. formular.x2.value=Math.round((p*50.4*q),2)/100;
document. formular.x3.value="50.4";
}
else if (s=="IPE360") {document. formular.x1.value=Math.round((p*58.6),2)/100;
document. formular.x2.value=Math.round((p*58.6*q),2)/100;
document. formular.x3.value="58.6";
}
else if (s=="IPE400") {document. formular.x1.value=Math.round((p*68),2)/100;
document. formular.x2.value=Math.round((p*68*q),2)/100;
document. formular.x3.value="68";
}
else if (s=="IPE450") {document. formular.x1.value=Math.round((p*80),2)/100;
document. formular.x2.value=Math.round((p*80*q),2)/100;
document. formular.x3.value="80";
}
else if (s=="IPE500") {document. formular.x1.value=Math.round((p*93),2)/100;
document. formular.x2.value=Math.round((p*93*q),2)/100;
document. formular.x3.value="93";
}
else if (s=="IPE550") {document. formular.x1.value=Math.round((p*109),2)/100;
document. formular.x2.value=Math.round((p*109*q),2)/100;
document. formular.x3.value="109";
}
else if (s=="IPE600") {document. formular.x1.value=Math.round((p*125),2)/100;
document. formular.x2.value=Math.round((p*125*q),2)/100;
document. formular.x3.value="125"; 
}
else {document.formular.x1.value=p/q
document.formular.x2.value=(p+q);
}
}