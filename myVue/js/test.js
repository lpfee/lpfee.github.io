//闭包
(function() {
	var _userId = 12345;
	var _typrId = "item";
	var obj = {};

	function converter(userId) {
		return + userId;
	}

	obj.getUserId = function() {
		return converter(_userId);
	}

	obj.getTypeId = function() {
		return _typrId;
	}

	window.obj = obj;
}());


obj.getUserId(); //12345
obj.getTypeId(); //"item"

obj._userId; //undefind
obj._typrId; //undefind
obj.converter; //undefind



//执行上下文
alert(x);   //function

var x = 10;
alert(x)  //10
x = 20;

function x() {

}
alert(x); //20

if(true) {
	var a = 1;
} else {
	var b = true;
}

alert(a); //1
alert(b); //undefind

//1、函数生命被提前处理，所以第一行的alert(x)值为function；
//2、x赋值成功，第二个alert(x)为10；
//3、函数声明x重名被变量覆盖，第三个alert(x)为20；
//4、if/else语句执行true的内容，a复制成功，alert(a)为1；
//5、b被前置处理初始化为undefind
