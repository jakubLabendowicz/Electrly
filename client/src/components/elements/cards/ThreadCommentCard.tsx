import Link from "next/link"
import ThreadReactionCard from "./ThreadReactionCard"
import ThreadCommentReactionCard from "./ThreadCommentReactionCard"

export default function ThreadCommentCard({
    threadComment,
    showUser = true
}: {
    threadComment: any,
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
                <ThreadCommentReactionCard threadComment={threadComment}/>
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
                            <Link href={'/community/people/'+threadComment.user.id} style={{
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
                                    background: 'url(' + threadComment.user.imageUrl + ')',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}/>
                                <div style={{
                                    fontSize: 12,
                                    fontWeight: 500
                                }}>
                                    Posted by {threadComment.user.nickname}
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
                        fontSize: 14,
                        fontWeight: 400
                    }}>
                        {threadComment.content}
                    </div>
                </div>
            </div>
        </div>
    )
}