/* ==========================
   MODAL ELEMENTS
========================== */

const modal =
document.getElementById("modal");

const modalTitle =
document.getElementById("modalTitle");

const modalBody =
document.getElementById("modalBody");

const closeModalBtn =
document.getElementById("closeModal");


/* ==========================
   OPEN MODAL
========================== */

function openModal(section){

    modal.classList.add("active");

    modalTitle.innerHTML =
    `${section.icon} ${section.title}`;

    let html = "";

    section.categories.forEach(category=>{

        html += `
            <div class="modal-section">

                <h2 style="margin-bottom:15px;">
                    ${category.title}
                </h2>
        `;

        category.subcategories.forEach(sub=>{

            html += `
                <div style="
                    margin-bottom:20px;
                    padding:15px;
                    border:1px solid var(--border);
                    border-radius:12px;
                ">

                    <h3 style="margin-bottom:10px;">
                        ${sub.title}
                    </h3>
            `;

            sub.items.forEach(item=>{

                html += `
                    <a
                        class="modal-link"
                        href="${item.url}"
                        target="_blank"
                    >
                        ${item.name}
                    </a>
                `;
            });

            html += `
                </div>
            `;

        });

        html += `
            </div>
        `;

    });

    modalBody.innerHTML = html;

}


/* ==========================
   CLOSE MODAL
========================== */

closeModalBtn.addEventListener(
    "click",
    ()=>{

        modal.classList.remove(
            "active"
        );

    }
);

modal.addEventListener(
    "click",
    (e)=>{

        if(e.target === modal){

            modal.classList.remove(
                "active"
            );

        }

    }
);