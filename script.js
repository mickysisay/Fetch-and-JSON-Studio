// TODO: add code here
window.addEventListener('load',loadThis());
function loadThis(){
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(
        function(response){
        response.json().then(function(json){
            json.sort(function(a,b){return b.hoursInSpace-a.hoursInSpace});
            for(let i=0;i<json.length;i++){
 
                let active = json[i].active===true ? 'green' :'red';
              document.getElementById('container').innerHTML += 
              `<div class="astronaut">
              <div class="bio">
                 <h3>${json[i].firstName} ${json[i].lastName}</h3>
                 <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li style = color:${active}>Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills.join(' ')}</li>
                 </ul>
              </div>
              <img class="avatar" src="${json[i].picture}">
           </div>`;  
            }
            document.getElementById('container').innerHTML += `<div>Counter : ${json.length}</div>`;
        });
        }
    );
}