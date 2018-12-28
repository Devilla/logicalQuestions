function arrayPush (tempArray, chr) {
       var array = [];
       if (tempArray.length === 0) {
            (array.push( new String(chr).toString()) > 0);
       }
       for (var i = 0; i < tempArray.length; i++) {
           var item = tempArray[i];
           {
               (array.push(item + new String(chr).toString()) > 0);
           }
       }
       return array;
   };

var str ='1123';
var array = [];
var tempArray = [];
for (var i = 0; i < str.length; i++) {
    var t1 = [];
    var t2 = [];
    if (i >= 1) {
        var num1 = parseInt(str.substring(i - 1, i + 1));
        if (num1 <= 26 && num1 >= 10) {
            var chr = String.fromCharCode((num1 + 96));
            t1 = arrayPush(tempArray, chr);
        }
    }
    var num2 = parseInt(str.substring(i, i + 1));
    if (num2 !== 0) {
        var chr = String.fromCharCode((num2 + 96));
        t2 = arrayPush(array, chr);
    }
    tempArray = array;
     (function (l1, l2) { return l1.push.apply(l1, l2); })(t1, t2);
    array = t1;
}

for (var i=0;i<array.length;i++)
  console.log(array[i]);
