import { NavLink } from "react-router-dom"

const NavigationHeader = () =>{
    return(
        <div style={{display:'flex',flexDirection:'row'}}>
            <NavLink to={'/sign-in'} >Sign In</NavLink>
            <NavLink to={'/sign-up'} >Sign Up</NavLink>
            <NavLink to='/timesheets'> Time Sheets</NavLink>
        </div>
    )
}

export default NavigationHeader;