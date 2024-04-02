function navigateWine() {
    window.location.href = "./wine_item.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const filterInput = document.getElementById("filterInput");
    const cards = document.querySelectorAll(".card");

    filterInput.addEventListener("input", function() {
        const searchTerm = filterInput.value.trim().toLowerCase();

        cards.forEach(card => {
            const cardTitle = card.querySelector(".card-title").textContent.trim().toLowerCase();
            const cardContainer = card.parentElement;
            
            if (cardTitle.includes(searchTerm)) {
                card.style.display = "block";
                cardContainer.style.display = "block";
            } else {
                card.style.display = "none";
                cardContainer.style.display = "none";
            }
        });
    });
});

