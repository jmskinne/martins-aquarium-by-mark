import { useFish } from "./FishDataProvider.js"
import { Fish } from "./fish.js"



export const FishList = () => {
    const contentElement = document.querySelector(".container-left")

    const fishes = useFish()

    contentElement.innerHTML += `
        <article class="fishes">
            ${fishes.map(fish => Fish(fish))}
        </article>

    `
}
