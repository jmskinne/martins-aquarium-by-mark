import { useLocation} from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () => {
    const contentElement = document.querySelector(".container-left")

    const locations = useLocation()

    let locationHTMLRep = ""
    for(const locationObj of locations) {
        locationHTMLRep += Location(locationObj)
    }

    contentElement.innerHTML += `
        <article class="locations">
            ${locationHTMLRep}
        </article>
    `
}