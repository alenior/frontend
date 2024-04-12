window.onload = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarDados(this);
        }
    };
    xhttp.open("GET", "dados.xml", true);
    xhttp.send();
};

function mostrarDados(xml) {
    var xmlDoc = xml.responseXML;
    var dados = xmlDoc.getElementsByTagName("dados");
    var output = "";
    for (var i = 0; i < dados.length; i++) {
        output += "<p>" + dados[i].childNodes[0].nodeValue + "</p>";
    }
    document.getElementById("dados").innerHTML = output;
}