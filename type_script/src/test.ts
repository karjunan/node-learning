    
module var_ts {

    interface Add {
        (num:number, num1: number) : number
    }

    const add:Add = (num1,num2) => num1+num2

    console.log(add(1,223))

}
