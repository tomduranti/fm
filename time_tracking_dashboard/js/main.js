let dataset;

async function getDataFromJSON() {
    await fetch('js/data.json')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            dataset = data;
        })
}

function pluralizeString(int) {
    let string;
    int <= 1 ? string = "hr" : string = "hrs";
    return int + string;
}

const previousTimeframeNames = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month",
}

document.addEventListener("DOMContentLoaded", async () => {

    const periodSelectors = document.querySelectorAll(".period_selectors");
    const dataActivityElements = document.querySelectorAll("[data-activity]");
    const defaultStateOnLoad = document.getElementById("default_data_onload");

    await getDataFromJSON();

    //default state to show on page load
    //TODO use a function instead
    for (const obj of dataset) {
        const match = [...dataActivityElements].find(dataAttrElement =>
            dataAttrElement.dataset.activity.toLowerCase() === obj.title.toLowerCase());
        const matchCurrentHour = match.querySelector(".current_hours");
        const matchPreviousEvent = match.querySelector(".previous_events");
        const matchPreviousHour = match.querySelector(".previous_hours");

        matchCurrentHour.textContent = pluralizeString(obj.timeframes[defaultStateOnLoad.textContent.toLowerCase()].current);
        matchPreviousEvent.textContent = previousTimeframeNames[defaultStateOnLoad.dataset.timeframe];
        matchPreviousHour.textContent = pluralizeString(obj.timeframes[defaultStateOnLoad.textContent.toLowerCase()].previous);
    }

    //load data after you click
    periodSelectors.forEach((periodSelector) => {
        periodSelector.addEventListener("click", () => {

            //TODO add a focus on the clicked button

            for (const obj of dataset) {
                //matches JSON obj.title with html data- element 
                const match = [...dataActivityElements].find(dataAttrElement =>
                    dataAttrElement.dataset.activity.toLowerCase() === obj.title.toLowerCase());
                const matchCurrentHour = match.querySelector(".current_hours");
                const matchPreviousEvent = match.querySelector(".previous_events");
                const matchPreviousHour = match.querySelector(".previous_hours");

                matchCurrentHour.textContent = pluralizeString(obj.timeframes[periodSelector.textContent.toLowerCase()].current);
                matchPreviousEvent.textContent = previousTimeframeNames[periodSelector.dataset.timeframe];
                matchPreviousHour.textContent = pluralizeString(obj.timeframes[periodSelector.textContent.toLowerCase()].previous);
            }
        })
    })
})