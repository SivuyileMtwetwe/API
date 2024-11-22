let friends

const  fetchData = async () => {
    let api =  await fetch("https://sivuyilemtwetwe.github.io/API/")

    let data = await api.json()

    friends = data

    friends.forEach(item => {
        console.log(`my name is ${item.firstName} my surname is ${item.lastName}, on my free time I like to enjoy my hobby which is ${item.favHobby}. In regard of my criminal record, ${item.criminal?"yes I have been convicted before but it was not my fault the other person started me":"I have been a good person."}`);
    
    })
    
    let filtered = friends.filter(friend => friend.firstName == "Sivuyile")
    // console.log(filtered);

    let notCriminals = friends.filter(friend => friend.criminal == false)
    // console.log(notCriminals);
    
    for (let k = 0; k < friends.length; k++) {
        for (let j = 0; j < friends[k].dreamCars.length; j++) {
            if (friends[k].dreamCars[j].carName === "Lamborghini" || friends[k].dreamCars[j].carName === "Dodge") {
                console.log(friends[k]);
                
            }
        }

}


}

fetchData() 