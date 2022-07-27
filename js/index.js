document.getElementById('btn').addEventListener('click',()=>{
    const inputCity = document.getElementById('input').value
    
   
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputCity +'&appid=9e1b3f7b168970d5da5e046114dc80f2')
    .then(request =>{
        if (!request.ok) {
            alert("No weather found.");
        }
        return request.json() 
    })
    .then(data => {
        const cityName = data.name;
        const tem = data.main.temp;
        const toCel = tem -273.15;
        const desc = data.weather[0].main;
       

        document.getElementById('city').innerText = cityName
        document.getElementById('temp').innerText = toCel.toFixed(2)
        document.getElementById('des').innerText = desc
    })
    document.getElementById('input').value = ""
})






