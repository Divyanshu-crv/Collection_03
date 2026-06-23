/* ==========================
   SEARCH
========================== */

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener(
    "input",
    handleSearch
);

function handleSearch(){

    const value =
    searchInput.value
    .toLowerCase()
    .trim();

    if(value === ""){

        renderCards(sections);

        return;
    }

    const filteredSections =
    sections.filter(section=>{

        if(
            section.title
            .toLowerCase()
            .includes(value)
        ){
            return true;
        }

        return section.categories.some(category=>{

            if(
                category.title
                .toLowerCase()
                .includes(value)
            ){
                return true;
            }

            return category.subcategories.some(sub=>{

                if(
                    sub.title
                    .toLowerCase()
                    .includes(value)
                ){
                    return true;
                }

                return sub.items.some(item=>

                    item.name
                    .toLowerCase()
                    .includes(value)

                );

            });

        });

    });

    renderCards(filteredSections);

}