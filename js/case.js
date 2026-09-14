const caseList = document.getElementById("case-list");

if (caseList) {
    caseList.innerHTML = owned.map(system => {
        const { case: caseName, image } = system;

        return `
            <article class="case-card">

                ${image ? `
                    <img
                        src="${image}"
                        alt="${caseName || "Computer case"}"
                    >
                ` : ""}

                <h3>${caseName || "Not listed"}</h3>

            </article>
        `;
    }).join("");
}