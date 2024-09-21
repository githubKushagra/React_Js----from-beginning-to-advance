import React from 'react'

function Alert(props) {

    // to capitalize the first character of the type of letter
    const capitalizeFirstCharacter = (word) => {
        var str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);    // slice means add the string from 1 index
    }

  return (
        <>
            {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalizeFirstCharacter(props.alert.type)}</strong> : {props.alert.msg}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </>
  )
}

export default Alert
