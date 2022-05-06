import { Link } from "react-router-dom"

const ItemList = ( {yatchData} ) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl m-5">
                    <figure><img src="..\..\..\..\img\yatchs\Legacy3.jpg" alt="Yatchs" /></figure>
                    <div class="card-body">
                        <h2 class="card-title"> {yatchData.name} </h2>
                        <div class="card-actions justify-end">
                            <button class="btn btn-outline"><Link to="/item/:itemId">Ver más</Link></button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ItemList