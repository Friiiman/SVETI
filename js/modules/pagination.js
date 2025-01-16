export function pagination(){
    const content = document.querySelector('.products__product-cards');
    const itemsPerPage = 12;
    let currentPage = 0;
    const items = Array.from(content.getElementsByTagName('article')).slice(0);

    function showPage(page) {
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        items.forEach((item, index) => {
            item.classList.toggle('pagination--hidden', index < startIndex || index >= endIndex);
        });
        updateActiveButtonStates();
    }

    function createPageButtons() {
        const totalPages = Math.ceil(items.length / itemsPerPage);
        const paginationDiv = document.querySelector('.pagination');

        for (let i = 0; i < totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.classList.add('pagination__button');
            pageButton.textContent = i + 1;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                showPage(currentPage);
                updateActiveButtonStates();
                window.scrollTo(0, 0);
            });

            paginationDiv.appendChild(pageButton);
        }
    }

    function updateActiveButtonStates() {
        const pageButtons = document.querySelectorAll('.pagination button');
        pageButtons.forEach((button, index) => {
            if (index === currentPage) {
                button.classList.add('pagination__button--active');
            } else {
                button.classList.remove('pagination__button--active');
            }
        });
    }

    createPageButtons();
    showPage(currentPage);
}
