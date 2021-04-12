"use strict";

//gör krumeluren större
document.getElementById("bigger").addEventListener("click", function(){
    document.documentElement.style.setProperty("--baseSize", "50vh");
});

//gör krumeluren mindre
document.getElementById("smaller").addEventListener("click", function(){
    document.documentElement.style.setProperty("--baseSize", "10vh");
});

//stoppa storleksförändringen på krumeluren
document.getElementById("stop").addEventListener("click", function(){
    let szwidth = getComputedStyle(document.querySelector("#wherethingshappen div")).getPropertyValue("width");
    document.documentElement.style.setProperty("--baseSize", szwidth);
});

let skapadiv = document.createElement("div");

//skapa divs till scheman
for (let i = 1; i <= 4; i++) {
    let skapadiv = document.createElement("div");
    skapadiv.classList.add(`container${i}`);
    skapadiv.classList.add("grupp");
    document.querySelector("#schemes").append(skapadiv);

    //skapa divs till färger

    for(let j = 1; j <= 5; j++){
        let fargigrupp = document.createElement("div");
        fargigrupp.classList.add("gruppfarg");
        fargigrupp.style.backgroundColor = getColor(i, j);
        document.querySelector(`.container${i}`).append(fargigrupp);

        //byte av färg beroende på vilket schema
        document.querySelector(`.container${i}`).addEventListener("click", function(){
        document.querySelector("#wherethingshappen > div").style.backgroundColor = getColor(`${i}`, 2);
        document.querySelector("#wherethingshappen > div > div").style.backgroundColor = getColor(`${i}`, 3);
        document.querySelector("#wherethingshappen > div > div > div").style.backgroundColor = getColor(`${i}`, 4);
        document.querySelector("#wherethingshappen > div > div > div > div").style.backgroundColor = getColor(`${i}`, 1);
        document.querySelector("#wherethingshappen > div > div > div > div > div").style.backgroundColor = getColor(`${i}`, 5);
        document.querySelector("#wherethingshappen").style.backgroundColor = getColor(`${i}`, 5);
    })
}

//nummerschema
skapadiv.querySelector("div:nth-child(3)").innerHTML = `<p>SCHEME ${i}</p>`;

//skapar skugga till #scheme
skapadiv.addEventListener("click", function(){
    makeShadow(skapadiv);
    
    function makeShadow(skapaskugga){
        removeClassFromElement(document.querySelector(".shadow"), "shadow");
        skapaskugga.classList.add("shadow");
    }
});}

//skapa divs i #wherethingshappen
skapadiv.innerHTML =`
        <div>
            <div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

document.querySelector("#wherethingshappen").prepend(skapadiv);
