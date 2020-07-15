export const Location = (locationObj) => {
    return `
        <section class="location card">
            <div class="location__image"><img class="card--image" src="${locationObj.image}"></div>
            <div class="location__name">${locationObj.name}</div>
            <div class="location__url">${locationObj.locationurl}</div>
            <div class="location__desc">${locationObj.description}</div>
        </section>
    `
}