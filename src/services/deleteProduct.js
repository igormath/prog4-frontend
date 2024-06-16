async function deleteProduct(id){
    
    try{
        const response = await fetch(`http://localhost:5000/produtos/${id}`, {
            method: 'DELETE',
        })

        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
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
    }
}

export {deleteProduct};
