num = [2, 4, 4, 5, 4, 1 ];
arr = [];
brr = [];
arr[0]=0;
brr[0]=0;
var index,check=0;
for(var i=1;i<=num.length;i++){
  arr[i]=arr[i-1]+num[i-1];
}
for(var j=1;j<arr.length;j++){
  brr[j]=arr[arr.length-j-1];
}

for(var i=1;i<=num.length;i++){
  if(arr[i]==brr[i]){
    check=1;
    index=i-1;
    break;
  }
}
if(check==1){
  console.log(i-1);
}
else if (check==0) {
  console.log("No index found!");
}
