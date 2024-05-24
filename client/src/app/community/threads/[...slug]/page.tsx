import ModuleBarButton from "@/components/elements/buttons/ModuleBarButton";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

import Page from "@/components/layouts/Page";
import PageContent from "@/components/layouts/PageContent";
import PageContentSection from "@/components/layouts/PageContentSection";

import Image from 'next/image'
import Link from 'next/link'
import ThreadCategoryCard from "@/components/elements/cards/ThreadCategoryCard";
import ThreadHeaderCard from "@/components/elements/cards/ThreadHeaderCard";
import ThreadCommentCard from "@/components/elements/cards/ThreadCommentCard";

export default function Thread() {
    return (
        <Page>
          <PageContent
            header = {
              <ThreadHeaderCard thread={{
                id: 0,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit, diam eu interdum cursus, urna nisl tincidunt magna, aliquet facilisis risus sem porttitor ipsum. Aenean vel sapien eget magna dignissim semper eget et erat. Aenean consequat orci at convallis eleifend. Donec mollis convallis lectus, ut lacinia neque placerat eu. In tempor tellus sit amet euismod fermentum. Morbi augue ex, laoreet egestas posuere vitae, laoreet eget justo. Etiam id felis ut elit imperdiet pellentesque et ut erat. Ut sed felis vitae nibh ullamcorper sagittis a et nisi. Praesent eu ante nisl. Ut dictum justo in dolor consequat aliquam. Nunc suscipit facilisis tellus at vehicula. Nulla lobortis nibh justo, in elementum tortor auctor ut. Nam sodales nec enim in pulvinar. In varius, sapien non suscipit aliquam, massa nibh fermentum quam, et pulvinar lacus odio vel nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sodales magna non rutrum accumsan. Vivamus in auctor nunc. Praesent aliquam erat id accumsan varius. Curabitur non metus imperdiet, maximus ligula id, tincidunt tellus.',
                threadReactionsResult: 10,
                user: {
                  id: 0,
                  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  nickname: 'Liteon X'
                }
              }}/>
            }
            footer = {
                <div>
                    {/* footer */}
                </div>
            }>
            <PageContentSection title="Answers">
              {/* TODO: Thread answers!!! */}
              <ThreadCommentCard threadComment={{
                id: 0,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit, diam eu interdum cursus, urna nisl tincidunt magna, aliquet facilisis risus sem porttitor ipsum. Aenean vel sapien eget magna dignissim semper eget et erat. Aenean consequat orci at convallis eleifend. Donec mollis convallis lectus, ut lacinia neque placerat eu. In tempor tellus sit amet euismod fermentum. Morbi augue ex, laoreet egestas posuere vitae, laoreet eget justo. Etiam id felis ut elit imperdiet pellentesque et ut erat. Ut sed felis vitae nibh ullamcorper sagittis a et nisi. Praesent eu ante nisl. Ut dictum justo in dolor consequat aliquam. Nunc suscipit facilisis tellus at vehicula. Nulla lobortis nibh justo, in elementum tortor auctor ut. Nam sodales nec enim in pulvinar. In varius, sapien non suscipit aliquam, massa nibh fermentum quam, et pulvinar lacus odio vel nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sodales magna non rutrum accumsan. Vivamus in auctor nunc. Praesent aliquam erat id accumsan varius. Curabitur non metus imperdiet, maximus ligula id, tincidunt tellus.',
                threadReactionsResult: 10,
                user: {
                  id: 5,
                  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  nickname: 'Liteon X'
                }
              }}/>
              <ThreadCommentCard threadComment={{
                id: 0,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit, diam eu interdum cursus, urna nisl tincidunt magna, aliquet facilisis risus sem porttitor ipsum. Aenean vel sapien eget magna dignissim semper eget et erat. Aenean consequat orci at convallis eleifend. Donec mollis convallis lectus, ut lacinia neque placerat eu. In tempor tellus sit amet euismod fermentum. Morbi augue ex, laoreet egestas posuere vitae, laoreet eget justo. Etiam id felis ut elit imperdiet pellentesque et ut erat. Ut sed felis vitae nibh ullamcorper sagittis a et nisi. Praesent eu ante nisl. Ut dictum justo in dolor consequat aliquam. Nunc suscipit facilisis tellus at vehicula. Nulla lobortis nibh justo, in elementum tortor auctor ut. Nam sodales nec enim in pulvinar. In varius, sapien non suscipit aliquam, massa nibh fermentum quam, et pulvinar lacus odio vel nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sodales magna non rutrum accumsan. Vivamus in auctor nunc. Praesent aliquam erat id accumsan varius. Curabitur non metus imperdiet, maximus ligula id, tincidunt tellus.',
                threadReactionsResult: 10,
                user: {
                  id: 4,
                  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  nickname: 'Liteon X'
                }
              }}/>
              <ThreadCommentCard threadComment={{
                id: 0,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit, diam eu interdum cursus, urna nisl tincidunt magna, aliquet facilisis risus sem porttitor ipsum. Aenean vel sapien eget magna dignissim semper eget et erat. Aenean consequat orci at convallis eleifend. Donec mollis convallis lectus, ut lacinia neque placerat eu. In tempor tellus sit amet euismod fermentum. Morbi augue ex, laoreet egestas posuere vitae, laoreet eget justo. Etiam id felis ut elit imperdiet pellentesque et ut erat. Ut sed felis vitae nibh ullamcorper sagittis a et nisi. Praesent eu ante nisl. Ut dictum justo in dolor consequat aliquam. Nunc suscipit facilisis tellus at vehicula. Nulla lobortis nibh justo, in elementum tortor auctor ut. Nam sodales nec enim in pulvinar. In varius, sapien non suscipit aliquam, massa nibh fermentum quam, et pulvinar lacus odio vel nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sodales magna non rutrum accumsan. Vivamus in auctor nunc. Praesent aliquam erat id accumsan varius. Curabitur non metus imperdiet, maximus ligula id, tincidunt tellus.',
                threadReactionsResult: 10,
                user: {
                  id: 3,
                  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  nickname: 'Liteon X'
                }
              }}/>
              <ThreadCommentCard threadComment={{
                id: 0,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit, diam eu interdum cursus, urna nisl tincidunt magna, aliquet facilisis risus sem porttitor ipsum. Aenean vel sapien eget magna dignissim semper eget et erat. Aenean consequat orci at convallis eleifend. Donec mollis convallis lectus, ut lacinia neque placerat eu. In tempor tellus sit amet euismod fermentum. Morbi augue ex, laoreet egestas posuere vitae, laoreet eget justo. Etiam id felis ut elit imperdiet pellentesque et ut erat. Ut sed felis vitae nibh ullamcorper sagittis a et nisi. Praesent eu ante nisl. Ut dictum justo in dolor consequat aliquam. Nunc suscipit facilisis tellus at vehicula. Nulla lobortis nibh justo, in elementum tortor auctor ut. Nam sodales nec enim in pulvinar. In varius, sapien non suscipit aliquam, massa nibh fermentum quam, et pulvinar lacus odio vel nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sodales magna non rutrum accumsan. Vivamus in auctor nunc. Praesent aliquam erat id accumsan varius. Curabitur non metus imperdiet, maximus ligula id, tincidunt tellus.',
                threadReactionsResult: 10,
                user: {
                  id: 2,
                  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  nickname: 'Liteon X'
                }
              }}/>
              <ThreadCommentCard threadComment={{
                id: 0,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit, diam eu interdum cursus, urna nisl tincidunt magna, aliquet facilisis risus sem porttitor ipsum. Aenean vel sapien eget magna dignissim semper eget et erat. Aenean consequat orci at convallis eleifend. Donec mollis convallis lectus, ut lacinia neque placerat eu. In tempor tellus sit amet euismod fermentum. Morbi augue ex, laoreet egestas posuere vitae, laoreet eget justo. Etiam id felis ut elit imperdiet pellentesque et ut erat. Ut sed felis vitae nibh ullamcorper sagittis a et nisi. Praesent eu ante nisl. Ut dictum justo in dolor consequat aliquam. Nunc suscipit facilisis tellus at vehicula. Nulla lobortis nibh justo, in elementum tortor auctor ut. Nam sodales nec enim in pulvinar. In varius, sapien non suscipit aliquam, massa nibh fermentum quam, et pulvinar lacus odio vel nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sodales magna non rutrum accumsan. Vivamus in auctor nunc. Praesent aliquam erat id accumsan varius. Curabitur non metus imperdiet, maximus ligula id, tincidunt tellus.',
                threadReactionsResult: 10,
                user: {
                  id: 0,
                  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  nickname: 'Liteon X'
                }
              }}/>
              <ThreadCommentCard threadComment={{
                id: 0,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit, diam eu interdum cursus, urna nisl tincidunt magna, aliquet facilisis risus sem porttitor ipsum. Aenean vel sapien eget magna dignissim semper eget et erat. Aenean consequat orci at convallis eleifend. Donec mollis convallis lectus, ut lacinia neque placerat eu. In tempor tellus sit amet euismod fermentum. Morbi augue ex, laoreet egestas posuere vitae, laoreet eget justo. Etiam id felis ut elit imperdiet pellentesque et ut erat. Ut sed felis vitae nibh ullamcorper sagittis a et nisi. Praesent eu ante nisl. Ut dictum justo in dolor consequat aliquam. Nunc suscipit facilisis tellus at vehicula. Nulla lobortis nibh justo, in elementum tortor auctor ut. Nam sodales nec enim in pulvinar. In varius, sapien non suscipit aliquam, massa nibh fermentum quam, et pulvinar lacus odio vel nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sodales magna non rutrum accumsan. Vivamus in auctor nunc. Praesent aliquam erat id accumsan varius. Curabitur non metus imperdiet, maximus ligula id, tincidunt tellus.',
                threadReactionsResult: 10,
                user: {
                  id: 1,
                  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  nickname: 'Liteon X'
                }
              }}/>
            </PageContentSection>
          </PageContent>
        </Page>
    )
}