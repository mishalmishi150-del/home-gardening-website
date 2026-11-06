function searchHome(event) {
    event.preventDefault();

    const searchInput = document.getElementById("homeSearch");
    const searchText = searchInput.value.trim().toLowerCase();

    if (searchText === "") {
        alert("Please enter something to search.");
        return;
    }

    const articles = [
        {
            keywords: ["balcony garden", "small balcony garden", "balcony plants"],
            url: "articles/article1.html"
        },
        {
            keywords: ["easy plants for beginners", "easy plants", "beginner plants"],
            url: "articles/article2.html"
        },
        {
            keywords: ["decorate your home with plants", "decorating with plants", "plants decoration"],
            url: "articles/article3.html"
        },
        {
            keywords: ["vegetable gardening", "healthy vegetables", "grow vegetables", "vegetable garden"],
            url: "articles/article4.html"
        },
        {
            keywords: ["seasonal gardening", "seasonal tips", "gardening every season"],
            url: "articles/article5.html"
        },
        {
            keywords: ["garden care", "gardening tips", "garden", "gardening", "outdoor garden"],
            url: "gardening-tips.html"
        },
        {
            keywords: ["home decor", "home decoration", "home care", "living room", "room decoration", "interior design"],
            url: "home-decor.html"
        },
        {
            keywords: ["plant care", "indoor plants", "indoor plant", "plants", "house plants", "plant"],
            url: "plant-care.html"
        }
    ];

    const exactMatch = articles.find(article =>
        article.keywords.some(keyword => keyword === searchText)
    );

    const partialMatches = articles.flatMap(article =>
        article.keywords
            .filter(keyword =>
                searchText.length >= 4 &&
                (keyword.includes(searchText) || searchText.includes(keyword))
            )
            .map(keyword => ({
                url: article.url,
                length: keyword.length
            }))
    );

    const bestMatch = partialMatches.sort((a, b) => b.length - a.length)[0];

    if (exactMatch) {
        window.location.href = exactMatch.url;
    } else if (bestMatch) {
        window.location.href = bestMatch.url;
    } else {
        alert("No matching article found. Please try another keyword.");
    }
}