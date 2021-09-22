const urlHeroku = 'https://john-gradi-store.herokuapp.com'

const getOrders = () => {
    try {
        fetch(urlHeroku + '/orders').then((res) => res.json())
        .then((response) => {
            document.getElementById('orders-text').innerText = response.orders.length
        })
    } catch (error) {
        console.error(error)
    }
}

const getUsers = () => {
    try {
        fetch(urlHeroku + '/users').then((res) => res.json())
        .then((response) => {
            document.getElementById('users-text').innerText = response.customers.length
        })
    } catch (error) {
        console.error(error)
    }
}


window.onload = getUsers(); getOrders();