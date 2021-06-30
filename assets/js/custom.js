//Kintamuju skaiciavimas

var skaiciavimas;

skaiciavimas = 1;

skaiciavimas += 2;

skaiciavimas -= 2;

skaiciavimas = skaiciavimas * 3;

skaiciavimas = skaiciavimas / 3;

//alert(skaiciavimas);

var petras = [0, "Labas lietuva", 2, 3, [1, 2, 3]];

//console.log( petras[1] );

//var = variable (angl.) kintamasis

//Eventas skirtas issaukti reakcija paspaudus mygtuka
var pasisveikinimas = "Labas lietuva!";

document.getElementById("kvietejas").addEventListener("click", ikrepseli);

function ikrepseli() {
  var kiekis = document.getElementById("kiekis").value;
  var zodis = "prekes";

  if (kiekis % 10 == 1) {
    zodis = "prekę";
  }

  if ((kiekis > 10 && kiekis < 20) || kiekis % 10 == 0) {
    zodis = "prekių";
  }

  document.getElementById("messages").innerHTML =
    "Jūs sėkmingai pridėjote " + kiekis + " " + zodis + "  į savo krepšelį!";

  if (kiekis > 100) {
    document.getElementById("messages").innerHTML =
      "Jūsų pasirinktas prekių kiekis yra didesnis nei leistinas.";
    document.getElementById("kiekis").classList.add("redborder");
    document.getElementById("kiekis").type = "text";
    document.getElementById("kiekis").value = "ERROR!";
  }
  else {
    document.getElementById("kiekis").classList.add("basic");
    document.getElementById("kiekis").type = "number";

  }

  if (kiekis <= 0) {
    document.getElementById("messages").innerHTML =
      "Pasirinktas per mažas kiekis";
    document.getElementById("kiekis").classList.add("redborder")
    document.getElementById("kiekis").type = "text"
    document.getElementById("kiekis").value = "ERROR!"
  }
  else {
    document.getElementById("kiekis").classList.add("basic")
    document.getElementById("kiekis").type = "number"
 }

  document.getElementById("reset").addEventListener("click", resetinti);

  function resetinti() {
    document.getElementById("reset").onclick;
    location.reload();
  }
  //alert('Jūs sėkmingai pridėjote ' + kiekis + ' prekę į savo krepšelį!');
}

//kaunasLietuva(petras);
