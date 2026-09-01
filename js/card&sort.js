let restaurantAll = [
    No1 = {
        index: 1,
        name: '阿堂鍋貼',
        store_img: 'image/store/阿堂鍋貼-1.jpg',
        food_img: 'image/food/阿堂鍋貼-2.jpg',
        food_img2: 'image/food/阿堂鍋貼-3.jpg',
        menu_img: 'image/menu/阿堂鍋貼.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5401940991437!2d121.53013781498915!3d25.117421641096147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae80c77532e9%3A0x1d318c837dd80890!2z6Zi_5aCC6Y2L6LK85rC06aSD!5e0!3m2!1szh-TW!2stw!4v1625838370100!5m2!1szh-TW!2stw',
        star: 4,
        price: 3,
        dis: 4,
        addr: '台北市士林區天母東路8巷21-5號',
        distance: 850,
        category: 'chinesefood',
        phone: '(02)2874 0789',
        business_hours: ['星期四～二 11:30-20:00', '星期三公休']
    },
    No2 = {
        index: 2,
        name: '麥當勞',
        store_img: 'image/store/麥當勞-1.jpg',
        food_img: 'image/food/麥當勞-2.jpg',
        food_img2: 'image/food/麥當勞-3.jpg',
        menu_img: 'image/menu/麥當勞.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.7758053725697!2d121.53086851498905!3d25.109449441416754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae83142f5ea3%3A0xcbdc058bb3899202!2z6bql55W25YueLeWPsOWMl-W-t-ihjOW6lw!5e0!3m2!1szh-TW!2stw!4v1632733741793!5m2!1szh-TW!2stw',
        star: 4,
        price: 3,
        dis: 4,
        addr: '台北市士林區德行東路227號',
        distance: 850,
        category: 'chinesefood',
        phone: '(02)2836 2779',
        business_hours: ['星期一～日 06:00-01:00', '']
    },
    No3 = {
        index: 3,
        name: '八方雲集',
        store_img: 'image/store/八方雲集-1.jpg',
        food_img: 'image/food/八方雲集-2.jpg',
        food_img2: 'image/food/八方雲集-3.jpg',
        menu_img: 'image/menu/八方雲集.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.191634099738!2d121.53329282920751!3d25.10976311336186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae831cb073bd%3A0x1798011c0c0ec19b!2z5YWr5pa56Zuy6ZuGICjlo6vmnpflvrfooYzmnbHlupcp!5e0!3m2!1szh-TW!2stw!4v1632736415432!5m2!1szh-TW!2stw',
        star: 4,
        price: 3,
        dis: 4,
        addr: '台北市士林區德行東路235號',
        distance: 900,
        category: 'chinesefood',
        phone: '(02)2833 2588',
        business_hours: ['星期一～日 11:00-22:00', '']
    },
    No4 = {
        index: 4,
        name: '品卉小吃',
        store_img: 'image/store/品卉小吃-1.jpg',
        food_img: 'image/food/品卉小吃-2.jpg',
        food_img2: 'image/food/品卉小吃-3.jpg',
        menu_img: 'image/menu/品卉小吃.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.6692034964144!2d121.53529361498916!3d25.11305674127179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac2a0f1af1c1%3A0xf10d05c70052dce1!2z5ZOB5Y2J5bCP5ZCD!5e0!3m2!1szh-TW!2stw!4v1632737479271!5m2!1szh-TW!2stw',
        star: 3,
        price: 3,
        dis: 1,
        addr: '台北市士林區士東路286巷1之16號',
        distance: 210,
        category: 'chinesefood',
        phone: '(02)2833 5297',
        business_hours: ['星期一～日 11:00-20:00', '']
    },
    No5 = {
        index: 5,
        name: '優橙複合式早餐店',
        store_img: 'image/store/優橙複合式早餐店-1.jpg',
        food_img: 'image/store/優橙複合式早餐店-1.jpg',
        // food_img: 'image/food/優橙複合式早餐店-2.jpg',
        food_img2: 'image/food/優橙複合式早餐店-3.jpg',
        menu_img: 'image/menu/優橙複合式早餐店.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.66392223393!2d121.53492091498909!3d25.113235441264514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac2a0921ab83%3A0x80e474b0e27cfc7c!2z5YSq5qmZ6KSH5ZCI5byP5pep6aSQ!5e0!3m2!1szh-TW!2stw!4v1632737101147!5m2!1szh-TW!2stw',
        star: 3,
        price: 3,
        dis: 1,
        addr: '台北市士林區士東路280號',
        distance: 190,
        category: 'brunch',
        phone: '(02)2833 1118',
        business_hours: ['星期四～二 11:30-20:00', '星期三公休']
    },
    No6 = {
        index: 6,
        name: '皇鼎油飯',
        store_img: 'image/store/皇鼎油飯-1.jpg',
        food_img: 'image/store/皇鼎油飯-1.jpg',
        // food_img: 'image/food/皇鼎油飯-2.jpg',
        food_img2: 'image/food/皇鼎油飯-3.jpg',
        menu_img: 'image/menu/皇鼎油飯.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.550102045273!2d121.52977601498905!3d25.117086441109674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae80cf38dd57%3A0xe8912bac16d67ace!2z55qH6byO5rK56aOv!5e0!3m2!1szh-TW!2stw!4v1632738363731!5m2!1szh-TW!2stw',
        star: 3,
        price: 3,
        dis: 4,
        addr: '台北市士林區天母東路8巷25之1號',
        distance: 850,
        category: 'chinesefood',
        phone: '(02)2876 8519',
        business_hours: ['星期ㄧ～日 08:00-15:00', '']
    },
    No7 = {
        index: 7,
        name: '東石便當',
        store_img: 'image/store/東石便當-1.jpg',
        food_img: 'image/store/東石便當-1.jpg',
        // food_img: 'image/food/東石便當-2.jpg',
        food_img2: 'image/food/東石便當-3.jpg',
        menu_img: 'image/menu/東石便當.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.689621880165!2d121.53508681498924!3d25.112365841299592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac2a02225fc5%3A0x19efde2d311944c!2z5p2x55-z5L6_55W2!5e0!3m2!1szh-TW!2stw!4v1632738552441!5m2!1szh-TW!2stw',
        star: 4,
        price: 3,
        dis: 1,
        addr: '台北市士林區士東路266巷5弄12號',
        distance: 280,
        category: 'chinesefood',
        phone: '(02)2834 6228',
        business_hours: ['星期一～五 11:00-14:00、17:00-21:00', '星期六、日公休']
    },
    No8 = {
        index: 8,
        name: '天母豆漿',
        store_img: 'image/store/天母豆漿-1.jpg',
        food_img: 'image/food/天母豆漿-2.jpg',
        food_img2: 'image/food/天母豆漿-3.jpg',
        menu_img: 'image/menu/天母豆漿.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.7651792210077!2d121.53277631498912!3d25.10980904140232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac29f84f6107%3A0x8993203e5a759b68!2z5aSp5q-N6LGG5ry_!5e0!3m2!1szh-TW!2stw!4v1632738833977!5m2!1szh-TW!2stw',
        star: 4,
        price: 3,
        dis: 4,
        addr: '台北市士林區天母東路8巷23之5號',
        distance: 800,
        category: 'brunch',
        phone: '(02)2838 4411',
        business_hours: ['星期一 05:00-12:00', '星期二～日 05:00-19:00']
    },
    No9 = {
        index: 9,
        name: 'JSP呷尚寶',
        store_img: 'image/store/JSP呷尚寶-1.jpg',
        food_img: 'image/food/JSP呷尚寶-2.jpg',
        food_img2: 'image/food/JSP呷尚寶-3.jpg',
        menu_img: 'image/menu/JSP呷尚寶.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.6808859852263!2d121.53511121498912!3d25.11266144128764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac2a06a81b79%3A0xd60f8f094a6b0f80!2z5ZG35bCa5a-25pep5Y2I6aSQIOWjq-adseW6lw!5e0!3m2!1szh-TW!2stw!4v1632739367969!5m2!1szh-TW!2stw',
        star: 4,
        price: 3,
        dis: 1,
        addr: '台北市士林區士東路266巷3弄12-1號',
        distance: 240,
        category: 'brunch',
        phone: '(02)2835 6147',
        business_hours: ['星期一～日 05:30-13:30', '']
    },
    No10 = {
        index: 10,
        name: '金仙魚丸',
        store_img: 'image/store/金仙魚丸-1.jpg',
        food_img: 'image/food/金仙魚丸-2.jpg',
        food_img2: 'image/food/金仙魚丸-3.jpg',
        menu_img: 'image/menu/金仙魚丸.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5545771331485!2d121.53029951498931!3d25.116935041115827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae80c3bcd96d%3A0x64735f0b6ba7f948!2z6YeR5LuZ6a2a5Li4!5e0!3m2!1szh-TW!2stw!4v1632737987084!5m2!1szh-TW!2stw',
        star: 3,
        price: 3,
        dis: 4,
        addr: '台北市士林區天母東路8巷27之7號',
        distance: 850,
        category: 'chinesefood',
        phone: '(02)2875 3096',
        business_hours: ['星期一～六 11:00–14:30、16:00–19:00', '星期日公休']
    },
    No11 = {
        index: 11,
        name: '劉媽媽',
        store_img: 'image/store/劉媽媽-1.jpg',
        food_img: 'image/food/劉媽媽-2.jpg',
        food_img2: 'image/food/劉媽媽-3.jpg',
        menu_img: 'image/menu/劉媽媽.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.761831185488!2d121.53253591498888!3d25.109922341397674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae82fa2876e3%3A0xacdedc270668fc35!2z5YqJ5aq95aq9!5e0!3m2!1szh-TW!2stw!4v1632739663197!5m2!1szh-TW!2stw',
        star: 4,
        price: 4,
        dis: 4,
        addr: '台北市士林區德行東路255號',
        distance: 800,
        category: 'chinesefood',
        phone: '08-866-6557',
        business_hours: ['暫無提供', '']
    },
    No12 = {
        index: 12,
        name: '四海遊龍',
        store_img: 'image/store/四海遊龍-1.jpg',
        food_img: 'image/food/四海遊龍-2.jpg',
        food_img2: 'image/food/四海遊龍-3.jpg',
        menu_img: 'image/menu/四海遊龍.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.769653096381!2d121.53200941498905!3d25.10965764140835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae82e29f1fbb%3A0x5aaefe25e7dbc8f1!2zMTEx5Y-w5YyX5biC5aOr5p6X5Y2A5b636KGM5p2x6LevMjUw6Jmf!5e0!3m2!1szh-TW!2stw!4v1632739943353!5m2!1szh-TW!2stw',
        star: 4,
        price: 3,
        dis: 4,
        addr: '台北市士林區德行東路250號',
        distance: 850,
        category: 'chinesefood',
        phone: '(02)2832 0179',
        business_hours: ['暫無提供', '']
    },
    No13 = {
        index: 13,
        name: '大聯盟活力早午餐',
        store_img: 'image/store/大聯盟活力早午餐-1.jpg',
        food_img: 'image/food/大聯盟活力早午餐-2.jpg',
        food_img2: 'image/food/大聯盟活力早午餐-3.jpg',
        menu_img: 'image/menu/大聯盟活力早午餐.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.769653096381!2d121.53200941498905!3d25.10965764140835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac2a05b879df%3A0x3a22dcbc0d63902c!2z5aSn6IGv55uf5rS75Yqb5pep5Y2I6aSQ!5e0!3m2!1szh-TW!2stw!4v1632740327026!5m2!1szh-TW!2stw',
        star: 3,
        price: 3,
        dis: 1,
        addr: '台北市士林區士東路286巷3弄2號',
        distance: 230,
        category: 'brunch',
        phone: '(02)2836 6601',
        business_hours: ['', '']
    },
    No14 = {
        index: 14,
        name: '天母肉圓',
        store_img: 'image/store/天母肉圓-1.jpg',
        food_img: 'image/food/天母肉圓-2.jpg',
        food_img2: 'image/food/天母肉圓-3.jpg',
        menu_img: 'image/menu/天母肉圓.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.544828857831!2d121.52970531498927!3d25.117264841102507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae80c8c8b38f%3A0xaaaff4cc80a748bb!2z5aSp5q-N6IKJ5ZyT5bqX!5e0!3m2!1szh-TW!2stw!4v1632740547475!5m2!1szh-TW!2stw',
        star: 3,
        price: 3,
        dis: 4,
        addr: '台北市士林區天母東路8巷23之5號',
        distance: 900,
        category: 'chinesefood',
        phone: '(02)2872 5291',
        business_hours: ['星期一～日 10:00-19:30', '星期六公休']
    },
    No15 = {
        index: 15,
        name: '吃越香美食館',
        store_img: 'image/store/吃越香美食館-1.jpg',
        food_img: 'image/food/吃越香美食館-2.jpg',
        food_img2: 'image/food/吃越香美食館-3.jpg',
        menu_img: 'image/menu/吃越香美食館.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.7638671946493!2d121.53319091498906!3d25.109853441400503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae80c5641df7%3A0xe65c1876757c3edf!2z5ZCD6LaK6aaZ576O6aOf6aSo!5e0!3m2!1szh-TW!2stw!4v1632741068149!5m2!1szh-TW!2stw',
        star: 3,
        price: 4,
        dis: 4,
        addr: '台北市士林區天母東路8巷31弄8號',
        distance: 800,
        category: 'broad',
        phone: '(02)2876 0229',
        business_hours: ['星期一～日 11:00-21:45', '']
    },
    No16 = {
        index: 16,
        name: '一品瘋食堂',
        store_img: 'image/store/一品瘋食堂-1.jpg',
        food_img: 'image/food/一品瘋食堂-2.jpg',
        food_img2: 'image/food/一品瘋食堂-3.jpg',
        menu_img: 'image/menu/一品瘋食堂.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.544828857831!2d121.52970531498927!3d25.117264841102507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442af0e4bdc70fd%3A0xd03a355a14e3dc3e!2z5LiA5ZOB55iL6aOf5aCCIOeFjumkgyDmsLTppIMg5bCI6LOjIC3pmYToqK0g6LyV6aOfIOWwj-WQgyDnvo7po58g5Ya35YeN5rC06aSD6LKp5ZSu!5e0!3m2!1szh-TW!2stw!4v1632740775856!5m2!1szh-TW!2stw',
        star: 4,
        price: 4,
        dis: 3,
        addr: '台北市士林區德行東路274號',
        distance: 750,
        category: 'chinesefood',
        phone: '(02)2833 5589',
        business_hours: ['星期一～日 11:30-13:30、17:00-20:00', '星期四公休']
    }
]

document.querySelector('.total').innerHTML = `<p> 總共有 <span id="listNum">${restaurantAll.length}</span> 個店家</p>`
document.querySelector('.restaurant_all').innerHTML = `
    ${restaurantAll
        .map(function (res) {
            // console.log(restaurantAll[0])
            return `
            <div class="restaurant ${res.category}" data-name="${res.name}" data-price="${res.price}" data-star="${res.star}" data-distance="${res.distance}">

                <i class="far fa-heart heart_change heart--restaurant" onclick="change(this)"></i>
                <i class="fas fa-heart heart_change2 heart--restaurant" onclick="change2(this)"></i>

                <a href="${basePath}restaurant/${res.index}${res.name}.html" class="mb_flex">
                    <img class="food_photo" src="${basePath}${res.food_img}">

                    <div class="restaurant_inf">
                        <div class="restaurant_name">${res.name}</div>

                        <div class="pc_reverse">
                            <div class="title title--s${res.index}"></div>

                            <div class="title hide--mb title--p${res.index}"></div>

                            <div class="title hide--mb title--d${res.index}"></div>

                            <div class="content">
                                <p>${res.addr}</p>
                                <p>${res.distance}m</p>
                            </div>
                            
                        </div>
                    </div>
                </a>
            </div>`;
        }).join("")
    }
`;

// 評價星數
let star = [];
let count1 = 0;
for (let k = 0; k < restaurantAll.length; k++) {
    for (let i = 0; i < parseInt(restaurantAll[k].star); i++) {
        console.log('i', i);
        star.push(`<i class="fas fa-star star"></i>`);
        count1++;
    }
    if (parseInt(restaurantAll[k].star) != restaurantAll[k].star) {
        star.push(`<i class="fas fa-star-half-alt star"></i>`);
        count1++;
    }
    for (let j = 0; j < (5 - count1); j++) {
        star.push(`<i class="fas fa-star star--none star"></i>`);
    }
    console.log('=======分隔線=======');
    document.querySelector(`.title--s${k + 1}`).innerHTML = `<span style="margin-right:5px" class="hide--mb">評價&nbsp;</span>` + star.join(' ');
    star = [];
    count1 = 0;
}

// 價格星數
let price = [];
let count2 = 0;
for (let k = 0; k < restaurantAll.length; k++) {
    for (let i = 0; i < parseInt(restaurantAll[k].price); i++) {
        console.log('i', i);
        price.push(`<i class="fas fa-dollar-sign dollar"></i>`);
        count2++;
    }
    if (parseInt(restaurantAll[k].price) != restaurantAll[k].price) {
        price.push(`<i class="fas fa-dollar-sign dollar"></i>`);
        count2++;
    }
    for (let j = 0; j < (5 - count2); j++) {
        price.push(`<i class="fas fa-dollar-sign dollar--none dollar"></i>`);
    }
    console.log('=======分隔線=======');
    document.querySelector(`.title--p${k + 1}`).innerHTML = `<span style="margin-right:5px" class="hide--mb">價格&nbsp;</span>` + price.join(' ');
    price = [];
    count2 = 0
}

// 距離星數
let dis = [];
let count3 = 0;
for (let k = 0; k < restaurantAll.length; k++) {
    for (let i = 0; i < parseInt(restaurantAll[k].dis); i++) {
        console.log('i', i);
        dis.push(`<i class="fas fa-walking distance"></i>`);
        count3++;
    }
    if (parseInt(restaurantAll[k].dis) != restaurantAll[k].dis) {
        dis.push(`<i class="fas fa-walking distance"></i>`);
        count3++;
    }
    for (let j = 0; j < (5 - count3); j++) {
        dis.push(`<i class="fas fa-walking distance distance--none"></i>`);
    }
    console.log('=======分隔線=======');
    document.querySelector(`.title--d${k + 1}`).innerHTML = `<span style="margin-right:5px" class="hide--mb">距離&nbsp;</span>` + dis.join(' ');
    dis = [];
    count3 = 0;
}

let allrestaurant = document.querySelectorAll(".restaurant"); /* 所有商品 */
let checkbox = document.querySelectorAll(".sequence input[type=checkbox]"); /* 所有選項標籤 */
let listNum = document.getElementById("listNum"); /* 總共顯示商品數量 */
let category = []; /* 勾選的顏色 */

// filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
// push() 方法會添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。
// forEach() 方法會將陣列內的每個元素，皆傳入並執行給定的函式一次。
// jQuery :contains() 選擇器可用來選取子元素內包含特定文字的元素

for (i = 0; i < checkbox.length; i++) {
    /* 點擊任意選項標籤時觸發 */
    checkbox[i].addEventListener("click", (e) => {
        // 勾選項目轉為陣列
        console.log(e)
        if (e.target.checked) {
            /* 若點擊項目為「勾選」狀態，在category陣列塞入該選項id */
            category.push(e.target.id);

            console.log(category)
        }
        else {
            /* 若點擊項目為「取消勾選」狀態，在category陣列移出該選項id，利用filter()回傳新陣列*/
            category = category.filter(function (value) {
                /* 只回傳不等於該選項id的值 */
                return value != e.currentTarget.id;
            });
            // console.log(category)
        }

        // 判斷顯示的商品

        item = 0; /* 顯示數量 */

        allrestaurant.forEach((restaurant) => {
            /* 先將所有商品隱藏 */
            restaurant.style.display = "none";
            /* 用forEach()跑一次category陣列，與個別restaurant的class比對，*/
            category.forEach((category) => {
                if (restaurant.classList.contains(category)) {
                    restaurant.style.display = "block";
                    item++;
                    console.log(item)
                }
            });

            listNum.innerHTML = item; /* 顯示數量 */

            /* 判斷category陣列是否為空，是則全部商品顯示 */
            if (category.length <= 0) {
                restaurant.style.display = "block";
                listNum.innerHTML = allrestaurant.length; /* 顯示數量為總數 */
            }
        });
    });
}


let productBox = document.querySelector(".restaurant_all");
const originLists = Array.from(productBox.children); /* 原商品陣列(未排序) */
// Array.from() 方法會從類陣列（array-like）或是可迭代（iterable）物件建立一個新的 Array 實體。


let lists = Array.from(productBox.children); /* 用來排序的陣列 */
let select = document.getElementById("select"); /* 下拉選單 */

select.onchange = sortingValue;

function sortingValue() {
    if (this.value === "default") {
        while (productBox.firstChild) {
            productBox.removeChild(productBox.firstChild);
        }

        /* print出原商品陣列 */
        productBox.append(...originLists)

    }

    if (this.value === "lowToHigh--S") {
        sortStar(productBox, lists, true);
    }

    if (this.value === "highToLow--S") {
        sortStar(productBox, lists, false);
    }

    if (this.value === "lowToHigh--P") {
        sortCost(productBox, lists, true);
    }

    if (this.value === "highToLow--P") {
        sortCost(productBox, lists, false);
    }

    if (this.value === "lowToHigh--D") {
        sortDistance(productBox, lists, true);
    }

    if (this.value === "highToLow--D") {
        sortDistance(productBox, lists, false);
    }
}

/* 按照價格排序 */
function sortStar(productBox, lists, asc) {
    let sortli = lists.sort((a, b) => {
        let aStar = a.getAttribute("data-star");
        let bStar = b.getAttribute("data-star");

        /* asc判斷升降冪 */

        if (asc) {
            return aStar - bStar
        } else {
            return bStar - aStar
        }

        // 升冪排序
        // arr.sort(function(a,b){
        //   return a - b
        // })

        // 降冪排序
        // arr.sort(function(a,b){
        //   return b - a
        // })

    });

    while (productBox.firstChild) {
        productBox.removeChild(productBox.firstChild);
    }

    productBox.append(...sortli);
}
function sortCost(productBox, lists, asc) {
    let sortli = lists.sort((a, b) => {
        let aPrice = a.getAttribute("data-price");
        let bPrice = b.getAttribute("data-price");

        /* asc判斷升降冪 */

        if (asc) {
            return aPrice - bPrice
        } else {
            return bPrice - aPrice
        }

        // 升冪排序
        // arr.sort(function(a,b){
        //   return a - b
        // })

        // 降冪排序
        // arr.sort(function(a,b){
        //   return b - a
        // })

    });

    while (productBox.firstChild) {
        productBox.removeChild(productBox.firstChild);
    }

    productBox.append(...sortli);
}
function sortDistance(productBox, lists, asc) {
    let sortli = lists.sort((a, b) => {
        let aDistance = a.getAttribute("data-distance");
        let bDistance = b.getAttribute("data-distance");

        /* asc判斷升降冪 */

        if (asc) {
            return aDistance - bDistance
        } else {
            return bDistance - aDistance
        }

        // 升冪排序
        // arr.sort(function(a,b){
        //   return a - b
        // })

        // 降冪排序
        // arr.sort(function(a,b){
        //   return b - a
        // })

    });

    while (productBox.firstChild) {
        productBox.removeChild(productBox.firstChild);
    }

    productBox.append(...sortli);
}