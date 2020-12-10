import React from 'react';
import UserDataService from "../../../../Shared/services/http-common-services";

const GetAllUser = () => {
    const getAllUser = () => {
        UserDataService.getAll()
      .then(response => {
          debugger
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });

    }
    return(
        <button onClick={getAllUser}>GetAllUser</button>
    )
}

export default GetAllUser