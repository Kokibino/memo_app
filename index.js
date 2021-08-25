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

// //メモの内容を保存////save memo in textarea//
// function addMemoToList(content) {
//   var list = document.getElementById("memo-list");
//   var newItem = document.createElement("li");
//   newItem.textContent = content;
//   list.appendChild(newItem);
// }
// function saveMemo() {
//   var textarea = document.getElementById("memo");
//   addMemoToList(textarea.value);
// }











// const li = document.createElement('li')
//   li.innerText = memo.value
//   li.dataset.index = memo['data'];

// li.addEventListener('click', elem => {
//   const memoIndex = elem.target.dataset.index
//   document.querySelector('#memo-index').value = memoIndex
//   const memo = (localStorage.getItem('memo'));
//   const data = memo.data[memoIndex]
//   if (data) {
//     title.value = data.title
//     textarea.value = data.text
//   }
// })  

// const items = document.getElementsByClassName('list-group-items')
// <li 




//メモの内容を取得する get memo
// const textarea = document.getElementById("memo");
//   const value = textarea.value;
//   alert(value);//It will show you text area value


//Saves text onto textarea, 'Hello World'
//テキストをtextareaに保存
// let element = document.getElementById('#memo');
// element.value = "memo details";




// let textarea = document.getElementById('memo');
// console.log(textarea.memo);


// let memo = document.getElementById('memo');
// memo.textarea = 'Hello World';
// let msg = document.getElementById('msg');

// let element = document.queryElementById('#textarea');
// element.value = "メモの内容";


//メモの内容を保存 Save memo
