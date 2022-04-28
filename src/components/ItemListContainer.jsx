import { useEffect, useState } from "react";
import { yatchsData } from "./data/Data";

const ItemListContainer = () => {

    const [yatchs, setYatchs] = useState([])

    useEffect ( () => {
        const getYatchs = new Promise ( (resolve, reject) => {

            setTimeout ( () => {
                resolve (yatchsData)
            }, 2000)
        } ) 

        getYatchs.then ( (result)=> {
            console.log (result);
            setYatchs (result)
            .catch ((err) => {
                console.log ("Error en la promesa", err)
            })
        })

    }, [])


    return (
        <div className="itemListContainer">
            <div> {yatchs.map ( yatch => 
                <div class="card w-96 bg-base-100 shadow-xl m-5">
                    <figure><img src="..\..\..\..\img\yatchs\Legacy3.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title m-2"> {yatch.name} </h2>
                        <p> {yatch.value} </p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-outline">Comprar</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>   
    )
}

export default ItemListContainer