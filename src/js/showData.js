let login_my = "onixav"
let password_my = "123456789"

let login = null;
let password = null;

let sub = document.getElementById('subIn')
sub.addEventListener('click', getData);

let chbx = document.getElementById('ch')

function getData() {
  login = document.getElementById('in_login').value;
  password = document.getElementById('in_pass').value;

  if (login !== login_my || password !== password_my) {
    alert("Неверный логин или пароль")
  }
  if (login === login_my && password === password_my) {
    if (chbx.checked) {
      localStorage.setItem('lg', login)
      localStorage.setItem('pw', password)
    }
    if (login === login_my && password === password_my) {
      myModal.style.display = "none"
      document.getElementById('myBtn').classList.add('btn_change')
      document.getElementById('myBtn').innerHTML = "Выйти"
      document.getElementById("auth").innerHTML = login_my
      let val_btn = document.getElementById('myBtn')
      val_btn.value = 1
    }
    show_data()
  }
}

function show_data() {
  let outlg = localStorage.getItem("lg");
  if (outlg) {
    myModal.style.display = "none"
    document.getElementById('myBtn').classList.add('btn_change')
    document.getElementById('myBtn').innerHTML = "Выйти"
    document.getElementById("auth").innerHTML = outlg
    let val_btn = document.getElementById('myBtn')
    val_btn.value = 1
  }

  if (document.getElementById('myBtn').value == 1) {
    document.getElementById('myBtn').onclick = function () {
      outlg = null
      // document.getElementById('myBtn').classList.add('btn_lk')
      // document.getElementById('myBtn').innerHTML = "Войти"
      // document.getElementById("auth").innerHTML = outlg
      // localStorage.clear()
      // location.reload()
    }
  }
}
show_data()