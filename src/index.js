/**
 * const, letの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "val1を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き"
// console.log(val2);

// // let変数は再宣言不可能
// let val2 = "let変数を再宣言不可能"

// const val3 = "const変数";
// console.log(val3);

// // // const変数は上書き不可能
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言"

// const val4 = {
//   name: "おがけん",
//   age: 28,

// };

// console.log(val4);

// val4.name = "ogawa";
// val4.addres = "japan"
// console.log(val4);

//constで定義した配列は、プロパティの編集が可能
// const val5 = ["dog", "cat"];
// val5[0] = "tiger";
// val5.push("monkey");
// console.log(val5)

/**
 * テンプレート文字列
 */
// const name = "健吾";

// const age = 28;
// // // [私の名前はけんごです。年齢は28歳です。]
// // const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// // console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2)

/**
 * アロー関数
 */

// function func(num) {
//   return num * 10;
// }

// console.log(func(6));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "けんご",
//   age: 28,
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん！`);
// sayHello("おがわ");

/**
 * スプレッド構文　...
 */

//  //配列の展開
//  const arr1 = [1,2];
//  console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

// //まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3)

//配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6)
// console.log(arr4);

// const arr7 = [...arr4,...arr5];
// console.log(arr7)

/**
 * map やfilterを使った配列の処理
 */

// const nameArr = ["田中", "加藤", "小川"];
// for(let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map
// const num = "1300";
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checksum = (num1,num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : "許容範囲ないです";
// }

// console.log(checksum(50,20))

/**
 * 論理演算子の本当の意味を知ろう！
 */
