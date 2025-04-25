//Write a program that takes an array of days like "Mon", "Tue", and "Fri" 
// and uses a switch statement to print what type of delivery is scheduled on each day.

function deliverySchedule(days){
    for(let day of days){
        switch(day){
            case "monday":
                console.log(`${day} Overnighy deliver`)
                break
                case "tuesday":
                    console.log(`${day} Standard delivery`)
                    break
                    case "friday":
                        console.log(`${day} Express delivery`)
                        break
                        default:
                            console(`no delivery`)

        }
    }
}
deliverySchedule(["monday","tuesday","friday"])

//Create a program that loops through an array of book statuses and 
// prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".

function BookStatuse(statuses){
    for(let status of statuses){
        if(status === "available"){
            console.log("Ready to lend")
        }else if(status ==="borrowed")
        {
            console.log("Checked out")
        }
        
    }

}
let statuses = ["available","borrowed","available"]
BookStatuse(statuses)


//Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.
function checksAge(ages){
    for(let age of ages){
        if(age>=18){
            console.log("adult")
        }else{
            console.log("minor")
        }
    }
}
let ages = [20,15,10,18,25]
checksAge(ages)

//Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.

function countdown(allLives){
    let lives = 5
    while(lives>0){
        console.log(`you have ${lives} lives left`)
        lives--
    }
}
countdown()

//Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.
function userFeedback(feedback){

    do{
        const comment = feedback.shift()
        console.log(comment)

    }while(feedback.length>0)
}
userFeedback(["Could be better","Loved it","Go ahead"])



//Write a program that loops through an
//  array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.
function studentLogin(loginStatuses){
    loginStatuses.forEach(status=>{
        if(status==="logged in"){
            console.log("Welcome back!")
        }else{
            console.log("please log in");
        }
    })

}
studentLogin(["logged in","logged out","logged in"])


//Write a program that processes an array of support 
// ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".
function supportTicketPriorities(priorities){
    priorities.forEach(priority=>{
        switch(priority){
            case "low":
                console.log("Respond within 24hrs")
                break
                case "medium":
                console.log("Respond within 5 hours")
                break
                case "high":
                    console.log("Respond immediately")
                    break
                    default:
                        console.log("Unknown priority")
                        break
        }
    })
}

supportTicketPriorities(["low","high","medium","low"])

//Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.
function quizCountdown(countdowns){
    let countdown =10
        while(countdown>=0){
            console.log(countdown)
            countdown--
        }
    
}
quizCountdown()
