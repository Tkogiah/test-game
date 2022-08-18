export function modalDisplay(modalHtml) {
    const container = document.createElement('div');
    container.classList.add('modal-main');
    container.id = 'modal';
    container.innerHTML = modalHtml;
    document.getElementById('hexboard').appendChild(container);
}
