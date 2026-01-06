const searchInput    = document.getElementById("event-search");
const categoryFilter = document.getElementById("category-filter");
const tableRows      = document.querySelectorAll("#events-dashboard table tbody tr");

let sanitize = (str) => {

    return str.trim().toLowerCase();
}

const filterEvents = _ => {
    const inpt = sanitize(searchInput.value);
    const cat  = sanitize(categoryFilter.value);

    let regex;
    try {
        let words = inpt.split(/\s+/).filter(Boolean);

        /** 
         * this means *after* you match, lookahead,
         * and find any characters that match the word ‘‘w’’,
         * and then match the rest after lookahead 
         * */

        regex = new RegExp(words.map(w => `(?=.*${w})`).join("") + ".*", "i");
    } catch (e) {
        regex = /.^/;
    }

    tableRows.forEach(row => {
        let fnm  = sanitize(row.cells[0].textContent);
        let fcat = sanitize(row.cells[3].textContent);

        let m1 = !inpt || regex.test(fnm);
        let m2 = cat === "all categories" || fcat === cat;

        row.style.display = m1 && m2 ? "" : "none";
    });
};

document.addEventListener("DOMContentLoaded", () => {

    searchInput.addEventListener("input", filterEvents);
    categoryFilter.addEventListener("change", filterEvents);

    filterEvents();
});

const layers = document.querySelectorAll(".parallax-layer");

const updateParallax = _ => {
    let top = window.scrollY;

    layers.forEach(layer => {
        let tmp = parseFloat(layer.dataset.speed) || 0.5;

        layer.style.transform = `translateY(${top * tmp}px)`;
    });
};


document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", updateParallax);
    
    updateParallax();
});
