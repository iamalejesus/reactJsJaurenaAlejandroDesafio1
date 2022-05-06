import { useEffect, useState } from "react";
import { yatchsData } from "./data/Data";
import ItemList from "./ItemList";

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
        }).catch ((err) => {
            console.log ("Error en la promesa", err)           
        })

    }, [])


    return (
        <div className="itemListContainer">
            <div className="flex flex-raw m-20 justify-center"> 
                {yatchs.map ( yatch => <ItemList key={yatch.id} yatchData={yatch} /> )}
            </div>
        </div>   
    )
}

export default ItemListContainer