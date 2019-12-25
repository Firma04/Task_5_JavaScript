let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    menuItemLi = document.createElement("li"),
    title = document.getElementById("title"),
    bannerAdv = document.getElementsByClassName("adv")[0],
    promtApple = document.querySelector("#prompt");

menu.insertBefore(menuItem[1], menuItem[3]); // Порядок меню

menuItemLi.classList.add("menu-item"); //Добавляем 5-й li
menuItemLi.textContent = "Пятый элемент"; 
menu.appendChild(menuItemLi);  

document.body.style.backgroundImage = "url('img/apple_true.jpg')"; // меняем фон

title.textContent = "Мы продаем только подлинную технику Apple"; // меняем заголовок

bannerAdv.remove(bannerAdv[0]);// удаляем рекламу 

let jabko = prompt("Вашое отношения к Apple"); //Спрашиваем о отношении к Aple
promtApple.textContent = jabko;