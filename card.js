const filterButton = document.querySelector(".btnFilter")
filterButton.onclick = () => {
    showList()
}
let recipes = localStorage.getItem('recipes')
if (recipes) {
    recipes = JSON.parse(recipes)
}

function showList() {
    let titleFilter = document.querySelector("#title").value
    let descriptionFilter = document.querySelector("#description").value
    let caloriesFilter = document.querySelector("#calories").value

    let container = document.querySelector(".container")


    container.innerHTML = ''
    recipes.map(item => {
        if (filterItem(item, titleFilter, descriptionFilter, caloriesFilter)) {
            container.innerHTML += `
                <div class="box d-flex flex-column">
                    <div class="d-flex">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="d-flex flex-column mt20">
                        <h5>Title:  ${item.title} </h5>
                        <h5>Description: ${item.description} </h5>
                        <h5>Ingredient:  ${item.ingredient} </h5>
                        <h5>Calories:  ${item.calories}</h5>
                    </div>
                </div>`
        }
    })
}

function filterItem(item, titleFilter, descriptionFilter, caloriesFilter) {
    if (!titleFilter && !descriptionFilter && !caloriesFilter) {
        return true
    }
    if (titleFilter && titleFilter === item.title) {
        return true
    }
    if (descriptionFilter && descriptionFilter === item.description) {
        return true
    }
    if (caloriesFilter && caloriesFilter === item.calories) {
        return true
    }
    return false
}

showList()