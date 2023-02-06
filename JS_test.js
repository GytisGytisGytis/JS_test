
// 48_pamoka
// 1 uzduotis


// const inputs = document.querySelectorAll("input")
// const btnGet = document.querySelector('#btnGet')
// const btnFilter = document.querySelector("#btnFilter")
// const box2 = document.querySelector(".box2")
// const box1 = document.querySelector(".box1")
// const main = document.querySelector(".main")
// const card1 = document.querySelector(".card1")
// const card2 = document.querySelector(".card2")

//
// let someActivities = {}
// let list = []
//
// console.log("some")
//
// btnGet.onclick = () => {
//
//     fetch("https://www.boredapi.com/api/activity")
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             someActivities = data
//             addActivities(data)
//         })
// }
//
//
// function addActivities(data) {
//     card1.innerHTML = ""
//     card1.innerHTML = `
//
//             <h3>Activity: ${data.activity}</h3>
//             <h3>Type: ${data.type}</h3>
//             <h3>Participants: ${data.participants}</h3>
//             <h3>Price: ${data.price}</h3>
//             <div>Link: ${data.link}</div>
//
//     `
//     const btnAdd = document.getElementById('btnAdd')
//
//     btnAdd.onclick = () => {
//         let item = list.find(obj => obj.key === data.key)
//         if(item) return
//
//         list.push(someActivities)
//         addToList(list)
//     }
// }
//
//
//
// function addToList(data) {
//     box2.innerHTML = ""
//
//     data.map(data => {
//         box2.innerHTML += `
//
//         <div class="card2 d-flex">
//             <div class="d-flex flex3 flex-column">
//                 <h5>Activity: ${data.activity}</h5>
//                 <h5>Type: ${data.type}</h5>
//                 <h5>Participants: ${data.participants}</h5>
//                 <h5>Price: ${data.price}</h5>
//                 <div>Link: ${data.link}</div>
//             </div>
//
//             <div class="btnDelete d-flex flex-column j-center">
//                 <button id="$(data.key)" class="btnDelete">Delete</button>
//             </div>
//         </div>
//
//     `
//
//         let link = data.link
//         if(link !== ""){
//             document.getElementById("link").innerHTML = `${data.link}`
//         }
//
//     })
//
//
//     btnFilter.onclick = () => {
//
//         let type = inputs[0].value
//         let participants = Number(inputs[1].value)
//         let price = Number(inputs[2].value)
//
//         let result = list
//
//         if (type) result = list.filter(data => data.type === type)
//         if (inputs[1].value) result = result.filter(data => data.participants === participants)
//         if (inputs[2].value) result = result.filter(data => data.price === price )
//
//         addToList(result)
//
//         inputs[0].value = ""
//         inputs[1].value = ""
//         inputs[2].value = ""
//
//     }
//
//
//
//     const btnDelete = document.querySelectorAll(".btnDelete");
//
//     btnDelete.forEach(btn => {
//         btn.onclick = (event) => {
//             const key = event.target.id
//             list = list.filter(data => data.key !== key)
//             addToList(list)
//         }
//
//     })
//
// }
//
//












// 49_pamoka
// 1 uzduotis
// Cards game


// git add . (add files which was edited)
// git commit -m "messge" (create commit with message)
//     git push (push code to remote)


const main = document.querySelector(".main")
const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const btn = document.querySelector('button')

let someCards = {}
let cards = []


btn.onclick = () => {

    fetch("https://www.boredapi.com/api/activity")
        .then(res => res.json())
        .then(data => {
            console.log("some")
            // someActivities = data
            // addActivities(data)
        })
}




