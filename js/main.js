'use script'

// 変数
let hoursTotal = 0;

// DOM取得
const subjectInput = document.getElementById('subject');
const studyHoursInput = document.getElementById('study-hours');
const addBtn = document.getElementById('add-btn');
const subjectList = document.getElementById('subject-list');
const studyHoursTotal = document.getElementById('study-hours-total');

// ボタンクリックで値を取得と表示
addBtn.addEventListener('click', () => {
  // 入力された値を取得する
  const addSubject = subjectInput.value.trim();
  const addStudyHours = studyHoursInput.value.trim();

  if (addSubject !== '' && addStudyHours !== '') {
    // p要素を作成
    const p = document.createElement('p');
    p.textContent = `学習内容: ${addSubject} / 時間: ${addStudyHours}分`;
    // リストに追加
    subjectList.appendChild(p);
    // 数値に変換
    const hoursNumbers = parseInt(addStudyHours);
    hoursTotal = hoursTotal + hoursNumbers;
    studyHoursTotal.textContent = `合計: ${hoursTotal}分`;
    // 入力欄のクリア
    subjectInput.value = '';
    studyHoursInput.value = '';
  } else {
    alert('未入力の項目があります。');
  }

});
