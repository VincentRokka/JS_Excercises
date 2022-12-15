//1.Lap ra n lan ky tu nhap vao
// function loopTheStringTenTimes() {
//     var str = prompt("Nhập vào 1 chuỗi kí tự bất kì");
//     var loopResult = "";
//     for (var i = 0; i < 10; i++) {
//       loopResult += `${str}-`;
//     }
//     document.getElementById("result-1").innerHTML = loopResult.slice(0, -1);
//   }

//   loopTheStringTenTimes();

//2.Tinh giai thua
// function factorial() {
//     var num = prompt("Nhap N");
//     var result = 1;
//     for (let i = 2; i <= num; i++) {
//         result *= i ;
//     }

//     document.getElementById('result-2').innerHTML = result;
// }

// factorial();

//3.Dao Chuoi

// function daoChuoi() {
//     var str = prompt("Nhap chuoi");
//     var result = '';
//     for (let i = str.length-1; i >= 0; i--) {
//         result += str[i];
//     }

//     document.getElementById('result-3').innerHTML = result;
// }

// daoChuoi();


//4.Sap xep ten theo Thu tu alpha b

// function sortStudentsOne() {
//     var studentsNameOne = prompt("Nhập vào tên các học viênn ").split(",");
//     var order = 0;

//     for (var i = 0; i < studentsNameOne.length; i++) {
//       order++;
//       studentsNameOne.sort();
//       document.getElementById("result-4").innerHTML +=
//         "Thứ tự học viên " + order + ". " + studentsNameOne[i] + "<br>" + "<hr>";
//     }
//   }
  
// sortStudentsOne();

//5. TaoMangMoi

// function workArray() {
//     var arr = prompt("nhap mang cac pt cach nhau boi dau \' ").split(',');
//     var result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i] % 2;
//     }

//     document.getElementById('result-5').innerHTML = result;
// }

// workArray();

//6. Color of Numbers

// function makeColor() {
//     var j = 0 ;
//     for (let i = 1; i <= 100; i+=2) {
//         document.write('<font color="red">' + i + '</font>' + 
//         '<font color="blue">' + (j+=2) + '</font>');
//     }
// }

// makeColor();





