import Link from "next/link"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

export default function ThreadReactionCard({
    thread
}: {
    thread: any
}) {
    return (
        <div style={{
            width: 48,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
        }}>
            <div style={{
                height: 48,
                display: "flex",
                alignItems: "center"
            }}>
                <ThumbUpOutlinedIcon/>
            </div>
            <div style={{
                height: 48,
                display: "flex",
                alignItems: "center",
                fontSize: 12,
                fontWeight: 500
            }}>
                {thread.threadReactionsResult}
            </div>
            <div style={{
                height: 48,
                display: "flex",
                alignItems: "center"
            }}>
                <ThumbDownOutlinedIcon/>
            </div>
        </div>
    )
}