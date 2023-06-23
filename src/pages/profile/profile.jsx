import './profile.css'
import React from 'react'
import NavbarDoc from '../../components/NavRsp/NavDoc'
import FormProf from '../../components/form'
import ProfileBanner from '../../components/profilebanner'
import Profilepic from '../../assets/img/crecer-8.png'
import { useState } from 'react';

const Profile = () => {
    const [user_data, setUserData] = useState(JSON.parse(window.localStorage.getItem("user_data")));


    return(
        <><div>
        <NavbarDoc />
        </div>
        <div>
        <ProfileBanner
            profilePicUrl={Profilepic}
            name={user_data.nombre}
        />

        </div>
        <div>
        <FormProf />
        </div>
        </>

        
        )
}
export default Profile;
