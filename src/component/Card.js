function Card ({product}){
    // const  [img,name,price,category]=product
    return(
        <div className=" card  text-center rounded-md bg-cyan-400">
            <img className="w-full rounded-md h-40 " src={product.img} alt={product.name}/>
            <h3>{product.name}</h3>
             <p>{product.category}</p>
            <p><span>${product.price}</span></p>
        </div>
    )
}
export default Card