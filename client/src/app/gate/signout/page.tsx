"use client"
import Page from "@/components/layouts/Page";
import Button from '@mui/material/Button';
import PageFormContent from "@/components/layouts/PageFormContent";

import useAuth from "@/hooks/useAuth";

export default function Signin() {
    const authHook = useAuth();

    return (
        <Page>
            <PageFormContent
                header='Sign out'
            >
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                }}>
                    <div style={{
                        fontSize: 12,
                        fontWeight: 600,
                    }}>
                        Do you want to log out?
                    </div>
                </div>
                <Button
                    variant="contained"
                    onClick={() => { authHook.doRevokeToken(); }}
                    style={{
                        width: '100%',
                        height: 48,
                        backgroundColor: '#5448C8',
                        borderRadius: 8,
                        color: '#ffffff',
                    }}>Sign out</Button>
            </PageFormContent>
        </Page>
    )
}