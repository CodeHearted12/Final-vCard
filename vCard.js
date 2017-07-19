let header = document.querySelector('.header');
let basics = document.querySelector('.basics');
let story = document.querySelector('.story');
let photo = document.querySelector('.photo');

let req = new XMLHttpRequest();

req.open("GET", "https://api.github.com/users/CodeHearted12");
req.addEventListener("load", function(){
  let object = JSON.parse(req.response);
  header.innerHTML = `
  <h1>${object.name}</h1>`

  basics.innerHTML = `
  <h2>The Basics</h2>
  <li><span>Name: </span>${object.name}</li>
  <li><span>Github Url: </span>${object.html_url}</li>
  <li><span>Email: </span>${object.email}</li>
  <li><span>Company: </span>${object.company}</li>
  <li><span>Website: </span>${object.website} </li>
`
  story.innerHTML = `
  <h2>The Story</h2>
<div>${object.bio}</div>

  `
photo.innerHTML = `
<img src = "${object.avatar_url}">


`

});
req.send()
