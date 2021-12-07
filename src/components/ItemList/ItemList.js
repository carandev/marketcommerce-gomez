import Item from '../Item/Item'
import styled from './itemList.module.css'

const ItemList = ({items}) => {
  return (
    <main className={styled.item_list__main}>
      {items.map(item => (
         <Item key={item.id} item={item}/>
        )
      )}
    </main>
  );
}

export default ItemList