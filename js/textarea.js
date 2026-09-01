document.querySelector('.mask').innerHTML = `
<div class="has_no_text">
  <p class="pop_title">注意!</p>
  <p class="pop_text">記得輸入文字喔～</p>
  <button class="button pop_btn" onclick="close_it()">確定</button>
</div>
<div class="has_text">
  <p class="pop_title">通知</p>
  <p class="pop_text">感謝您的留言～</p>
  <button class="button pop_btn" onclick="close_it()">確定</button>
</div>`;
