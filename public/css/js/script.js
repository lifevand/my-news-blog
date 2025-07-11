document.addEventListener('DOMContentLoaded', () => {
    const articlesContainer = document.getElementById('articles-container');

    // Data contoh artikel. Ganti dengan artikel nyatamu.
    // Pastikan path gambar dan file HTML artikel benar.
    const articlesData = [
        {
            id: 'ai-transformasi',
            title: 'The Rise of AI in Everyday Life',
            summary: 'Artificial Intelligence is rapidly transforming various aspects of our daily routines...',
            image: 'public/images/ai-news.jpg',
            date: 'October 26, 2024',
            author: 'Jane Doe',
            file: 'articles/the-rise-of-ai.html'
        },
        {
            id: 'gaming-gadget',
            title: 'Top 5 Gaming Gadgets of 2024',
            summary: 'Explore the cutting-edge technology defining the future of gaming...',
            image: 'public/images/gaming-gadget.jpg',
            date: 'October 25, 2024',
            author: 'John Smith',
            file: 'articles/top-gaming-gadgets.html'
        },
        {
            id: 'future-of-crypto',
            title: 'The Future of Cryptocurrency: What to Expect',
            summary: 'A deep dive into the evolving landscape of digital currencies and blockchain technology.',
            image: 'public/images/crypto-future.jpg', // Contoh gambar baru
            date: 'October 24, 2024',
            author: 'Alice Wonderland',
            file: 'articles/future-of-crypto.html'
        }
        // Tambahkan artikel lainnya di sini
    ];

    function loadArticles() {
        if (!articlesContainer) return;

        articlesData.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.classList.add('article-card');
            articleCard.innerHTML = `
                <img src="${article.image}" alt="${article.title}">
                <div class="article-card-content">
                    <h3>${article.title}</h3>
                    <p>${article.summary}</p>
                    <a href="${article.file}" class="read-more">Read More</a>
                </div>
            `;
            articlesContainer.appendChild(articleCard);
        });
    }

    loadArticles();
});