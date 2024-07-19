// ボタンクリック関数
function buttonClick1(){
    // alert()で、アラートを出力
    alert('希望の象徴');
}

// document.getElementById()でHTMLの中でid属性がbtnの要素を取得し、変数buttonに代入する
let button1 = document.getElementById('btn');
// buttonのonclickプロパティに上記で宣言しているボタンクリック関数を代入
button1.onclick = buttonClick1;