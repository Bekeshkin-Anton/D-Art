document.addEventListener('DOMContentLoaded', ()=> {
    const details = document.querySelectorAll('.details');
    const form = document.querySelector('.form')
    for (const detailsBtn of details) {
        detailsBtn.addEventListener('click', () => {
            form.style.display = 'flex';
        })
    }
    const popups = document.querySelectorAll('.form');
    popups.forEach((popup) => {
        popup.addEventListener('click', (event) => {
            const target = event.target;
            const popupForm = target.closest('.form-content');
            if (!popupForm) {
                form.style.display = '';
            }
        })
    })

})