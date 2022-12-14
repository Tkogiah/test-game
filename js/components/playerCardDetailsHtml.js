import { $ } from "./quickFunctions.js";

export function cardDetails() {
    return (`
        <div id='card-details' class="card-details">
            <h4 id='title' style='font-size: 35px'>
            <h4>
            <p id='description' style='font-size: 20px'>
            </p>
            <div id='action' class="row center container">
            </div>
        </div>
    `);
}

export function refreshCardDetails() {
    let title = $('title')
    let description = $('description')
    let action = $('action')
    title.innerText = ''
    description.innerText = ''
    action. innerText = ''
}
