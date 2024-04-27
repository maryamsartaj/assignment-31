let userNames = ["Mahad","Ali","Zeeshan","Admin","Usama"]

if (userNames.length === 0){
    console.log("Your Array in Empty We need to find some users!")
}else{
    //Using forEach Loop on Array
    
    userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a ststus report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for loging in again`)
    }   
    })
}
