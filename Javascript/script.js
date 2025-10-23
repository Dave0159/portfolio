// Menunggu DOM (struktur HTML) selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

    // Ambil elemen yang dibutuhkan
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    // Cek apakah elemen-elemen ada
    if (hamburgerBtn && navLinks) {
        
        // Tambahkan event listener 'click' ke tombol hamburger
        hamburgerBtn.addEventListener('click', () => {
            
            // Toggle class 'active' pada kedua elemen
            navLinks.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');

            // Untuk aksesibilitas (memberitahu screen reader apakah menu terbuka)
            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
        });
    }

});
