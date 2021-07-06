let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let block = document.getElementsByClassName("modal");

btn.onclick = function () {
  modal.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let login_my = "onixav";
let password_my = "123456789";

let login = null;
let password = null;

let sub = document.getElementById('subIn');
sub.addEventListener('click', getData);

function getData() {
  login = document.getElementById('in_login').value;
  password = document.getElementById('in_pass').value;


  if (login != login_my || password != password_my) {
    alert("Неверный логин или пароль")
  }
  if (login === login_my && password === password_my) {
    localStorage.setItem('lg', login)
    localStorage.setItem('pw', password)

    show_data();
  }
}

function show_data() {
  let outlg = localStorage.getItem("lg");
  if (outlg) {
    myModal.style.display = "none"
    document.getElementById('myBtn').style.background = "white";
    document.getElementById('myBtn').style.color = "#E5261E";
    document.getElementById('myBtn').style.fontWeight = "700";
    document.getElementById('myBtn').innerHTML = "Выйти";
    document.getElementById("auth").innerHTML = outlg;
    let val_btn = document.getElementById('myBtn')
    val_btn.value = 1
  }
  if (document.getElementById('myBtn').value == 1) {
    document.getElementById('myBtn').onclick = function () {
      localStorage.clear()
      location.reload();
    }
  }

}
show_data();


document.querySelector("input[type=\"text\"]").addEventListener("input", (e) => {
  [...document.querySelectorAll("ul li")].forEach(item => {
    if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

// function srch() {
  // var input, filter, ul, li, a, i;
  // input = document.getElementById("search_film");
  // filter = input.value.toUpperCase();
  // ul = document.getElementById("film_menu");
  // li = ul.getElementsByTagName("li");

  // for (i = 0; i < li.length; i++) {
  //   // a = li[i].getElementsByTagName("a")[0];
  //   a = li[i].getElementsByClassName("item-hd")[0]
  //   if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
  //     li[i].style.display = "";
  //   } else {
  //     li[i].style.display = "none";
  //   }
  // }
// }

