/*

    Các loại function
    1. Declaration function
    2. Expression function
    3. Arrow function
*/    

// 1. Declaration function
// Declaration function có thể gọi trước khi đc định nghĩa
//vd:

showMessage();

function showMessage(){

}
// 2.Expression function
// Expression function không thể gọi trước khi đc định nghĩa
// Expression function có thể đặt tên hoặc không
var showMessage = function(){

}

setTimeout(function(){

});

var myObject={
    myFunction: function(){

    }
}
