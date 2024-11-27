let son = +prompt("Son va daraja kiriting men sizga ko'paytmasini topib beraman.");
let daraja = +prompt("Daraja kiriting.");
let jovob;

while (isNaN(son) || son == "" || son == 0) {
  son = +prompt("Siz son kirtmadingz iltimos son kirting");
}

while (isNaN(daraja) || daraja == "" || daraja == 0) {
  daraja = +prompt("Siz daraja kirtmadingz iltimos daraja kirting");
}

jovob = son * daraja;

alert("Javob: " + jovob);