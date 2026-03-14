let visits = localStorage.getItem("visits") || 0
let clicks = localStorage.getItem("clicks") || 0
let formOpen = localStorage.getItem("formOpen") || 0
let submit = localStorage.getItem("submit") || 0

visits++

localStorage.setItem("visits", visits)

document.getElementById("startBtn").onclick = function(){

clicks++

localStorage.setItem("clicks", clicks)

document.getElementById("loginForm").classList.remove("hidden")

formOpen++

localStorage.setItem("formOpen", formOpen)

}

document.getElementById("loginBtn").onclick = function(){

submit++

localStorage.setItem("submit", submit)

document.getElementById("loginForm").classList.add("hidden")

document.getElementById("result").classList.remove("hidden")

document.getElementById("result").innerHTML = `
<h2>Учебный эксперимент</h2>

<p>
Вы приняли участие в демонстрации
социальной инженерии.
</p>

<p>
Данные аккаунта не сохраняются.
</p>

<h3>Статистика эксперимента</h3>

<p>Посетители страницы: ${visits}</p>
<p>Нажали кнопку: ${clicks}</p>
<p>Открыли форму: ${formOpen}</p>
<p>Нажали "Войти": ${submit}</p>

`

}
