import Link from "next/link"

export default function TrendingThreadCard({
    category
}: {
    category: any
}) {
    return (
        <Link href={'/community/threads/categories/'+category.id} style={{
            width: 200,
            height: 160,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            background: 'url('+category.imageUrl+')',
            backgroundColor: '#555555',
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div style={{
                width: 'calc(100% - 32px)',
                height: 'calc(100% - 32px)',
                margin: 16,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                gap: 8
            }}>
                <div style={{
                    fontSize: 16,
                    fontWeight: 700,
                    textAlign: "center"
                }}>
                    {category.name}
                </div>
            </div>
        </Link>
    )
}