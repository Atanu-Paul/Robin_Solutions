// there are four way to make api calls
/*
  1: XMLHttpRequest
  2: Fetch
  3: Axios
  4: Jquery
*/

//1: XMLHttpRequest ----------------------------

// alert("adfsa");

let req = new XMLHttpRequest();
req.open("GET", "https://jsonplaceholder.typicode.com/users");
req.send();
req.onload = () => {
  console.log(req);
  if (req.status === 200) {
    var list = JSON.parse(req.response);
    // console.log(list);
    let output = `<h2>User List with XMLHttpRequest()</h2>`;
    output += "<ul>";
    list.forEach((user) => {
      output += ` <li> ${user.name}</li>`;
    });
    output += "</ul>";
    document.getElementById("root").innerHTML = output;
  } else {
    console.log(`error ${req.status} ${req.statusText}`);
  }
};
/*2: fetch() ----------------------*/

fetchUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((user) => {
      // console.log(user);
      let output = `<h2>User List with fetch() with promise chaining
      </h2>`;
      output += "<ul>";
      user.forEach((user) => {
        output += ` <li> ${user.email}</li>`;
      });
      output += "</ul>";
      document.getElementById("root1").innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchUser();

async function fetchUser1() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  // console.log(data);
  let output = `<h2>User List with fetch() async await
  </h2>`;
  output += "<ul>";
  data.forEach((user) => {
    output += ` <li> ${user.company.name}</li>`;
  });
  output += "</ul>";
  document.getElementById("root2").innerHTML = output;
}
fetchUser1();
/*3: ajax ----------------------------------------*/

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    success: function (res) {
      // console.log(res);
      let output = `<h2>User List with jquery ajax
  </h2>`;
      output += "<ul>";
      res.forEach((user) => {
        output += ` <li>Username:-${user.username}, Phone:- ${user.phone}</li>`;
      });
      output += "</ul>";
      document.getElementById("root3").innerHTML = output;
    },
    error: function (err) {
      console.log(err);
    },
  });
});

/*4: Axios--------------------*/

async function axiosUser() {
  let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  // console.log(res);
  console.log(res.data);
  let output = `<h2>User List with jquery Axios .get()
  </h2>`;
  output += "<ul>";
  res.data.map((user) => {
    output += ` <li>Comapny:-${user.company.name}, Catch-Phrase:- ${user.company.catchPhrase}</li>`;
  });
  output += "</ul>";
  document.getElementById("root4").innerHTML = output;
}
axiosUser();
