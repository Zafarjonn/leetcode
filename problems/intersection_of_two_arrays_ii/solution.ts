function intersect(nums1: number[], nums2: number[]): number[] {
    var ans:number[]=[];
    for(let i=0; i<nums1.length; i++){
        for(let j=0; j<nums2.length; j++){
            if(nums1[i]==nums2[j]){
                ans.push(nums1[i]);
                nums2.splice(j, 1);
                break;
            }
        }
    }
    return ans;
};