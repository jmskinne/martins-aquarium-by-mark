import { useLocation} from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () => {
    const contentElement = document.querySelector(".container-left")

    const locations = useLocation()

    contentElement.innerHTML += `
        <article class="locations">
            ${locations.map(location => Location(location))}
        </article>
    `
}