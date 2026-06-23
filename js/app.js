/* ==========================
   ELEMENTS
========================== */

const cardContainer =
document.getElementById("cardContainer");

const quickAccessContainer =
document.getElementById("quickAccessContainer");

const sectionCount =
document.getElementById("sectionCount");

const linkCount =
document.getElementById("linkCount");

const commandCount =
document.getElementById("commandCount");


/* ==========================
   QUICK ACCESS
========================== */

function renderQuickAccess(){

    quickAccessContainer.innerHTML = "";

    quickAccess.forEach(item=>{

        const link =
        document.createElement("a");

        link.className = "quick-link";

        link.href = item.url;

        link.target = "_blank";

        link.textContent = item.name;

        quickAccessContainer.appendChild(link);

    });

}


/* ==========================
   CARDS
========================== */

function renderCards(data = sections){

    cardContainer.innerHTML = "";

    data.forEach(section=>{

        const card =
        document.createElement("div");

        card.className = "resource-card";

        let totalResources = 0;

        if(section.categories){

            section.categories.forEach(category=>{

                category.subcategories.forEach(sub=>{

                    totalResources +=
                    sub.items.length;

                });

            });

        }

        card.innerHTML = `
            <h3>
                ${section.icon}
                ${section.title}
            </h3>

            <p>
                ${totalResources}
                Resources
            </p>
        `;

        card.addEventListener(
            "click",
            ()=>{
                openModal(section);
            }
        );

        cardContainer.appendChild(card);

    });

}


/* ==========================
   STATS
========================== */

function renderStats(){

    sectionCount.textContent =
    sections.length;

    let totalLinks = 0;

    sections.forEach(section=>{

        if(section.categories){

            section.categories.forEach(category=>{

                category.subcategories.forEach(sub=>{

                    totalLinks +=
                    sub.items.length;

                });

            });

        }

    });

    linkCount.textContent =
    totalLinks;

    commandCount.textContent =
    totalLinks;

}


/* ==========================
   START APP
========================== */

renderQuickAccess();
renderCards();
renderStats();