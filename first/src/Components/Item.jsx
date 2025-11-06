import './Item.css'

function Item(props){
    const  ITemName = props.name; //props

    return(
        <div>
        <p className="nirma"> {ITemName} </p>
        {props.children}
        </div>
    )

}

export default Item;