export const Fish = (fishObj) => {
    return `
        <section class="fish card">
                        <div><img class="card--image fish__image" src="${fishObj.image}"></div>
                            <div class="fish__container-info">
                               <div class="fish__name"> <b>Name:</b>  ${fishObj.name} </div>
                                <div class="fish__species"><b>Type:</b> ${fishObj.species}</div>
                                <div class="fish__length"><b>Size:</b> ${fishObj.length}</div>
                                <div class="fish__location"><b>Location:</b> ${fishObj.location}</div>
                                <div class="fish__diet"><b>Food:</b> ${fishObj.diet}</div>
                            </div>
        </section>
    `
}