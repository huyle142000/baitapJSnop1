/**Bài tập 1
 * input:
 * Tiền 1 ngày làm
 * Số ngày làm
 *Xử lý: 
 *Khai báo biến lưu Tiền 1 ngày và số ngày làm 
 *Lập công thức tính tạo biến lưu Tiền * Số Ngày Làm
 *Output:
 * Tổng số tiền làm được là bao nhiêu
 */


var income = document.getElementById('income');
income.addEventListener('click', () => {
    //input
    var incomePerDay = 100000;
    var day = Number(document.getElementById('takeDay').value);
    //output
    var incomeSum = 0;
    //progress
    incomeSum = incomePerDay * day;
    var resultIncome = document.getElementById('resultIncome');
    resultIncome.innerHTML = 'Số tiền là: ' + incomeSum.toLocaleString() + 'VND';


});


//BT2
/**
 * input:
 * Nhập vào 5 số thực
 * Xử lý:
 * Tạo 5 biến lưu giá trị khi nhập và ép kiểu number() cho biến
 * Tạo 5 biến xác nhận số có nhập không? 
 * Nếu nhập số lớn hơn 0 thì biến xác nhận của số đó là 1
 *Tạo biến là tổng lưu các giá trị xác nhận của từng số để chia cho đúng số được nhập vào
 * Output:
 * Giá trị trung bình của số=(tổng 5 biến lưu số nhập) / tổng số lưu giá trị xác nhận 
 */
var average = document.getElementById('average');
average.addEventListener('click', () => {
    //input
    var A = Number(document.getElementById('takeA').value);
    var B = Number(document.getElementById('takeB').value);
    var C = Number(document.getElementById('takeC').value);
    var D = Number(document.getElementById('takeD').value);
    var E = Number(document.getElementById('takeE').value);
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    //output
    var averageSum = 0;
    // progress
    if (A > 0) {
        var a = 1;
    }
    if (B > 0) {
        var b = 1;
    }
    if (C > 0) {
        var c = 1;
    }
    if (D > 0) {
        var d = 1;
    }
    if (E > 0) {
        var e = 1;
    }
    var sum = a + b + c + d + e;
    averageSum = (A + B + C + D + E) / sum;
    var resultAverage = document.getElementById('resultAverage');
    resultAverage.innerHTML = 'Số trung bình là: ' + averageSum;


});

//BT3
/**
 * input: 
 * giá tiền của 1 usd là 23.500
 * Số Tiền Usd nhập 
 * Xử lý:
 * Tạo biến lưu giá tiền USD ép kiểu number() cho biến
 * Tạo biến lưu giá tiền quy ước 1USD là 23.500 VND
 * Công thức : Số tiền Usd nhập * số tiền quy ước 1USD là bao nhiêu tiền Việt 
 * OUTPUT:
 * Số tiền sau khi qui đổi
 */
var USD = document.getElementById('USD');
USD.addEventListener('click', () => {
    //input
    var takeUSD = Number(document.getElementById('takeUSD').value);
    var VND = Number(document.querySelector('.VND').innerHTML.replace(',', ''));
    //output
    var output = 0;
    //progress
    output = takeUSD * VND;
    var resultUSD = document.getElementById('resultUSD');
    resultUSD.innerHTML = 'Số tiền là: ' + output.toLocaleString() + 'VND';
});

//BT4
/**
 * inPut:
 * Chiều Dài 
 * Chiều Rộng
 * Xử lý:
 * tạo biến lưu giá trị Chiều rộng và chiều dài và ép kiểu number() cho biến
 * tạo biến công thức : 
 * Chu vi = (Chiều rộng + Chiều dài)*2
 * Diện tích = Dài * Rộng
 * Output:
 * Chu Vi là 
 * Diện Tích là
 */
var perimeter = document.getElementById('perimeter');
perimeter.addEventListener('click', () => {
    //input
    var takeLength = Number(document.querySelector('.takelength').value);
    var takeWidth = Number(document.querySelector('.takewidth').value);
    //output
    var output = 0;
    //progress
    output = (takeLength + takeWidth) * 2;
    var perimeter = document.getElementById('resultperimeter');
    perimeter.innerHTML = 'Chu vi là: ' + output;
});

var area = document.getElementById('area');
area.addEventListener('click', () => {
    //input
    var takeLength = Number(document.querySelector('.takelength').value);
    var takeWidth = Number(document.querySelector('.takewidth').value);
    //output
    var output = 0;
    //progress
    output = (takeLength * takeWidth);
    var resultarea = document.getElementById('resultarea');
    resultarea.innerHTML = 'Diện tích là: ' + output;
});


//BT5
/**
 * inPut:
 * Số thứ 1
 * Xử lý:
 * tạo biến lưu giá trị Số thứ 1 và  ép kiểu number() cho biến
 * tạo biến công thức : 
 * HÀNG đơn vị,Hàng Chục, Hàng TRăm, Hàng Ngàn,...
 * Tạo hàm nhận tham số là số thứ nhất :
 * Dùng if else để xác nhận giá trị nhập vào : <100,<1000<10000<...<10000000
 * Các công thức tính sẽ thay đổi dựa vào giá trị nhập và nếu số nhập lớn hơn 10 triệu thì output = 0 return k thúc sau đó if else nếu output =0 thì trả lại kq là bạn nhập số có giá trị ít hơn 10 triệu
 * Tạo biến là tổng của các giá trị hàng đơn vị,...
 * Sau đó return giá trị của biến tổng đó
 * Tạo biến output lưu giá trị return của hàm 
 *
 * Output:
 * Tổng ký số của số vừa nhập
 */
var dozens = Math.floor(90 % 100 / 10);
console.log(dozens)
var sumNumber = document.getElementById('sumNumber');
sumNumber.addEventListener('click', () => {
    //input
    var firstNumber = Number(document.getElementById('firstNumber').value);
    //output
    var output = 0;
    //progress
    function kiSo(a) {
        var hundereds1 = 0;
        var thousands1 = 0;
        var tenthousands1 = 0;
        var hunderedthousands1 = 0;
        var milions1 = 0;
        var dozens1 = Math.floor((a % 100) / 10);
        var units1 = a % 10;
        if (a < 1000) {
            hundereds1 = Math.floor((a % 1000) / 100);
        }else if (a < 10000) {
            thousands1 = Math.floor(a / 1000);
            hundereds1 = Math.floor((a % 1000) / 100);

        }else if (a < 100000) {
            tenthousands1 = Math.floor(a / 10000);
            thousands1 = Math.floor((a % 10000) / 1000);
            hundereds1 = Math.floor((a % 1000) / 100);
        }else if (a < 1000000) {
            hunderedthousands1 = Math.floor(a / 100000);
            tenthousands1 = Math.floor((a % 100000) / 10000);
            thousands1 = Math.floor((a % 10000) / 1000);
            hundereds1 = Math.floor((a % 1000) / 100);

        }else if (a < 10000000) {
            milions1 = Math.floor(a / 1000000);
            hunderedthousands1 = Math.floor((a % 1000000) / 100000);
            tenthousands1 = Math.floor((a % 100000) / 10000);
            thousands1 = Math.floor((a % 10000) / 1000);
            hundereds1 = Math.floor((a % 1000) / 100);
        }
        if (a >= 10000000) {
            return sum1 = 0;

        }

        
        var sum1 = dozens1 + units1 + hundereds1 + thousands1 + tenthousands1 + hunderedthousands1 + milions1;
        
        return sum1

    }
    var resultsumNumber = document.getElementById('resultsumNumber');
    output = kiSo(firstNumber);
    if (output === 0) {
        resultsumNumber.innerHTML = 'Số bạn nhập phải bé hơn 10.000.000';
        return;
    }
    resultsumNumber.innerHTML = 'Tổng kí số là: ' + output;
});