import Content from "@/components/layouts/PageContent";
import Page from "@/components/layouts/Page";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PageFormContent from "@/components/layouts/PageFormContent";

export default function OAuth() {
    return (
        <Page>
            <PageFormContent
                header='Grant Access'
            >
                <div style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    // color: '#2B318A',
                }}>
                    Forest Health wants to access your account.
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 8,
                }}>
                    <div style={{
                        fontSize: 12,
                        fontWeight: 600,
                    }}>
                        This application will be able to:
                    </div>
                    <div style={{
                        fontSize: 12,
                        fontWeight: 600,
                    }}>
                        - View your email address
                    </div>
                    <div style={{
                        fontSize: 12,
                        fontWeight: 600,
                    }}>
                        - View your phone number
                    </div>
                    <div style={{
                        fontSize: 12,
                        fontWeight: 600,
                    }}>
                        - View your profile picture
                    </div>
                </div>
                <Button variant="contained" style={{
                    width: '100%',
                    height: 48,
                    backgroundColor: '#2B318A',
                    borderRadius: 8,
                    color: '#ffffff',
                }}>Allow</Button>
            </PageFormContent>
        </Page>
    )
}