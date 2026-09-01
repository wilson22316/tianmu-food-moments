document.querySelector('.modal').innerHTML = `
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <p class="modal-title" id="ModalLabel">我們幫你選！節省您的寶貴時光～</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div id="random"></div>

        <div class="modal-footer">
            <button type="button" class="btn btn-primary pop fast"
                style="border:none;background: #f0a28f;">再來一次</button>
            <!-- <button type="button"class="btnbtn-primary"data-bs-dismiss="modal">確  定  </button> -->
        </div>
    </div>
</div>`;

document.querySelector('.bottom_button').innerHTML = `
<div class="circle_opacity--5 icon_always--1">
    <a class="love" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop"
        aria-controls="offcanvasWithBackdrop">
        <i class="fas fa-heart icon_bottom--1"></i>
    </a>
</div>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasWithBackdrop"
aria-labelledby="offcanvasWithBackdropLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">我的收藏</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
    </div>
    
    <div class="offcanvas-body collect">
        <p></p>
    </div>
</div>

<div class="circle_opacity--5 icon_always--2">
    <a class="back-to-top" href="#">
        <i class="fas fa-chevron-up icon_bottom--2"></i>
    </a>
</div>`;