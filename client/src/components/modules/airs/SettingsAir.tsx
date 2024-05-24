import { useContext, useEffect, useState } from "react";

import Air from '@/components/layouts/Air';
import AirContent from "@/components/layouts/AirContent";
import AirContentSection from "@/components/layouts/AirContentSection";
import UserContext from "@/context/UserContext";


export default function SettingsAir() {
    const userContext = useContext(UserContext);
    
    return (
        <Air code='settings'>
            <AirContent>
                <AirContentSection title="Display settings">
                    TODO: Display setting!!!
                </AirContentSection>
                <AirContentSection title="Account settings">
                    TODO: Account settings!!!
                </AirContentSection>
            </AirContent>
        </Air>
    )
}