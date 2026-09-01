// 獨立頁面資訊
document.querySelector('.restaurant_inforBox').innerHTML = `
<div class="restaurant_infor">
    <div class="block--left">
      <div class="restaurant_flex restaurant_flex--addr"></div>
      <div class="restaurant_flex restaurant_flex--distance"></div>
      <div class="restaurant_flex restaurant_flex--phone"></div>
      <div class="restaurant_flex restaurant_flex--business_hours"></div>
    </div>
    <!-- <br><br> -->
    <div class="block--right">
      <div class="restaurant_flex restaurant_flex--critical"></div>
      <div class="restaurant_flex restaurant_flex--price"></div>
      <div class="restaurant_flex restaurant_flex--dis"></div>
    </div>
</div>
<div class="button_area"></div>`;

for (let i = 0; i < restaurantAll.length; i++) {
    if (document.title == restaurantAll[i].name) {
        document.querySelector('.restaurant_name--single').innerHTML = `${restaurantAll[i].name}`;

        document.querySelector('.main_content').innerHTML = `
        <!-- 輪播圖 -->
        <div id="carouselIndicators" class="carousel slide carousel_box" data-bs-ride="carousel">
            <!-- 輪播提示線 -->
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active img--carousel">
                <img src="${basePath}${restaurantAll[i].store_img}"
                  class="d-block w-100 carousel_img" alt="照片從缺">
              </div>
              <div class="carousel-item img--carousel">
                <img
                  src="${basePath}${restaurantAll[i].food_img}"
                  class="d-block w-100 carousel_img" alt="照片從缺">
              </div>
              <div class="carousel-item img--carousel">
                <img
                  src="${basePath}${restaurantAll[i].food_img2}"
                  class="d-block w-100 carousel_img" alt="照片從缺">
              </div>
            </div>
            <!-- 向左一張 -->
            <i class="fas fa-angle-left angle" data-bs-target="#carouselIndicators" data-bs-slide="prev"></i>
            <!-- 向右一張 -->
            <i class="fas fa-angle-right angle" data-bs-target="#carouselIndicators" data-bs-slide="next"></i>
        </div>`;

        document.querySelector('.restaurant_flex--addr').innerHTML = `
        <p class="ellipse_bg">地&emsp;&emsp;址</p>
        <p class="inf">${restaurantAll[i].addr}</p>`;

        document.querySelector('.restaurant_flex--distance').innerHTML = `
        <p class="ellipse_bg">距&emsp;&emsp;離</p>
        <p class="inf">${restaurantAll[i].distance}m</span>`;

        document.querySelector('.restaurant_flex--phone').innerHTML = `
        <p class="ellipse_bg">電&emsp;&emsp;話</p>
        <p class="inf">${restaurantAll[i].phone}</p>`;

        document.querySelector('.restaurant_flex--business_hours').innerHTML = `
        <p class="ellipse_bg business_hours">營業時間</p>
        <p class="inf inf--lg">
          <span>${restaurantAll[i].business_hours[0]}</span>
          <span>${restaurantAll[i].business_hours[1]}</span>
        </p>`;

        document.querySelector('.button_area').innerHTML = `
        <!-- 菜單 -->
        <div class="pop_box">
            <a href="" class="pop" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <div class="circle_bg"><i class="far fa-list-alt menu"></i></div>
            </a>
        </div>
        <!-- 菜單彈窗 -->
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">菜單一覽
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <img class="img" src="${basePath}${restaurantAll[i].menu_img}" alt="">
                </div>
            </div>
        </div>
        <div class="pop_box">
            <div class="circle_bg">
                <i class="far fa-heart heart--single heart_change" onclick="change(this)"></i>
                <i class="fas fa-heart heart--single heart_change2" onclick="change2(this)"></i>
            </div>
        </div>`

        document.querySelector('.map_box').innerHTML = `
        <iframe class="map" src="${restaurantAll[i].map}" allowfullscreen="" loading="lazy">
        </iframe>`
    }
}

// 評價
let stars = [];
let count_1 = 0;
for (let i = 0; i < restaurantAll.length; i++) {
    if (document.title == restaurantAll[i].name) {
        for (let k = 0; k < restaurantAll[i].star; k++) {
            stars.push(`<i class="fas fa-star star spacing--right"></i>`)
            count_1++
        }
        for (let l = 0; l < (5 - count_1); l++) {
            stars.push(`<i class="fas fa-star star--none star spacing--right"></i>`);

        }
        console.log(stars)
        document.querySelector('.restaurant_flex--critical').innerHTML = `
        <span class="ellipse_bg">評&emsp;&emsp;價</span>
        <span class="inf spacing--right inf--level">低</span>` + stars.join('') + `<span class="inf spacing--right inf--level">高</span>`
    }
}

// 價格
let prices = [];
let count_2 = 0;
for (let i = 0; i < restaurantAll.length; i++) {
    if (document.title == restaurantAll[i].name) {
        for (let k = 0; k < restaurantAll[i].price; k++) {
            prices.push(`<i class="fas fa-dollar-sign dollar spacing--right"></i>`)
            count_2++
        }
        for (let l = 0; l < (5 - count_2); l++) {
            prices.push(`<i class="fas fa-dollar-sign dollar--none dollar spacing--right"></i>`);
        }
        console.log(prices)
        document.querySelector('.restaurant_flex--price').innerHTML = `<span class="ellipse_bg">價&emsp;&emsp;格</span>
        <span class="inf spacing--right inf--level">低</span>`+ prices.join('') + `<span class="inf spacing--right inf--level">高</span>`
    }
}

// 距離
let diss = [];
let count_3 = 0;
for (let i = 0; i < restaurantAll.length; i++) {
    if (document.title == restaurantAll[i].name) {
        for (let k = 0; k < restaurantAll[i].dis; k++) {
            diss.push(`<i class="fas fa-walking distance spacing--right"></i>`)
            count_3++
        }
        for (let l = 0; l < (5 - count_3); l++) {
            diss.push(`<i class="fas fa-walking distance distance--none spacing--right"></i>`);
        }
        console.log(diss)
        document.querySelector('.restaurant_flex--dis').innerHTML = `<span class="ellipse_bg">距&emsp;&emsp;離</span>
        <span class="inf spacing--right inf--level">近</span>`+ diss.join('') + `<span class="inf spacing--right inf--level">遠</span>`
    }
}
