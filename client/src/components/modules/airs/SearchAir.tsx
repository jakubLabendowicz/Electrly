import ThreadCard from '@/components/elements/cards/ThreadCard';
import Air from '@/components/layouts/Air';
import AirContent from "@/components/layouts/AirContent";
import AirContentSection from "@/components/layouts/AirContentSection";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Link from 'next/link';

function UserSearchCard({
    user,
}: {
    user: any
}) {
    return (
        <Link href={'/community/people/'+user.id} style={{
            height: 48,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 16,
            width: 160
        }}>
            <div style={{
                minWidth: 48,
                width: 48,
                height: 48,
                borderRadius: 100,
                background: 'url(' + user.imageUrl + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}/>
            <div style={{
                fontSize: 14,
                fontWeight: 600
            }}>
                {user.nickname}
            </div>
        </Link>
    )
}

export default function SearchAir() {
    let searchedPeople = [
        {
            id: 0,
            imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nickname: 'Liteon X'
        },
        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nickname: 'Liteona'
        },
        {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nickname: 'MeLiteon'
        },
        {
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nickname: 'LiteonAbc'
        },
        {
            id: 4,
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nickname: 'Liteon!'
        },
        {
            id: 5,
            imageUrl: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nickname: 'Yo Liteon'
        },
    ]

    return (
        <Air code='search'>
            <AirContent>
                <AirContentSection title="Search bar" showTitle={false}>
                    <div style={{
                        height: 48,
                        width: '100%',
                        borderRadius: 8,
                        backgroundColor: '#E9E9E9'
                    }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: 8,
                        }}>
                            <div style={{
                                minWidth: 24,
                                minHeight: 24,
                                padding: 12,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: 8,
                                borderRadius: 8,
                                backgroundColor: 'transparent',
                            }}>
                                <SearchOutlinedIcon />
                            </div>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                fontSize: 14,
                                fontWeight: 600,
                                paddingRight: 12,
                            }}>
                                <input style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'transparent',
                                    outline: 'none'
                                }}>
                                </input>
                            </div>
                        </div>
                    </div>
                </AirContentSection>
                <AirContentSection title="People">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 16,
                    }}>
                        {searchedPeople.map((user) => (
                            <UserSearchCard key={user.id} user={user}/>
                        ))}
                    </div>
                </AirContentSection>
                <AirContentSection title="Threads">
                    {/* TODO: Threads!!! */}
                    <ThreadCard thread={{
                    id: 0,
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel.',
                    threadReactionsResult: 10,
                    user: {
                      id: 0,
                      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      nickname: 'Liteon X'
                    }
                  }}/>
                  <ThreadCard thread={{
                    id: 0,
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel.',
                    threadReactionsResult: 10,
                    user: {
                      id: 0,
                      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      nickname: 'Liteon X'
                    }
                  }}/>
                  <ThreadCard thread={{
                    id: 0,
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel.',
                    threadReactionsResult: 10,
                    user: {
                      id: 0,
                      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      nickname: 'Liteon X'
                    }
                  }}/>
                  <ThreadCard thread={{
                    id: 0,
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel.',
                    threadReactionsResult: 10,
                    user: {
                      id: 0,
                      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      nickname: 'Liteon X'
                    }
                  }}/>
                  <ThreadCard thread={{
                    id: 0,
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel.',
                    threadReactionsResult: 10,
                    user: {
                      id: 0,
                      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      nickname: 'Liteon X'
                    }
                  }}/>
                  <ThreadCard thread={{
                    id: 0,
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel.',
                    threadReactionsResult: 10,
                    user: {
                      id: 0,
                      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      nickname: 'Liteon X'
                    }
                  }}/>
                </AirContentSection>
            </AirContent>
        </Air>
    )
}