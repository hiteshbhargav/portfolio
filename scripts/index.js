// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
const topBtn = document.querySelector(".back-to-top");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}
//----------intro----------
let intro = {
  name: "I am Hitesh",
  about: "Self taught Web Developer",
  description:
    "I have always been passionate about computers and electronic gadgets, i love exploring and playing around with technology. As a front-end Developer I like to code things from scratch, and enjoy bringing ideas to life in the browser. You can view some of my personal projects i have been working on through out my journey, for more visit my github.",
};
let html = `
    <div>
      <p class="name text-dark animate__animated animate__bounce display-2">${intro.name}</p>
      <p class="border-bottom">${intro.about}</p>
      <p class="mt-4">
        ${intro.description}
      </p>
    </div>
  `;
document.querySelector(".intro-content").innerHTML += html;

//----------skills list----------
let skills1 = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Materialize CSS",
  "Responsive Web Design",
];
let skills2 = [
  "JavaScript",
  "React Js",
  "Beginner Node Js",
  "Git",
  "Firebase",
];
skills1.map((s) => {
  let html = `
  <li> <img src="./resources/icons/check.svg" class="m-2" alt="tick-icon" width="24px">${s}</li>
  `;
  document.querySelector(".skills1").innerHTML += html;
});
skills2.map((s) => {
  let html = `
  <li> <img src="./resources/icons/check.svg" class="m-2" alt="tick-icon" width="24px">${s}</li>
  `;
  document.querySelector(".skills2").innerHTML += html;
});

//----------projects section----------
let projects = [
  {
    id: 1,
    name: "Ecommerce website",
    description:
      "Responsive Ecommerce website project using HTML CSS JavaScript and firebase database. Functionality includes Authentication, browse products and add to cart.",
    img: "./resources/images/projects/ecommerce.PNG",
    live: "https://hiteshbhargav.github.io/E-commerce/",
    source: "https://github.com/hiteshbhargav/E-commerce",
  },
  {
    id: 2,
    name: "Form Validation",
    description:
      "A simple register with us form using html css and vanilla javascript. It also includes validations checks at several input fields",
    img: "./resources/images/projects/formProject.PNG",
    live: "https://hiteshbhargav.github.io/formValidation/",
    source: "https://github.com/hiteshbhargav/formValidation",
  },
  {
    id: 3,
    name: "Newletter Sign-up",
    description:
      "A basic sign-up to our newsletter form. technologies used are html css javascript nodejs api. I have used mailchimp api for collecting emails.",
    img: "./resources/images/projects/mailProject.png",
    live: "https://sleepy-everglades-67424.herokuapp.com/",
    source: "https://github.com/hiteshbhargav/newsLetter",
  },
  {
    id: 4,
    name: "Weahter App",
    description:
      "A weather app using accweather api. User can browse weather by entering city name. Also a local storage feature which stores city name in browser’s local storage.",
    img: "./resources/images/projects/weatherApp.PNG",
    live: "https://hiteshbhargav.github.io/weatherApp/",
    source: "https://github.com/hiteshbhargav/weatherApp",
  },
];

projects.map((p) => {
  let html = `
      <div class="col-lg-5 project-div">
          <img src=${p.img} class="project-image" alt="project-image">
          <p class="project-info m-3">
            ${p.description}
          </p>
          <div class="view-project-btn">
            <a href=${p.live} class="view-live">Live Preview</a>
            <a href=${p.source} class="view-source text-secondary">Source</a>
          </div>
      </div>
`;
  document.querySelector(".projects-div").innerHTML += html;
});

//----------github api----------
const api = "https://api.github.com/users/";
const getUser = async (username) => {
  const fetchApi = await fetch(api + username);
  const data = await fetchApi.json();
  const dataObj = {
    avatar: data.avatar_url,
    name: data.login,
    bio: data.bio,
    followers: data.followers,
    following: data.following,
    profileUrl: data.url,
    location: data.location,
    repos: data.repos_url,
    reposCount: data.public_repos,
  };
  const repos = await fetch(api + username + "/repos");
  const reposData = await repos.json();
  const repoResult = reposData.map((repo) => repo.name);

  // main content
  const html = `
      <div class="content card-body d-flex row m-3">
        <div class="profile-picture col-lg-2 col-md-3 ">
          <img class="rounded-circle" src="${dataObj.avatar}"
          alt="profile-pic" width="150px">
        </div>
        <div class="content-child col-lg-10 col-md-9  mt-3">
          <h4 class="card-title"><a href="https://github.com/hiteshbhargav" target="_blank">${dataObj.name}</a></h4>
          <pre>${dataObj.bio}</pre>
          <small><strong class="text-secondary">${dataObj.location}</strong></small>
          <ul class="list-group list-group-horizontal row">
            <li style="border: none;" class="list-group-item col"><b>${dataObj.followers} </b>Followers</li>
            <li style="border: none;" class="list-group-item col"><b>${dataObj.following} </b>Following</li>
            <li style="border: none;" class="list-group-item col"><b>${dataObj.reposCount} </b>Repos</li>
          </ul>
          <div class="repos mt-4 mb-4">
            <!-- script -->
          </div>
         <!-- <a href="https://github.com/hiteshbhargav" class="visit-profile" target="_blank" title="visit-profile">Visit Profile</a> -->
        </div>  
      </div>
  `;

  document.querySelector(".card").innerHTML = html;

  // show repositories
  repoResult.map((rep) => {
    let repohtml = `
    <span class="repos-list"> <a href="https://github.com/hiteshbhargav/${rep}" target=_blank>${rep}</a></span>
    `;
    document.querySelector(".repos").innerHTML += repohtml;
  });
};
getUser("hiteshbhargav");
