async function postProduct(name, price){
    const floatPrice = parseFloat(price);

    try{
        const response = await fetch(`http://localhost:5000/produtos`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "price": floatPrice,
            })
        });

        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        return {
            status: response.status, 
            data: data
        };
    } catch (error){
        console.error(error);

        return {
            status: 'error',
            data: []
        };
    };
}

export { postProduct };
