document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page');
    let currentPage = document.querySelector('.page.active');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').replace('.html', '');
            const targetPage = document.getElementById(targetId);

            if (currentPage !== targetPage) {
                pages.forEach(page => {
                    page.classList.remove('active');
                });

                targetPage.classList.add('active');
                currentPage = targetPage;
            }
        });
    });

    // Set the Home page as the initial active page
    document.getElementById('home').classList.add('active');
});
