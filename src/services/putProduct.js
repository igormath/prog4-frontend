async function putProduct(id, updatedProductName, updatedProductPrice){
    const intSelectedProductId = parseInt(id);
    const floatUpdatedPrice = parseFloat(updatedProductPrice);
    
    try{
        const response = await fetch(`http://localhost:5000/produtos/${intSelectedProductId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: updatedProductName,
                price: floatUpdatedPrice
            }),
        });
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json();
        return {
            status: response.status, 
            data: data
        };
    }catch(error){
        console.error(error);
        return { 
            status: 'error', 
            data: []
        };
    }
};

export { putProduct };
