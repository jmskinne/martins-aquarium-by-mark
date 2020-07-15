import { useTips } from "./TipDataProvider.js"
import { Tip } from "./Tip.js"

export const TipList = () => {
    const contentElement = document.querySelector(".container-right")

    const tips = useTips()

    let tipHTMLRep = ""
    for(const currentTipObj of tips) {
        tipHTMLRep += Tip(currentTipObj)
    }

    contentElement.innerHTML += `
        <aside class="tips">
            ${tipHTMLRep}
        </article>
    `
}
