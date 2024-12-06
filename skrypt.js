function informacje()
{
    var extraInfo = document.getElementById("extraInfo")
    var button = document.getElementById("moreInfoBtn")

    if (extraInfo.style.display === "none")
    {
        extraInfo.style.display = "block";
        button.textContent = "Ukryj informacje"; 
    }

    else
    {
        extraInfo.style.display = "none";
        button.textContent = "Więcej informacji;"
    }
}

function dogalerii()
{
    window.location.href = "galeria.html";
}