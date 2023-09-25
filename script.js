
const parent = document.createElement('div');
parent.setAttribute('class','row row-cols-1 row-cols-sm-3');
const data = fetch("https://restcountries.com/v3.1/all").then((response)=> response.json()).then(data=>data.map((values)=>{
const valuess = document.createElement('div');
valuess.setAttribute('class','col mb-4');
valuess.innerHTML= `<div class="card h-100">
    <h4>${values.name.common}</h4>
    <img src="${values.flags.png}" class="card-img-top" alt="...">
    <div class="card-body">
      <h6 class="card-title">Capital : ${values.capital}</h6>
      <h6 class="card-title">Region : ${values.region}</h6>
      <h6 class="card-title">Country Code : ${values.cca3}</h6>
      <button class="btn btn-primary") value=${values.capital} onclick=checkWeather(value)>Check For Weather</button>
    </div>
  </div>`
parent.appendChild(valuess);
console.log(values);
})).catch(error => error.message);
document.body.append(parent);
const tempDetails = document.createElement('p');
const card = document.querySelector('.mb-4');
console.log(tempDetails);
const checkWeather =async (data)=> {
      try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=ae3f114c97cf13693a8d6de6cdcf0f03`)
      const obj = await response.json();
      console.log(obj);
      tempDetails.innerHTML = `
          <p>Temp:${obj.main.temp}</p>
          <p>Min_temp:${obj.main.temp_min}</p>
          <p>Max_Temp:${obj.main.temp_max}</p>
          <p>Humidity:${obj.main.humidity}</p>
          <p>Max_Temp:${obj.main.temp_max}</p>
          <p>Pressure:${obj.main.pressure}</p>
      `
      const cardElement = document.querySelector(`[value=${data}`).parentElement;
      cardElement.insertAdjacentElement("beforeend",tempDetails); 
      }
      catch(error){
        console.log(error.message);
      }
}


