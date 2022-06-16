function getTodaysTodos() {
    let elements = document.getElementsByTagName("small");
    
    elemsLength = elements.length;
    for (let i = 0; i < elemsLength; i++)
    {
        if (!elements[i].innerText.includes("Today"))
        {
            elements[i].parentNode.remove();
            i = -1;
            elemsLength = elements.length;
        }
    }
}