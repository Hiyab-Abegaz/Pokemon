// defining the button by storing it class in button
const button = document.getElementById('pokeBall')
// defining the h1's for the information that is going to printed's class in Info
const Info2 = document.getElementById('Info1')
const Info1 = document.getElementById('Info2')
const Info3 = document.getElementById('Info3')
const Info4 = document.getElementById('Info4')
const abilitiesList = document.getElementById('abilitiesList')
const movesList = document.getElementById('moves')
// const Info5 = document.getElementById('Info5')
// defining the input 
const input = document.getElementById('input')
// connecting the enter key with the input box
input.addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById('pokeBall').click();
    }
})
// getting the api 
const getApi = () => {
   const apiURL = `https://pokeapi.co/api/v2/pokemon/${input.value.toLowerCase()}`
    axios.get(apiURL)
    .then(response => {
        
        const name = response.data.name
        const data = response.data
        const weight = response.data.weight
        const abilities = response.data.abilities
        const moves = response.data.moves
        // const sprites = response.data.sprites
        

        console.log(data)
        console.log( name)
        console.log(weight)
        console.log(abilities)

        
        // got the array and for each elemnt in the array it will for loop through
        // Follows this pattern: 
        // (name of Array).forEach(element =>{
            //do what ever you want to that element
        //})
        let h1 = document.createElement("h1");
        h1.innerHTML = "Abiliites: "
        abilitiesList.append(h1);
       
        abilities.forEach(element => {
            let h1 = document.createElement("h2")
            h1.innerHTML = element.ability.name + ""
            abilitiesList.append(h1)
            console.log("abilities: "+ element.ability.name)
            
        })
        let h2 = document.createElement("h1");
        h2.innerHTML = "Moves: "
        movesList.append(h2);
       
        moves.forEach(element => {
            let h2 = document.createElement("h2")
            h2.innerHTML = element.move.name + ""
            movesList.append(h2)
            console.log("Moves: "+ element.move.name)
            
        })
        


        Info1.innerText = "Name: " + name
        Info2.innerText = "Weight: " + weight
      //Info3.innerText = "Abilities: " + abilities
      //Info4.innerText = "Moves: " + moves
    })
    .catch(error => console.log(error));
}
// connecting the input to the console

// I am going to create a addEventListener so that when I click on it, it will print in the console
button.addEventListener('click', function(event){
    // console.log(input.value)
    document.getElementById("abilitiesList").innerHTML = "";
    document.getElementById("moves").innerHTML ="";
    if(input === " "){
        return alert("Type in a pokemon")
    }
    // calling the function
    getApi()
})
