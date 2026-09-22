function check(age){
    return new Promise((resolve, reject)=>{
        if(age >= 18){
            resolve("Eligible to vote");
        }else{
            reject("not eligible to vote");
        }
    })
}
async function verifyAge(age){
    try{
    const result = await check(age);
    console.log(result);
    }catch(error){
        console.log(error);
    }
}
verifyAge(20);