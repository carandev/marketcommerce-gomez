import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({items}) => {
  return (
    <main>
      {items.map(item => <Item item={item}/>)}
    </main>
  );
}

export default ItemList