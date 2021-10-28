import React, { Fragment, useState } from 'react';
import { Button } from "rbx";
import UserService from '../../../services/users';
import { Redirect } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function UsersDelete() {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const deleteUser = async () => {
    if (window.confirm('Are you sure you wish to delete this account?')){
      UserService.delete()
      toast("Usuário deletado!!");
      setRedirectToHome(true)
    }
  }

  if(redirectToHome == true)
    return <Redirect to={{pathname: "/"}}/>

  return(
    <Fragment>
      <Button color="danger" onClick={() => deleteUser()}>
        Excluir conta
      </Button>
      <ToastContainer />
    </Fragment>
  )
}

export default UsersDelete;