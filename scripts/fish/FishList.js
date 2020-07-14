import { useFish } from "./FishDataProvider.js"
import { Fish } from "./fish.js"



export const FishList = () => {
    const contentElement = document.querySelector(".container-left")

    const fishes = useFish()

    let fishHTMLRepresentation = ""
    for(const currentFishObj of fishes) {
        fishHTMLRepresentation += Fish(currentFishObj)
    }

    contentElement.innerHTML += `
        <article class="fishes">
            ${fishHTMLRepresentation}
        </article>

    `
}
