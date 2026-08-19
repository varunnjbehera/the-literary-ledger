async function initSearch() {
    try {
        const response = await fetch('/');
        // We need to fetch the JSON version of the homepage
        const jsonResponse = await fetch('/index.json');
        const data = await jsonResponse.json();
        
        const fuse = new Fuse(data, {
            keys: ['title', 'summary', 'genre'],
            threshold: 0.3
        });
        
        window.bookSearch = fuse;
        console.log("Search index loaded successfully");
    } catch (e) {
        console.error("Search index failed to load", e);
    }
}

function toggleSearch() {
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('search-input');
    modal.classList.toggle('hidden');
    if (!modal.classList.contains('hidden')) {
        input.focus();
    }
}

async function performSearch(query) {
    if (!query) return [];
    
    // Handle race condition: if index isn't loaded yet, wait for it or return empty
    if (!window.bookSearch) {
        console.warn("Search index not yet initialized. Attempting to wait...");
        // Simple retry mechanism: wait 100ms and try once more
        await new Promise(resolve => setTimeout(resolve, 100));
        if (!window.bookSearch) {
            return [];
        }
    }
    
    return window.bookSearch.search(query).map(result => result.item);
}

initSearch();
