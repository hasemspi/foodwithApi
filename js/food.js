const loadFood = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => getFood(data.meals))
}

const getFood = (Items) => {
    const Maindiv = document.getElementById('food');
    Maindiv.innerHTML = ``;
    //  for (const item of Items) {
    Items.forEach(item => {

        // });
        const fodDiv = document.createElement('div');
        fodDiv.classList.add('col-sm-4', 'style');
        fodDiv.innerHTML = `
        <div class="card" onclick="getfooddetails(${item.idMeal})">
        <img src="${item.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <span>OrderID ${item.idMeal}</span>
            <h5 class="card-title">${item.strMeal}</h5>
            <p class="card-text">${item.strInstructions}</p>
        </div>
    </div>
        
        `;
        Maindiv.appendChild(fodDiv);
        // }
        //  console.log(item)
    });
}

const searchfood = () => {
    const getvalue = document.getElementById('searchButton');
    const getresult = getvalue.value;
    loadFood(getresult);
    //console.log(getresult);
}


const getfooddetails = details => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`;
    //console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => fooddisplay(data.meals));
}
const fooddisplay = (displayFood) => {
    const disdiv = document.getElementById('displayfood');
    disdiv.innerHTML = ``;
    for (const food of displayFood) {
        const div = document.createElement('div');
        div.classList.add('col-md-2', 'detailsstyle', 'mx-auto');
        div.innerHTML = `

        <div class="card text-center">
        <div class="card-header">
        ${food.idMeal}
        </div>
        <div class="card-body">
        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <h5 class="card-title">${food.strMeal}</h5>
        </div>
     
        </div>
           
        `;
        disdiv.appendChild(div);
    }


    // console.log(displayFood.strMeal);
}

loadFood('a');