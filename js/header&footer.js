const basePath = location.pathname.split('/').slice(0, -1).pop() === 'restaurant' ? '../' : '';

document.querySelector('.header').innerHTML = `
<nav class="nav">
    <a href="${basePath}index.html">
        <img class="header_logo" src="${basePath}image/logo.png">
    </a>

    <input type="checkbox" id="burger">
    <label class="checkbtn" for="burger"><i id="Burger" class="fas fa-bars burgerbtn"></i></label>

    <ul class="nav_lists">
        <i class="fas fa-times closebtn hide--pc"></i>

        <li class="nav_item nav_item--first">
            <a class="nav_link" href="${basePath}index.html">
                <span class="hide--mb"><i class="fas fa-home icon--lg"></i></span>首頁
                <span class="hide--pc eng">HOME</span>
            </a>
        </li>

        <li class="nav_item">
            <a class="nav_link" href="${basePath}list.html">
                <span class="hide--mb"><i class="fas fa-utensils icon--lg "></i></span>食指大動
                <span class="hide--pc eng">IT'S MEAL TIME!</span>
            </a>
        </li>

        <li class="nav_item">
            <a class="nav_link" href="${basePath}aboutus.html">
                <span class="hide--mb"><i class="fas fa-book icon--lg"></i></span>創作食光
                <span class="hide--pc eng">ABOUT</span>
            </a>
        </li>

        <li class="nav_item">
            <a class="nav_link fast" data-bs-toggle="modal" data-bs-target="#Modal">
                <span class="hide--mb"><i class="fas fa-dice icon--lg"></i></span>食光寶貴
                <span class="hide--pc eng">RANDOM</span>
            </a>
        </li>
    </ul>
</nav>`;


document.querySelector('.footer').innerHTML = `
<div class="footer_link">
    <p>
        <a href="${basePath}list.html">食指大動</a>
    </p>
    <p class="vertical_line">
        <a href="${basePath}aboutus.html">創作食光</a>
    </p>
    <p>
        <a href="${basePath}cooperation.html">合作小食光</a>
    </p>
</div>
<p>
    <i class="fas fa-envelope icon--md"></i>&nbsp;xxx@gmail.com
</p>
<p>Copyright © 2021 A.C.W&nbsp;All Rights Reserved.</p>`;
