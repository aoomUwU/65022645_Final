function submitForm() {
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    var birth = document.getElementById("birth").value
    var grender = document.getElementById("grender").value
    var result = document.getElementById("result")
    if (!name) {
        alert("insert name")
    }
    if (!surname) {
        alert("insert surname")
    }
    if (!birth) {
        alert("insert birth date")
    }
    if (!grender) {
        alert("Select grender")
    }
    if (grender && surname && birth && name) {
        let R = document.createElement("tr")
        result.appendChild(R)
        let creaName = document.createElement("td")
        let creaSurname = document.createElement("td")
        let creaGrender = document.createElement("td")
        let Birth_Date = document.createElement("td")

        creaName.innerText = name
        creaSurname.innerText = surname
        creaGrender.innerText = grender
        Birth_Date.innerText = birth

        R.appendChild(creaName)
        R.appendChild(creaSurname)
        R.appendChild(creaGrender)
        R.appendChild(Birth_Date)
    }
}