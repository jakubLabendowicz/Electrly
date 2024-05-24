import Link from "next/link"
import ThreadReactionCard from "./ThreadReactionCard"

export default function ThreadHeaderCard({
    thread,
    showUser = true
}: {
    thread: any,
    showUser?: boolean
}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 8,
            minHeight: 176,
            width: '100%'
        }}>
            <div style={{
                width: 'calc(100% - 32px)',
                height: 'calc(100% - 32px)',
                margin: 16,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: 16
            }}>
                <ThreadReactionCard thread={thread}/>
                <div style={{
                    width: '100%',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 8
                }}>
                    <div style={{
                        width: '100%',
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 16
                    }}>
                        {showUser ?
                            <Link href={'/community/people/'+thread.user.id} style={{
                                height: 48,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: 16,
                            }}>
                                <div style={{
                                    minWidth: 48,
                                    width: 48,
                                    height: 48,
                                    borderRadius: 100,
                                    background: 'url(' + thread.user.imageUrl + ')',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}/>
                                <div style={{
                                    fontSize: 12,
                                    fontWeight: 500
                                }}>
                                    Posted by {thread.user.nickname}
                                </div>
                            </Link>
                        :null}
                        <div style={{
                            fontSize: 12,
                            fontWeight: 500
                        }}>
                            3 Hours Ago
                        </div>
                    </div>
                    <div style={{
                        fontSize: 18,
                        fontWeight: 700
                    }}>
                        {thread.title}
                    </div>
                    <div style={{
                        fontSize: 14,
                        fontWeight: 400
                    }}>
                        {thread.content}
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        width: '100%'
                    }}>
                        <Link href={'/community/threads/0/comments/create'} style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: 48,
                            minWidth: 256,
                            borderRadius: 8,
                            backgroundColor: '#5448C8',
                            color: "white",
                            fontSize: 16,
                            fontWeight: 700
                        }}>
                            Write New Answer
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}