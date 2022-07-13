//   CHUỖI TRONG JAVASCRIPT
// 1. Tạo chuỗi

// - có 2 cách để tạo chuỗi 
//cách 1: dùng 1 cặp nháy đơn or nháy kép
var fullName = 'Son Dang'
//cách 2: sử dụng new string
var fullName = new String('Son Dang')
// lên dùng cách số 1

// - một số case sử dụng backslash(\)
// vd: 
fullName = 'Son Dang la \'Sieu Nhan\'';
 
  console.log(fullName)

// - xem độ dài chuỗi
// khi muốn xem độ dài của chuỗi ta sử dụng length
//vd:
  var fullName = 'Son Dang'; 
     
     console.log(fullName.length) 

// - Template string ES6 
  var firstName = 'Son'
  var lastName = 'Dang'
  
  console.log('Toi la: ${firstName} ${lastName}');
