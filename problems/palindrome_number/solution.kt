class Solution {
    var sum=0;
    fun isPalindrome(x: Int): Boolean {
        var a=x;
        while(a>0){
            val qoldiq=a%10
            sum=(sum*10)+qoldiq
            a=a/10;
        }
        return sum==x
    }
}