import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { yatchsData } from './data/Data'

const ItemDetail = () => {
    const {itemId} = useParams ()
    const [yatch, setYatch] = useState ( {} )

    useEffect( () => {

        (async () => {
            const yatchData = await getYatchDetail ()
            if (yatchData) {
                setYatch (yatchData)
            }
        })()

    }, [itemId])
    
    const getYatchDetail = () => { 
        return new Promise ( (resolve) => {
            setTimeout(() => {
                resolve (yatchsData.find(r => r.id == itemId))
            }, 2000);
        })
    }

    return (
        <>
            <div className='m-5'>ItemDetail - {itemId}</div>
            <div class="card w-96 glass m-5">
                <figure><img src="..\..\..\..\img\yatchs\Legacy3.jpg" alt="car!"></img></figure>
                    <div class="card-body">
                        <h2 class="card-title">{yatch.name}</h2>
                        <p>${yatch.value}</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-outline">Comprar</button>
                            </div>
                    </div>
            </div>
        </>
    )
}

export default ItemDetail