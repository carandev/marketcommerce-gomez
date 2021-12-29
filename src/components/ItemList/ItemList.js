import Item from '../Item/Item'
import styled from './itemList.module.css'

const ItemList = ({items}) => {
  return (
    <main className={styled.item_list__main}>
      {items.map(item => (
         <Item key={item[1]} item={item[0]} id={item[1]}/>
        )
      )}
    </main>
  );
}

export default ItemList
