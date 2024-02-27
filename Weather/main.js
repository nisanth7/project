let result = document.getElementById("result");

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      window.alert("Geolocation is not supported by your browser.")
    }
  }

function showPosition(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    let url = `http://api.weatherapi.com/v1/current.json?key=a5e7d848245a4f739c981933230905&q=${lat},${long}`;
    fetch(url).then((res)=>res.json()).then((data)=>{
      console.log(data);
        
        let country = data.location.country;
        let region = data.location.name;
        let celcius = data.current.temp_c;
        let update = data.current.last_updated;
        let time = data.location.localtime;
        result.innerHTML = `<div class="align"><div class="straight"><i class='bx bx-world'></i><h3>${region},${country}</h3></div>
        <div class="straight"><i class='bx bx-cloud'></i><h3>${celcius} c</h3></div>
        <div class="straight"><h3><span>Last Updated :</span> ${update}</h3></div>
        <div class="straight"><h3><span>Local Time :</span> ${time}</h3></div></div>`;
        
})
}


function getLoc(){
    let userinp = document.getElementById("search").value;
    let url = `http://api.weatherapi.com/v1/current.json?key=a5e7d848245a4f739c981933230905&q=${userinp}`;

    fetch(url).then((res)=>res.json()).then((data)=>{
        let country = data.location.country;
        let region = data.location.name;
        let celcius = data.current.temp_c;
        let update = data.current.last_updated;
        let time = data.location.localtime;
        result.innerHTML = `<div class="align"><div class="straight"><i class='bx bx-world'></i><h3>${region},${country}</h3></div>
        <div class="straight"><i class='bx bx-cloud'></i><h3>${celcius} c</h3></div>
        <div class="straight"><h3><span>Last Updated :</span> ${update}</h3></div>
        <div class="straight"><h3><span>Local Time :</span> ${time}</h3></div></div>`;
        
    }).catch(()=>{
        window.alert("Please enter a valid input");
    })
}



let mode = document.getElementById("mode");

mode.addEventListener("click",()=>{
  
    
  var element = document.body;
  element.classList.toggle("dark-mode");
  
  
  
  
})

/*document.getElementById("whole").style.background = "rgb(34,34,34)";
    document.getElementById("whole").style.background = "linear-gradient(257deg, rgba(34,34,34,1) 0%, rgba(51,51,51,1) 49%, rgba(34,34,34,1) 100%)";
    para.style.color = "#a6a6a6";
    lowbtn.style.background = "#444444";
    lowbtn.style.color = "#fff";
    highbtn.style.background = "#444444";
    highbtn.style.color = "#fff";
    mode.style.background = "#444444";
    mode.style.color = "#fff";
  */