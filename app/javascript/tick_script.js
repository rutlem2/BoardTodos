function isTicked(idKey) {
    if (document.getElementById(idKey).checked)
    {
        document.getElementById(idKey + "-text-box").innerHTML =  "<del>" + document.getElementById(idKey + "-text-box").innerText + "</del>";
    }
    else
    {
        document.getElementById(idKey + "-text-box").innerHTML = document.getElementById(idKey + "-text-box").innerText;
    }
}