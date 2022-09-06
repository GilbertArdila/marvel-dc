import React from 'react'

function useMyStates(){
const [modal, setModal] = React.useState(false)

    return {
        modal,
        setModal
    }
}
export {useMyStates}