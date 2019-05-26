// アルバムデータの作成
let album = [
  {src: 'img/1.jpg', msg: '清水寺から見渡す景色'},
  {src: 'img/2.jpg', msg: '清水寺にて集合写真'},
  {src: 'img/3.jpg', msg: '金閣寺'},
  {src: 'img/4.jpg', msg: '旅館の木造湯船'},
  {src: 'img/5.jpg', msg: '渓谷でお散歩'}
];

// 最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;
//要素を追加
let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

// サムネイル写真画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
  let thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlame.insertBefore(thumbImage, null);
};

// クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event){
  if (event.target.src) {
    //ここに処理を記述していく
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;
  }
});
