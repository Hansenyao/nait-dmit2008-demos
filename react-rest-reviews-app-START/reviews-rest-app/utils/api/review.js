const REVIEWS_URL = " http://localhost:5000/reviews";

export const getReviews = async () => {
    try {
        const resp = await fetch(REVIEWS_URL);
        if (resp.ok) {
            return await resp.json();
        }
        else {
            throw new Error("Failed to get reviews");
        }
    } catch ( e ) {
        console.log(e.message);
    }
}

export const postReview = async ({title, comment, rating}) => {
    const resp = await fetch(REVIEWS_URL, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title,
            comment,
            rating
        })
    });

    if (resp.ok) {
        return await resp.json();
    } else {
        throw new Error("Fail to add");
    }
}

export const removeReview = async (id) => {
    const resp = await fetch(REVIEWS_URL + "/" + id, {
        method: "DELETE",
        headers: {
            'Content-Type' : 'application/json'
        }
    })

    if (resp.ok) {
        return await resp.json();
    } else {
        throw new Error("Failed to get reviews");
    }
}