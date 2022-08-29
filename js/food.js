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
        <div class="card">
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
        console.log(item)
    });
}

const searchfood = () => {
    const getvalue = document.getElementById('searchButton');
    const getresult = getvalue.value;
    loadFood(getresult);
    //console.log(getresult);
}