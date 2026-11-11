import { channelsData } from "./api.js";

let channels = [];
let FilterCh = [];
const channel = document.getElementById('channel');
const popout = document.getElementById("popout-page");
const openButton = document.getElementById("open-popout");
const closeButton = document.getElementById("close-popout");

async function getData() {
    const data = await channelsData();
    console.log("main:  ",data);
    displayChannels(data);
}
getData();
function displayChannels(List) {
    channel.innerHTML = List.map((ch) => {
        return `<li class="flex flex-row cursor-pointer gap-0.5 bg-blue-900 text-white h-20 w-full border border-white" data-id="${ch.id}">
                  <div class="flex flex-row gap-2 w-full items-center">
                     <img src="${ch.logo}" alt="${ch.name}"></img>
                     <p>${ch.name}</p>
                  </div>
                </li>`;
    }).join('');    
}

function openPopout() {
    popout.hidden = false;
}

function closePopout() {
    popout.hidden = true;
}
openButton.addEventListener("click", openPopout);
closeButton.addEventListener("click", closePopout);
popout.addEventListener("click", function (event) {
    if (event.target === popout) {
        closePopout();
    }
});
