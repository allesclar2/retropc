const soundList = document.getElementById("sound-list");

if (soundList) {
    soundList.innerHTML = owned.map(system => {
        const { sound } = system;

        return `
            <article class="sound-card">

                ${
                    sound.image
                        ? `
                            <img
                                src="${sound.image}"
                                alt="${sound.name}"
                                class="sound-image"
                            >
                        `
                        : `
                            <div class="sound-image-placeholder">
                                No image available
                            </div>
                        `
                }

                <h3>${sound.name}</h3>

                <p>
                    <strong>Manufacturer:</strong>
                    ${sound.manufacturer || "Not listed"}
                </p>

                <p>
                    <strong>Released:</strong>
                    ${sound.released || "Not listed"}
                </p>

                <p>
                    <strong>Interface:</strong>
                    ${sound.Interface || "Not listed"}
                </p>

                <p>
                    ${
                        sound.url
                            ? `
                                <a
                                    href="${sound.url}"
                                    class="site-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View sound details
                                </a>
                            `
                            : ""
                    }
                </p>

            </article>
        `;
    }).join("");
}