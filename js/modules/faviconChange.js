export function faviconChange(newFaviconHref) {
    const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (darkThemeMediaQuery.matches) {
        findAndChangeFavicon(newFaviconHref);
    }

    function findAndChangeFavicon(newHref) {
        const links = document.getElementsByTagName('link');
        for (let i = 0; i < links.length; i++) {
            const rel = links[i].getAttribute('rel');
            if (rel && (rel.includes('icon') || rel.includes('shortcut'))) {
                links[i].href = newHref;
                return;
            }
        }
    }
}