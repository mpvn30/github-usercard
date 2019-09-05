/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
  axios
  .get("https://api.github.com/users/mpvn30")
  .then(response => {
    console.log(response);
    const data = response.data;
    const create = createCard(data);
    entry.appendChild(create);
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

  axios
  .get("https://api.github.com/users/tetondan")
  .then(response => {
    console.log(response);
    const data = response.data;
    const create = createCard(data);
    entry.appendChild(create);
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

  axios
  .get("https://api.github.com/users/dustinmyers")
  .then(response => {
    console.log(response);
    const data = response.data;
    const create = createCard(data);
    entry.appendChild(create);
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

  axios
  .get("https://api.github.com/users/justsml")
  .then(response => {
    console.log(response);
    const data = response.data;
    const create = createCard(data);
    entry.appendChild(create);
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

  axios
  .get("https://api.github.com/users/luishrd")
  .then(response => {
    console.log(response);
    const data = response.data;
    const create = createCard(data);
    entry.appendChild(create);
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

  axios
  .get("https://api.github.com/users/bigknell")
  .then(response => {
    console.log(response);
    const data = response.data;
    const create = createCard(data);
    entry.appendChild(create);
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const entry = document.querySelector(".cards");

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function createCard(obj){
  const
    newCard = document.createElement("div"),
    newImage = document.createElement("img"),
    cardInfo = document.createElement("div"),
    name = document.createElement("h3"),
    userName = document.createElement("p"),
    userLocation = document.createElement("p"),
    userProfile = document.createElement("p"),
    gitAddress = document.createElement("a"),
    userFollowers = document.createElement("p"),
    userFollowing = document.createElement("p"),
    userBio = document.createElement("p");

    newImage.src = obj.avatar_url;
    name.textContent = obj.name;
    userName.textContent = obj.login;
    userLocation.textContent = obj.location;
    userProfile.textContent = `Profile: `;
    gitAddress.href = obj.html_url;
    gitAddress.textContent = obj.html_url;
    userFollowers.textContent = `Followers: ${obj.followers}`;
    userFollowing.textContent = `Following: ${obj.following}`;
    userBio.textContent = `Bio: ${obj.bio}`;

    newCard.classList.add("card");
    cardInfo.classList.add("card-info");
    name.classList.add("name");
    userName.classList.add("username");

    newCard.appendChild(newImage);
    newCard.appendChild(cardInfo);
    cardInfo.appendChild(name);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(userLocation);
    cardInfo.appendChild(userProfile);
    userProfile.appendChild(gitAddress);
    cardInfo.appendChild(userFollowers);
    cardInfo.appendChild(userFollowing);
    cardInfo.appendChild(userBio);

    return newCard;

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
