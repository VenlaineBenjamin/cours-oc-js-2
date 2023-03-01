// Create Object here
// =========================================
let episode = {
    title: "The Empty Child",
    duration: 50,
    hasBeenWatched: true,
};
// =========================================

document.querySelector("#episode-info").innerText = `Episode: ${episode.title}
Duration: ${episode.duration} min
${episode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;
