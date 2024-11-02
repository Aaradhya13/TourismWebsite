const destinationData = {
    newyork: {
        title: "New York City",
        description: "Explore the vibrant city of New York, known for its iconic skyline, Central Park, and world-class museums."
    },
    grandcanyon: {
        title: "Grand Canyon",
        description: "Marvel at the Grand Canyon, a breathtaking natural wonder carved by the Colorado River."
    },
    yellowstone: {
        title: "Yellowstone",
        description: "Discover Yellowstone National Park, home to geysers, hot springs, and diverse wildlife."
    },
    hawaii: {
        title: "Hawaii",
        description: "Enjoy the tropical paradise of Hawaii with its stunning beaches, volcanoes, and rich culture."
    }
};

function showInfo(destination) {
    const infoPopup = document.getElementById("destination-info");
    const title = document.getElementById("info-title");
    const description = document.getElementById("info-description");

    title.textContent = destinationData[destination].title;
    description.textContent = destinationData[destination].description;
    infoPopup.style.display = "block";
}

function closeInfo() {
    document.getElementById("destination-info").style.display = "none";
}