import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { useContext, useEffect, useState } from "react";
import UserContext from '@/context/UserContext';

import AirBar from "../layouts/AirBar";
import AirBarButton from '../elements/buttons/AirBarButton';
import Image from 'next/image';

export default function BasicAirBar() {
    const userContext = useContext(UserContext);
    console.log(userContext.imageUrl);

    return (
        <AirBar>
            <AirBarButton code="search">
                <SearchOutlinedIcon />
            </AirBarButton>
            <AirBarButton code="help">
                <HelpOutlineOutlinedIcon />
            </AirBarButton>
            <AirBarButton code="settings">
                <SettingsOutlinedIcon />
            </AirBarButton>
            <AirBarButton code="account" label={userContext.firstName}>
                {userContext.imageUrl ? 
                    <div style={{
                        width: 24,
                        height: 24,
                        borderRadius: 100,
                        background: 'url('+userContext.imageUrl+')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}/>
                :
                    <AccountCircleOutlinedIcon />
                }
            </AirBarButton>
        </AirBar>
    )
}