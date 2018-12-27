var ar = [];
var output;
for (var i = 0; i < 6; i++)
{
  output='';
  ar[i]=[];
    for (var j = 0; j <= i; j++)
    {
    if (i == j || j == 0)
        ar[i][j]=1;
    else
        ar[i][j]=ar[i-1][j-1] + ar[i-1][j];
        output=output+' '+ar[i][j];
    }
    console.log(output);
}
