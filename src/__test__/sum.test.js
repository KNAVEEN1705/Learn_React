import { sum } from "../sum";

test("Sum function should caculate two numbers",()=>{
    const result=sum(10,5);
    //Assertion 
    expect(result).toBe(15);
})