document.addEventListener("DOMContentLoaded", function () {
    const picture1 = document.getElementById("picture1");
    const picture2 = document.getElementById("picture2");
    const readmore = document.getElementById('read');
    const readmore1 = document.getElementById('read1');

    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const div3 = document.getElementById("div3");

    // div1.div1.style.backgroundColor = "rgb(172, 103, 38)";

    div1.addEventListener("click", function () {
        const picture1Img = picture1.querySelector("img");
        picture1Img.src = "./images/Ellipse14.jpg";
        const picture2Img = picture2.querySelector("img");
        picture2Img.src = "./images/Ellipse15.jpg";
        const overlay1 = picture1.querySelector(".overlay");
        overlay1.querySelector("h2").textContent = "The taste of real wine";
        overlay1.querySelector("p").textContent = "Since 1910, Robert Royce Wines have been a favorite throughout Italy";
        overlay1.querySelector("a").href = "./readmore.html";
        const overlay2 = picture2.querySelector(".overlay");
        overlay2.querySelector("h2").textContent = "We invent our winery for you";
        overlay2.querySelector("p").textContent = "We invent our winery for youVisit our winery and celebrate this day with us";
        overlay2.querySelector("a").href = "./readmore1.html";
        div1.style.backgroundColor = "rgb(172, 103, 38)";
        div2.style.backgroundColor = "white";
        div3.style.backgroundColor = "white";
    });

    div2.addEventListener("click", function () {
        const picture1Img = picture1.querySelector("img");
        picture1Img.src = "./images/Ellipse16.jpg";
        const picture2Img = picture2.querySelector("img");
        picture2Img.src = "./images/Ellipse17.jpg";
        const overlay1 = picture1.querySelector(".overlay");
        overlay1.querySelector("h2").textContent = "Our  festival";
        overlay1.querySelector("p").textContent = "Our annual international wine festival is sure to captivate you";
        overlay1.querySelector("a").href = "#";
        const overlay2 = picture2.querySelector(".overlay");
        overlay2.querySelector("h2").textContent = "Wine tasting";
        overlay2.querySelector("p").textContent = "We have new wines, tastings and...";
        overlay2.querySelector("a").href = "#";
        div2.style.backgroundColor = "rgb(172, 103, 38)";
        div1.style.backgroundColor = "white";
        div3.style.backgroundColor = "white";
    });

    div3.addEventListener("click", function () {
        const picture1Img = picture1.querySelector("img");
        picture1Img.src = "./images/Ellipse18.jpg";
        const picture2Img = picture2.querySelector("img");
        picture2Img.src = "./images/Ellipse19.jpg";
        const overlay1 = picture1.querySelector(".overlay");
        overlay1.querySelector("h2").textContent = "Our  festival";
        overlay1.querySelector("p").textContent = "Our annual international wine festival is sure to captivate you";
        overlay1.querySelector("a").href = "./readmore.html";
        const overlay2 = picture2.querySelector(".overlay");
        overlay2.querySelector("h2").textContent = "Our Wines";
        overlay2.querySelector("p").textContent = "We have about 300 types of wine made in different...";
        overlay2.querySelector("a").href = "#";
        div1.style.backgroundColor = "white";
        div2.style.backgroundColor = "white";
        div3.style.backgroundColor = "rgb(172, 103, 38)";
    });

    readmore.addEventListener("click", function () {
        window.location.href = "#"
    });
    readmore1.addEventListener("click", function () {
        window.location.href = "#"
    });
});
