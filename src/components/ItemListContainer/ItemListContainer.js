import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";

import ItemList from "../ItemList/ItemList";
import ItemCategory from "../ItemCategory/ItemCategory";
import {useParams} from "react-router-dom";

const ItemListContainer = (  ) => {
  let [items, setItems] = useState([])
  let { categoryId } = useParams()

  useEffect(() => {
    setTimeout(() => fetch('/items.json')
        .then(res => res.json())
        .then(res => {
          if (categoryId === undefined){
            setItems(res)
          }else {
            let temporalItems = []
            res.forEach(item => item.category === categoryId && temporalItems.push(item))
            setItems(temporalItems)
          }
        }),
      2000)
  }, [categoryId])

  return (
    <>
      <ItemCategory/>
      <ItemList items={items}/>
    </>
  )
};

ItemListContainer.propTypes = {
  category: PropTypes.string
}

ItemListContainer.defaultProps = {
  category: 'all'
}

export default ItemListContainer;
