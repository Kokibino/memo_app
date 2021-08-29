// 保存ボタンを押したときの処理
const saveButton = document.querySelector('#save_button')
saveButton.addEventListener('click', function() {
const textarea = document.querySelector('#memo')
textarea.value;
console.log(textarea.value);
//上のブラウザを保存する
localStorage.setItem('memo', textarea.value); //setting value to memo
//get memo from local storage
const memo = localStorage.getItem('memo');
memo.value = textarea;

})
// Get memo info(取得する)//
// 画面読み込み後の処理
window.onload = function() {
  const memo = localStorage.getItem('memo'); //getting memo from stored storage
  const textarea = document.querySelector('#memo');
  textarea.value = memo;
  console.log(memo);
}

