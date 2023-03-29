import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardUser from '../../Components/CardUser/CardUser'
import { getAllUsers } from '../../Store/Slices/User/Thunk'

const ListUsers = () => {
    const dispatch = useDispatch()
    const {allUsers} = useSelector(state=>state.user)
    useEffect(()=>{
        dispatch(getAllUsers())
    },[])
  return (
    <>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        {allUsers?.map(el=>{
            return(
                <CardUser
                key={el.email}
                name={el.name}
                phone={el.phone}
                email={el.email}
                role={el.role}

                />
            )
        })}

    </div>
    </>
  )
}

export default ListUsers