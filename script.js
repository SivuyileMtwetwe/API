let friends

const  fetchData = async () => {
    let api =  await fetch("https://sivuyilemtwetwe.github.io/API/")

    let data = await api.json()

    friends = data

    friends.forEach(item => {
        // console.log(item.firstName);
        return `my name is ${item.firstName} my surname is ${item.lastName}, on my free time I like to enjoy my hobby which is ${item.favHobby}. My criminal status is ${item.criminal}`
    })

}



fetchData() 