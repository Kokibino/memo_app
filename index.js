// メモを保存するデータ
let memos = {
  data: []
}

// すでにデータがあれば上書き
if (localStorage.getItem('memo')) {
  memos = JSON.parse(localStorage.getItem('memo'));
}

// 保存ボタンを押したときの処理
const saveButton = document.querySelector('#save_button')
saveButton.addEventListener('click', function() {
  const title = document.querySelector('#title')
  const textarea = document.querySelector('#memo')
  const record = {
    title: title.value,
    text: textarea.value
  }
  memos['data'].push(record); 
  localStorage.setItem('memo', JSON.stringify(memos));
})
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 画面読み込み後の処理
window.onload = function() {
  const memo = JSON.parse(localStorage.getItem('memo'));
  const textarea = document.querySelector('#memo')
  const titles = document.querySelector('#titles')

  // タイトルの一覧を作成
  memo.data.forEach( _memo => {
      const li = document.createElement('li')
      li.innerText = _memo.title
      titles.appendChild(li)
  });

  // タイトルをクリックしたときの処理
  titles.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', elem => {
          const data = memo.data.filter(_memo => _memo.title === elem.target.textContent)
          if (data) {
              title.value = data[0].title
              textarea.value = data[0].text
          }
      })
  })
}// the easy way to reset li
title = {};
console.log("li: ", title); // {}


