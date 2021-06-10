'use strict'

{
  //要素を取得
  const addBtn = document.getElementById('add-btn');
  const incompleteList = document.getElementById('incomplete-list');
  const completeList = document.getElementById('complete-list');

  //btnを作る
  const createBtn = (name) => {
    const btn = document.createElement('button');
    btn.textContent = name;
    return btn;
  };

  const addList = addBtn.addEventListener('click', () => {
    //inputを取得
    const inputText = document.querySelector('input').value;
    //inputに文字列があるときだけ、リストに追加
    if (inputText !== '') {
      //inputの中を空に
      document.querySelector('input').value = '';
      document.querySelector('input').focus();

      //要素を生成
      const li = document.createElement('li');
      const div = document.createElement('div');
      const p = document.createElement('p');
      const completeBtn = createBtn('完了');
      const deleteBtn = createBtn('削除');
      const returnBtn = createBtn('戻す');
      
      //inputの内容を追加
      p.textContent = inputText;

      //deleteボタンにイベントを追加
      deleteBtn.addEventListener('click', () => {
        const target = deleteBtn.parentNode.parentNode;
        incompleteList.removeChild(target);
      });

      //completeボタンにイベントを追加
      completeBtn.addEventListener('click', () => {
        const target = completeBtn.parentNode.parentNode;
        incompleteList.removeChild(target);

        //ボタンの変更
        div.removeChild(completeBtn);
        div.removeChild(deleteBtn);
        div.appendChild(returnBtn);

        completeList.appendChild(target);
      });

      //returnボタンにイベントを追加
      returnBtn.addEventListener('click', () => {
        const target = returnBtn.parentNode.parentNode;
        completeList.removeChild(target);

        //ボタンの変更
        div.removeChild(returnBtn);
        div.appendChild(completeBtn);
        div.appendChild(deleteBtn);

        incompleteList.appendChild(target);
      });

      //要素を入れる
      div.appendChild(p);
      div.appendChild(completeBtn);
      div.appendChild(deleteBtn);
      li.appendChild(div);
      
      //未完了リストに追加
      incompleteList.appendChild(li);
    }
  });


}