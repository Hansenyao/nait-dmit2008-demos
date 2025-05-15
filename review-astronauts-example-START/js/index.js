// js here.
import "bootstrap/dist/css/bootstrap.css"

import {getAstronauts, getAstronautsWithOffset} from "./api/astronaut.js"
import { addAstronaut } from "./dom/astronaut.js"

const astronautList = document.querySelector(".astronaut-list")
const paginationContainer = document.querySelector(".pagination")

let current = 1;
let totalPages = 0;
let perPages = 10;

// Get the first page at begin
getAstronauts().then((astronauts) => {
    totalPages = Math.ceil(Number(astronauts.count / perPages))
    pagination();

    astronauts.results.forEach((astronaut) => {
        addAstronaut(astronautList, astronaut)
    })
})

// Update pagination information
const pagination = () => {
    const preDisable = (current == 1 ? "disabled" : "");
    const nextDisable = (current == totalPages ? "disabled" : "");
    paginationContainer.innerHTML = `<li class="page-item ${preDisable}">
                                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true" data-op="pre">Previous</a>
                                    </li>
                                        <li class="page-item">${current} / ${totalPages}</li>
                                    <li class="page-item ${nextDisable}">
                                        <a class="page-link" href="#" data-op="next">Next</a>
                                    </li>`;
}

// Change page
paginationContainer.addEventListener("click", (e) => {
    if (e.target.dataset.op == "next") {
        current++;
        astronautList.innerHTML = "";
        getAstronautsWithOffset((current-1) * perPages)
            .then((astronauts) => {
                astronauts.results.forEach((astronaut) => {
                    addAstronaut(astronautList, astronaut);
                })
        })
    }
    else if (e.target.dataset.op == "pre") {
        current--;
        astronautList.innerHTML = "";
        getAstronautsWithOffset((current-1) * perPages)
            .then((astronauts) => {
                astronauts.results.forEach((astronaut) => {
                    addAstronaut(astronautList, astronaut);
                })
        })
    }
    //
    pagination();
});
