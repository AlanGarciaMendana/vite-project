import { Items } from "../items/items";

export const ItemList = ({productsList}) => {
    return (
      <>
          {productsList.map((elem)=>{
              return <Items  key={elem.id} {...elem}/>
          })}
      </>
    )
  }
  