import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({items}) => {
  return (
    <main className={'item_list__main'}>
      {items.map(item => (
         <Item key={item.id} item={item}/>
        )
      )}
    </main>
  );
}

export default ItemList