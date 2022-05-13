import React from 'react'
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux'
import AddNewListButton from '../../List/AddNewListButton'


const linkStyle = {
  display: 'block',
  textDecoration: 'underline',
  color: 'blue',
  marginBottom: '15px',
  fontSize: '13px'
}

const addNewListStyle = {
  marginTop: '45px'
}

const ListsSidebar = () => {
  const { myLists } = useSelector((state)=> state.lists)

  return (
    <div>
      {myLists && myLists.map((list)=>{
        return (
          <Link to={`/lists/${list.id}`} style={linkStyle} key={list.id}>
            {list.title}<span>({list.numOfBooks !== 0 ? list.numOfBooks: 0 })</span>
          </Link>
        )
      })}
      <AddNewListButton opened={true} style={addNewListStyle}/>
    </div>

  );
};


export default ListsSidebar
