const cpuList = document.getElementById("cpu-list");

if (cpuList) {
    cpuList.innerHTML = owned.map(system => {
        const { cpu } = system;

        return `
            <article class="cpu-card">

                ${
                    cpu.image
                        ? `
                            <img
                                src="${cpu.image}"
                                alt="${cpu.name}"
                                class="cpu-image"
                            >
                        `
                        : `
                            <div class="cpu-image-placeholder">
                                No image available
                            </div>
                        `
                }

                <h3>${cpu.name}</h3>

                <p>
                    <strong>Manufacturer:</strong>
                    ${cpu.manufacturer || "Not listed"}
                </p>

                <p>
                    <strong>Released:</strong>
                    ${cpu.released || "Not listed"}
                </p>

                <p>
                    <strong>Format:</strong>
                    ${cpu.format || "Not listed"}
                </p>

                <p>
                    <strong>Clockspeed:</strong>
                    ${cpu.clockspeed || "Not listed"}
                </p>
                                
                <p>
                                  ${
                    cpu.url
                        ? `
                            <a
                                href="${cpu.url}"
                                class="site-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View CPU details
                            </a>
                        `
                        : ""
                }
                </p>
        
            </article>
        `;
    }).join("");
}