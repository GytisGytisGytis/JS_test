

const box1 = document.querySelector(".box1")
const inputs = document.querySelectorAll("input")
const btnPreview = document.getElementById(`btnPreview`)
const getBtn = document.getElementById(`getBtn`)
const addBtn = document.getElementById(`addBtn`)
const error = document.getElementById(`error`)


let imageLink = ""
let item = null
let ingredientList = []


addBtn.onclick = () => {
    let ingredient = inputs[1].value
    if (ingredient) {
        ingredientList.push(ingredient)
        inputs[1].value = ''

    } else {
        error.innerText = '(You must add at least 3 ingredients)'
    }
}


getBtn.onclick = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(data => {
            let url = data.meals[0]['strMealThumb']
            console.log(url)
            imageLink = url
        })
}



btnPreview.onclick = () => {
    item = {
        title: inputs[0].value,
        ingredient: ingredientList,
        description: inputs[2].value,
        calories: inputs[3].value,
        image: imageLink,
    }

    console.log(item)

    if (ingredientList.length >= 3)
        getPreview()
    else {
        error.innerText = '(You must add at least 3 ingredients)'
    }

}

function getPreview() {
    error.innerText = ''
    box1.innerHTML = ""
    let htmlList = item.ingredient.map(element => `<h5>${element}</h5>`).join('')
    box1.innerHTML = `
        <div class="d-flex flex-column">
            <div class="d-flex">
                <img src=${item.image} alt="">
                <div class="d-flex mt10 flex-column">
                    <h5>Title: ${item.title}</h5>
                    <h5>Description: ${item.description}</h5>
                </div>
    
            </div>
            <div class="d-flex flex-column">                     
                <h5>Ingredients: ${htmlList}</h5>
            </div>
            <div>
                <h5>Calories: ${item.calories}</h5>
            </div>
            <div class="d-flex flex-column mt70">
                <button class="btnList" id="btnList">ADD RECIPE TO LIST</button>
            </div>
        </div>
        `
    const btnList = document.getElementById(`btnList`)
    console.log(btnList)
    btnList.onclick = () => {
        let recipes = localStorage.getItem('recipes')
        if (recipes) {
            recipes = JSON.parse(recipes)
        }else{
            recipes = []
        }
        recipes.push(item)
        console.log('Added')
        localStorage.setItem('recipes', JSON.stringify(recipes))
    }
}


















