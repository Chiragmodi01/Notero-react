import React from 'react'
import { ToastContainer, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNote } from '../helpers/context/note-context';

function Toast() {
    const {utilsState} = useNote();

  return (
    <ToastContainer
        position="bottom-left"
        autoClose={2500}
        hideProgressBar={false}
        transition={Flip}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={2}
        theme='theme'
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName={utilsState.darkTheme ? "dark-toast" : "light-toast"}
    />
  )
}

export default Toast