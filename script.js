
// Target main element
//const main = document.getElementById("main");


function toFetch(){
    const fetchPromise = fetch('https://randomuser.me/api/?results=5');

    try{
        fetchPromise.then(response => {
            return response.clone().json();
        }).then(people => {
            for (var i = 0; i<5; i+=1){
                var ID = "data" + (i+1).toString(); 
                var main = document.getElementById(ID);
                main.querySelector("#Image").src = people.results[i].picture.large;
                //var element = main.querySelector("#State");
                main.querySelector("#State").textContent = people.results[i].location.state;
                main.querySelector("#Postcode").textContent = people.results[i].location.postcode;
                main.querySelector("#Phone").textContent = people.results[i].phone;
                main.querySelector("#Name").textContent = people.results[i].name.first + " " + people.results[i].name.last;            
            }
        });
        document.getElementById("Check").textContent = "Success!"
        }
    catch
    {
        document.getElementById("Check").textContent = "Something went wrong!"
    }
}