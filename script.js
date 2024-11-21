let friends

const  fetchData = async () => {
    let api =  await fetch("https://sivuyilemtwetwe.github.io/API/")

    let data = await api.json()

    friends = data

    friends.forEach(item => {
        console.log(item.firstName);
    })

}



fetchData() 