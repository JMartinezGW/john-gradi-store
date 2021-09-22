const urlHeroku = 'https://john-gradi-store.herokuapp.com'

const getOrders = () => {
    try {
        fetch(urlHeroku + '/orders').then((res) => res.json())
        .then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.error(error)
    }
}

window.onload = getOrders()