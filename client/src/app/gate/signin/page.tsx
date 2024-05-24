"use client"
import Page from "@/components/layouts/Page";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from "next/link";
import PageFormContent from "@/components/layouts/PageFormContent";

import useAuth from "@/hooks/useAuth";

export default function Signin() {
    const authHook = useAuth();

    return (
        <Page>
            <PageFormContent
                header='Sign in'
            >
                <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined"
                    defaultValue={authHook.email} 
                    onChange={(event) => { authHook.setEmail(event.target.value) }} 
                    style={{
                        width: '100%',
                    }}/>
                <TextField 
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    type="password"
                    defaultValue={authHook.password} 
                    onChange={(event) => { authHook.setPassword(event.target.value) }} 
                    style={{
                        width: '100%',
                    }}/>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                }}>
                    <Link href='/gate/reset'>
                        <div style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#2B318A',
                        }}>
                            Forgot password?
                        </div>
                    </Link>
                </div>
                <Button
                    variant="contained"
                    onClick={() => { authHook.doAuthorize(); }}
                    style={{
                        width: '100%',
                        height: 48,
                        backgroundColor: '#5448C8',
                        borderRadius: 8,
                        color: '#ffffff',
                    }}>Sign in</Button>
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
                        Do not have an account?
                    </div>
                    <Link href='/gate/signup'>
                        <div style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#2B318A',
                        }}>
                            Sign up
                        </div>
                    </Link>
                </div>
            </PageFormContent>
        </Page>
    )
}