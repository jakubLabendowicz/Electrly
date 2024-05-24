import Air from '@/components/layouts/Air';
import AirContent from "@/components/layouts/AirContent";
import AirContentSection from "@/components/layouts/AirContentSection";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Link from 'next/link';


function HelpArticleCard({
    article,
}: {
    article: any
}) {
    return (
        <Link href={'/support/answers/'+article.id} style={{
            display: "flex",
            flexDirection: "row",
            gap: 8
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 48,
                minWidth: 48,
                borderRadius: 8,
                backgroundColor: '#cbc7ee',
            }}>
                <ArticleOutlinedIcon/>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 500,
                wordWrap: "break-word",
                width: 'auto'
            }}>
                {article.title}
            </div>
        </Link>
    )
}


export default function HelpAir() {
    return (
        <Air code='help'>
            <AirContent>
                <AirContentSection title="Popular resources">
                    <HelpArticleCard
                        article={{
                            id: 0,
                            title: 'Dlaczego nie mogę się zalogować?',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                            id: 1,
                        title: 'Dlaczego w ogóle muszę się rejestrować?',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                            id: 2,
                        title: 'Dlaczego wciąż jestem wylogowywany?',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                            id: 3,
                        title: 'Mojego języka nie ma na liście!',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                            id: 4,
                        title: 'Jak mogę zapobiec wyświetlaniu mojej ksywki na liście obecnych użytkowników?',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                            id: 5,
                        title: 'Zgubiłem moje hasło!',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                            id: 6,
                        title: 'Zarejestrowałem się, ale nie mogę się zalogować!',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                            id: 7,
                        title: 'Rejestrowałem się kiedyś, ale nie mogę się już logować!',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                            id: 8,
                        title: 'Jak mogę zmienić swoje ustawienia?',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                            id: 9,
                        title: 'Zmieniłem strefę czasową ale czasy są nadal nieprawidłowe!',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                            id: 10,
                        title: 'Jak mogę napisać temat na forum?',
                        }}
                    />
                </AirContentSection>
            </AirContent>
        </Air>
    )
}