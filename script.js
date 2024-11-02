// Event details data
const eventsData = {
    newYearEve: {
        title: "New Year's Eve in Times Square",
        description: "Celebrate the New Year with the iconic ball drop and an incredible atmosphere in Times Square, New York City."
    },
    mardiGras: {
        title: "Mardi Gras in New Orleans",
        description: "Experience the vibrant and colorful celebrations of Mardi Gras with parades, music, and costumes in New Orleans."
    },
    coachella: {
        title: "Coachella Festival",
        description: "Join one of the biggest music and arts festivals in the world, held annually in California's Coachella Valley."
    },
    independenceDay: {
        title: "Independence Day in Washington, D.C.",
        description: "Celebrate America’s Independence Day with fireworks, parades, and events in the nation’s capital."
    }
};

// Show event information in a popup
function showEventInfo(eventKey) {
    const eventPopup = document.getElementById("event-info-popup");
    const eventTitle = document.getElementById("event-title");
    const eventDescription = document.getElementById("event-description");

    eventTitle.textContent = eventsData[eventKey].title;
    eventDescription.textContent = eventsData[eventKey].description;
    eventPopup.style.display = "block";
}

// Close event information popup
function closeEventInfo() {
    document.getElementById("event-info-popup").style.display = "none";
}