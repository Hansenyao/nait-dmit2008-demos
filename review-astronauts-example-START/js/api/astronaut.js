const BASE_URL = "https://lldev.thespacedevs.com/2.2.0"

// api functions here.
const getAstronauts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/astronaut`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching astronauts:", error);
        throw error;
    }
};
const getAstronautsWithOffset = async (offset) => {
    try {
        const response = await fetch(`${BASE_URL}/astronaut/?limit=10&offset=${offset}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching astronauts:", error);
        throw error;
    }
}
getAstronauts().then((data) => {
    console.log("getAstronauts");
    console.log(data);
});

const getAstronauts2 = async (callback) => {
    try {
        const response = await fetch(`${BASE_URL}/astronaut`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        callback(data);
    } catch (error) {
        console.error("Error fetching astronauts:", error);
        throw error;
    }
};
getAstronauts2((data) => {
    console.log("getAstronauts2");
    console.log(data);
});

const getAstronauts3 = async () => {
    return await fetch(`${BASE_URL}/astronaut`)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching astronauts:", error));
}
getAstronauts3().then(data => {
    console.log("getAstronauts3");
    console.log(data);
});

export {getAstronauts, getAstronautsWithOffset};