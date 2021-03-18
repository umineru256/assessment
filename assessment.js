'use strict';
const userNameInput = document.getElementById('user-Name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
/**
 * 指定した子供たち全て削除
 * @parme{HTMLelement}element HTMLの要素
 */
function removeAllChildren(element) {
    while (element.firstChild) {
      // 子どもの要素があるかぎり削除
      element.removeChild(element.firstChild);
    }
  }
assessmentButton.onclick = ()　=> {

    const userName = userNameInput.value;
    if(userName.length === 0　){
        //名前が空のとき処理を終了する
        return;
    }
  console.log('userName');
  // TODO 診断結果表示エリアの作成
  // TODO ツイートエリアの作成

//診断心臓
const header = document.createElement('h3');
header.innerText='診断結果';
resultDivided.appendChild(header);

const paragraph = document.createElement('p');
const result = assessment(userName);
paragraph.innerText = result;
resultDivided.appendChild(paragraph);
//TODO　ツイートエリア
};

const answers = [
    '{userName}にお勧めするアニメは、やはり俺の青春ラブコメは間違っている',
    '{userName}にお勧めするアニメは、RE:ゼロから始まる異世界生活。',
    '{userName}にお勧めするアニメは、この素晴らしい世界に祝福を！',
    '{userName}にお勧めするアニメは、あだちとしまむら',
    '{userName}にお勧めするアニメは、ご注文はうさぎですか？',
    '{userName}にお勧めするアニメは、五等分の花嫁',
    '{userName}にお勧めするアニメは、恋と嘘',
    '{userName}にお勧めするアニメは、ソード・アート・オンライン',
    '{userName}にお勧めするアニメは、かくしごと',
    '{userName}にお勧めするアニメは、僕のヒーローアカデミア',
    '{userName}にお勧めするアニメは、神様になった日',
    '{userName}にお勧めするアニメは、オーバーロード',
    '{userName}にお勧めするアニメは、彼女お借りします',
    '{userName}にお勧めするアニメは、ひぐらしのなく頃に',
    '{userName}にお勧めするアニメは、シュタインズゲート',
    '{userName}にお勧めするアニメは、CLANND',
    '{userName}にお勧めするアニメは、彼方のアストラ',
    '{userName}にお勧めするアニメは、けいおん！！',
    '{userName}にお勧めするアニメは、さくら荘のペットな彼女',
    '{userName}にお勧めするアニメは、魔法科高校の劣等生',
    '{userName}にお勧めするアニメは、血界戦線',
    '{userName}にお勧めするアニメは、鋼の錬金術師',
    '{userName}にお勧めするアニメは、charlotte',
    '{userName}にお勧めするアニメは、じょしらく',
    '{userName}にお勧めするアニメは、ラブライブ',
    '{userName}にお勧めするアニメは、涼宮ハルヒの憂鬱',
    '{userName}にお勧めするアニメは、ゲーマーズ',
    '{userName}にお勧めするアニメは、ようこそ実力至上主義の教室へ',
    '{userName}にお勧めするアニメは、デート・ア・ライブ',
    '{userName}にお勧めするアニメは,School day',
];
/**
 * 　名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string}診断結果
 */
function assessment(userName) {
    //全文字のコードコード番号を取得してそれを足し合わせる
    let sumOfcharcode = 0;
    for (let i = 0; i　<　userName.length; i++){
        sumOfcharcode = sumOfcharcode + userName.charCodeAt(i);
    }
//文字なコード番号の合計を解答の数で割って添字の数値を求める
const index = sumOfcharcode % answers.length;
let result = answers[index];

result = result.replace(/\{userName\}/g,userName);
return result;
}

  //診断結果表示エリアの指定
  while(resultDivided.firstChild){
      //子供の要素が有る限り、、、、
      resultDivided.removeChild(resultDivided.firstChild);
  }
const header = document.createElement('h3');
