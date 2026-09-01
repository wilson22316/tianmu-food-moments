// 導覽列
$('.burgerbtn').click(function () {
    $('.nav_lists').addClass('open')
})
$('.closebtn').click(function () {
    $('.nav_lists').removeClass('open')
})

// 隨機選取js
$('.fast').on('click', random)

var arr =
    ["阿堂鍋貼", "麥當勞", "八方雲集", "品卉小吃", "優橙複合式早餐店", "皇鼎油飯", "東石便當", "天母豆漿", "JSP呷尚寶", "金仙魚丸", "劉媽媽", "四海遊龍", "大聯盟活力早午餐", "天母肉圓", "吃越香美食館", "一品瘋食堂"];

function random() {
    let index = Math.floor((Math.random() * arr.length));
    $('#random')[0].innerHTML = `
        <div class="random_item">
            <a href="${basePath}restaurant/${index + 1}${arr[index]}.html">
                <img class="img--md" src="${basePath}${restaurantAll[index].food_img}">
                <div class="random_text">${arr[index]}</div>
            </a>
        </div>`;
}

// 愛心切換
let hc = document.querySelectorAll('.heart_change');
let hc2 = document.querySelectorAll('.heart_change2');
function add_id() {
    for (i = 1; i <= hc.length; i++) {
        hc[i - 1].id = 'h' + i;
        hc2[i - 1].id = 'h' + i + '-1';
    }
}
add_id();

let data = []
function change(e) {
    $(`#${e.id}`).addClass('hide')
    $(`#${e.id}-1`).addClass('show')

    data.push(`<div class="favorite_item">
    <a href="${basePath}restaurant/${e.id.substr(1, 1)}${arr[e.id.substr(1, 1) - 1]}.html">
        <img class="img--md" src="${basePath}${restaurantAll[e.id.substr(1, 1) - 1].food_img}">
        <p>${arr[e.id.substr(1, 1) - 1]}</p>
    </a>
</div>`)
    $('.collect')[0].innerHTML += `
    <div class="favorite_item">
        <a href="${basePath}restaurant/${e.id.substr(1, 1)}${arr[e.id.substr(1, 1) - 1]}.html">
            <img class="img--md" src="${basePath}${restaurantAll[e.id.substr(1, 1) - 1].food_img}">
            <p>${arr[e.id.substr(1, 1) - 1]}</p>
        </a>
    </div>`

}
function change2(f) {
    $(`#${f.id.substring(0, 2)}`).removeClass('hide')
    $(`#${f.id}`).removeClass('show')

    $('.collect')[0].innerHTML -= `
    <div class="favorite_item">
        <a href="${$(this)}.html">
            <img class="img--md" src="/image/a${f.id.substr(1, 1)}.jpeg">${arr[f.id.substr(1, 1) - 1]}
        </a>
    </div>`
}

// 評論送出
let text = $('.critical_box--self')
$('.submit').click(function () {
    $('.mask').show()
    if (text.val() == '') {
        $('.has_no_text').fadeIn(300)
    } else {
        $('.has_text').fadeIn(300)
    }
    text.val('');
})
function close_it(e) {
    $('.has_text').hide()
    $('.has_no_text').hide()
    $('.mask').hide()
}
