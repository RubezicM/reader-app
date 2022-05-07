import React from 'react';
import {useParams} from "react-router-dom";

function ListDetails () {

  const {listName} = useParams()
  return (
      <div>
        ListDetails page
      </div>
  );
}

export default ListDetails;
