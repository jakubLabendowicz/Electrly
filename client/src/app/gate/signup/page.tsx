"use client"
import Page from "@/components/layouts/Page";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from "next/link";
import PageFormContent from "@/components/layouts/PageFormContent";

import useAuth from "@/hooks/useAuth";

export default function Signup() {
    const authHook = useAuth();

    return (
        <Page>
            <PageFormContent
                header='Sign up'
            >
                {authHook.stage === 0 ?
                    <>
                        <TextField 
                            id="outlined-basic" 
                            label="Nickname" 
                            variant="outlined" 
                            defaultValue={authHook.nickname} 
                            onChange={(event) => { authHook.setNickname(event.target.value) }} 
                            style={{
                                width: '100%',
                            }}/>
                        <TextField 
                            id="outlined-basic" 
                            label="First name" 
                            variant="outlined" 
                            defaultValue={authHook.firstName} 
                            onChange={(event) => { authHook.setFirstName(event.target.value) }} 
                            style={{
                                width: '100%',
                            }}/>
                        <TextField
                            id="outlined-basic" 
                            label="Last name" 
                            variant="outlined"
                            defaultValue={authHook.lastName} 
                            onChange={(event) => { authHook.setLastName(event.target.value) }} 
                            style={{
                                width: '100%',
                            }}/>
                        <TextField 
                            id="outlined-basic" 
                            label="Gender" 
                            variant="outlined" 
                            type="phone"
                            defaultValue={authHook.gender} 
                            onChange={(event) => { authHook.setGender(event.target.value) }} 
                            style={{
                                width: '100%',
                            }}/>
                        <Button 
                            variant="contained" 
                            onClick={() => { authHook.setStage(1); }}
                            style={{
                                width: '100%',
                                height: 48,
                                backgroundColor: '#5448C8',
                                borderRadius: 8,
                                color: '#ffffff',
                            }}>Next</Button>
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
                                Already have an account?
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
                    </>
                : authHook.stage === 1 ?
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
                        <TextField 
                            id="outlined-basic" 
                            label="Phone" 
                            variant="outlined" 
                            type="phone"
                            defaultValue={authHook.phone} 
                            onChange={(event) => { authHook.setPhone(event.target.value) }} 
                            style={{
                                width: '100%',
                            }}/>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 8,
                        }}>
                            <Button 
                                variant="contained" 
                                onClick={() => { authHook.setStage(0); }}
                                style={{
                                    width: '100%',
                                    height: 48,
                                    backgroundColor: '#5448C8',
                                    borderRadius: 8,
                                    color: '#ffffff',
                                }}>Back</Button>
                            <Button 
                                variant="contained" 
                                onClick={() => { authHook.doCreateUser(); }}
                                style={{
                                    width: '100%',
                                    height: 48,
                                    backgroundColor: '#5448C8',
                                    borderRadius: 8,
                                    color: '#ffffff',
                                }}>Sign up</Button>
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
                                Already have an account?
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
                    </>
                : authHook.stage === 2 ?
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
                : authHook.stage === 3 &&
                    <>
                        <div style={{
                            fontSize: 12,
                            fontWeight: 600,
                        }}>
                            Congratulations! Your account has been created.
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