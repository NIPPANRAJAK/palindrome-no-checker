var n=454;
var temp=n;
var rev=0;
var r;
while(n > 0){
r = n % 10;
rev = (rev * 10)+r;
n = Math.floor(n/10);
}
if(rev === temp){
 console.log("yes it is a palindrome number");
}
else{
 console.log("no it os not a palindrome number");
 }