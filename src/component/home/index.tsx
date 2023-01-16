import { Button } from "@mui/material"
import React, {useEffect} from "react"
import { useNavigate } from 'react-router-dom';

export default function Home (){
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate('/login')
    }

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token) {
            navigate('/login')
        }
    },[])

    return (
        <React.Fragment>
            <Button onClick={handleLogout}>log out</Button>
        </React.Fragment>
    )
}

