const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

let lastFocusedElement;

function openModal() {
    lastFocusedElement = document.activeElement;
    modal.hidden = false;
    closeModalBtn.focus();
}

function closeModal() {
    modal.hidden = true;
    lastFocusedElement.focus();
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) {
        closeModal();
    }
});
