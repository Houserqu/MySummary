

var input = [3,1,2,1,3,8,8,7,3,2]; //输入数组

input.sort(compare);	//排序

var inputLen = input.length;//输入数组长度

console.log(input);

var result = [];	//储存结果

var flag = input[0];	//当前元素
var itemsum = 1;	//当前元素的个数

for(var i = 1; i < inputLen; i++){
	if(input[i] == flag){
		itemsum++;

	}else{

		result.push({name:flag, sum: itemsum});
		flag = input[i];
		itemsum = 1;
	}
}
result.push({name:flag, sum: itemsum});	//push最后一个元素

console.log(result);

//排序
function compare(value_1, value_2) {
	return value_1 - value_2;
}