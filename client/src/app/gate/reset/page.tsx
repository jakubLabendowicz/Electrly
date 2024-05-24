"use client"
import Page from "@/components/layouts/Page";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from "next/link";
import PageFormContent from "@/components/layouts/PageFormContent";

import useAuth from "@/hooks/useAuth";

export default function Reset() {
    const authHook = useAuth();

    return (
        <Page>
            <PageFormContent
                header='Reset password'
            >
                {authHook.stage === 0 ?
                    <>
                        <TextField 
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined"
                            defaultValue={authHook.email} 
                            onChange={(event) => { authHook.setEmail(event.target.value) }} 
                            style={{
                                width: '100%',
                            }}/>
                        <Button
                            variant="contained"
                            onClick={() => { authHook.doCreateUserPasswordCode(); }}
                            style={{
                                width: '100%',
                                height: 48,
                                backgroundColor: '#5448C8',
                                borderRadius: 8,
                                color: '#ffffff',
                            }}>Reset</Button>
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
                                Do you remember your password?
                            </div>
                            <Link href='/gate/signin'>
                                <div style={{
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: '#2B318A',
                                }}>
                                    Sign in
                                </div>
                            </Link>
                        </div>
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
                    </>
                : authHook.stage === 1 ?
                    <>
                        <TextField 
                            id="outlined-basic" 
                            label="Code" 
                            variant="outlined" 
                            defaultValue={authHook.passwordCode} 
                            onChange={(event) => { authHook.setPasswordCode(event.target.value) }} 
                            style={{
                                width: '100%',
                            }}/>
                        <TextField
                            id="outlined-basic" 
                            label="Password" 
                            variant="outlined"
                            defaultValue={authHook.password} 
                            onChange={(event) => { authHook.setPassword(event.target.value) }} 
                            style={{
                                width: '100%',
                            }}/>
                        <Button 
                            variant="contained" 
                            onClick={() => { authHook.doCreateUserPassword(); }}
                            style={{
                                width: '100%',
                                height: 48,
                                backgroundColor: '#5448C8',
                                borderRadius: 8,
                                color: '#ffffff',
                            }}>Sign up</Button>
                    </>
                : authHook.stage === 2 &&
                    <>
                        <div style={{
                            fontSize: 12,
                            fontWeight: 600,
                        }}>
                            Congratulations! Your password has been reset.
                        </div>
                        <Link href='/gate/signin' style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 8,
                        }}>
                            <Button 
                                variant="contained" 
                                style={{
                                    width: '100%',
                                    height: 48,
                                    backgroundColor: '#5448C8',
                                    borderRadius: 8,
                                    color: '#ffffff',
                                }}>Sign in</Button>
                        </Link>
                    </>
                }
            </PageFormContent>
        </Page>
    )
}