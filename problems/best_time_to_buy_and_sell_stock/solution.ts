function maxProfit(prices: number[]): number {
  /*  var max:number=0;
    for(let i=1; i<prices.length; i++){
        for(let j=i; j>=0; j--){
            if(prices[i]-prices[j]>max ){
                max=prices[i]-prices[j];
            }
        }
    }
    if(max<0){
        return 0;
    }else{
    return max;
    }
  */
   let minPrice: number = prices[0];
   let maxProfit: number = 0;

   for(let i = 1; i < prices.length; i++){
       if(prices[i] < minPrice){
           minPrice = prices[i];
       }
       maxProfit = Math.max(maxProfit, prices[i] - minPrice);
   }
   return maxProfit; 
};