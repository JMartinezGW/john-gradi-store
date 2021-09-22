const getOrders = () => {
    try {
        fetch('/orders').then((res) => res.json())
        .then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.error(error)
    }
}

window.onload = getOrders()