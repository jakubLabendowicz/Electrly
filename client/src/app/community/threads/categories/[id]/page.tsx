"use client"

import PageContent from "@/components/layouts/PageContent";
import Page from "@/components/layouts/Page";
import PageContentSection from "@/components/layouts/PageContentSection";
import ThreadCategoryCard from "@/components/elements/cards/ThreadCategoryCard";
import ThreadCard from "@/components/elements/cards/ThreadCard";
import { useEffect, useState } from "react";
import { getCategories, getCategory } from "@/api/gate/ThreadCategoryApi";
import { useRouter } from "next/router";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [threads, setThreads] = useState([]);

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    getCategories().then((response)=>{
      setCategories((response as any).data);
    });

    getCategory(id as string).then((response)=>{
      setThreads((response as any).data.threads);
    });

  }, []);

    return (
        <Page>
          <PageContent
            header = {
                <div>
                  {/* header */}
                </div>
            }
            footer = {
                <div>
                    {/* footer */}
                </div>
            }>
            <PageContentSection title="Categories">
              {categories.map((category) => (
                <ThreadCategoryCard key={(category as any).id} category={category} />
              ))}
            </PageContentSection>
            <PageContentSection title="Category threads">
              {threads.map((thread) => (
                <ThreadCard key={(thread as any).id} thread={thread} />
              ))}


              <ThreadCard thread={{
                    id: 0,
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel. Fusce vel vehicula felis. Ut sem erat, aliquam ac lectus eu, sagittis ultrices metus. Aliquam venenatis est ut maximus semper. Suspendisse bibendum massa quam, non elementum ex commodo at. Quisque non ligula magna. Phasellus egestas nec massa sit amet sagittis.',
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
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel. Fusce vel vehicula felis. Ut sem erat, aliquam ac lectus eu, sagittis ultrices metus. Aliquam venenatis est ut maximus semper. Suspendisse bibendum massa quam, non elementum ex commodo at. Quisque non ligula magna. Phasellus egestas nec massa sit amet sagittis.',
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
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel. Fusce vel vehicula felis. Ut sem erat, aliquam ac lectus eu, sagittis ultrices metus. Aliquam venenatis est ut maximus semper. Suspendisse bibendum massa quam, non elementum ex commodo at. Quisque non ligula magna. Phasellus egestas nec massa sit amet sagittis.',
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
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel. Fusce vel vehicula felis. Ut sem erat, aliquam ac lectus eu, sagittis ultrices metus. Aliquam venenatis est ut maximus semper. Suspendisse bibendum massa quam, non elementum ex commodo at. Quisque non ligula magna. Phasellus egestas nec massa sit amet sagittis.',
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
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel. Fusce vel vehicula felis. Ut sem erat, aliquam ac lectus eu, sagittis ultrices metus. Aliquam venenatis est ut maximus semper. Suspendisse bibendum massa quam, non elementum ex commodo at. Quisque non ligula magna. Phasellus egestas nec massa sit amet sagittis.',
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
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel. Fusce vel vehicula felis. Ut sem erat, aliquam ac lectus eu, sagittis ultrices metus. Aliquam venenatis est ut maximus semper. Suspendisse bibendum massa quam, non elementum ex commodo at. Quisque non ligula magna. Phasellus egestas nec massa sit amet sagittis.',
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
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel. Fusce vel vehicula felis. Ut sem erat, aliquam ac lectus eu, sagittis ultrices metus. Aliquam venenatis est ut maximus semper. Suspendisse bibendum massa quam, non elementum ex commodo at. Quisque non ligula magna. Phasellus egestas nec massa sit amet sagittis.',
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
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel. Fusce vel vehicula felis. Ut sem erat, aliquam ac lectus eu, sagittis ultrices metus. Aliquam venenatis est ut maximus semper. Suspendisse bibendum massa quam, non elementum ex commodo at. Quisque non ligula magna. Phasellus egestas nec massa sit amet sagittis.',
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
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel. Fusce vel vehicula felis. Ut sem erat, aliquam ac lectus eu, sagittis ultrices metus. Aliquam venenatis est ut maximus semper. Suspendisse bibendum massa quam, non elementum ex commodo at. Quisque non ligula magna. Phasellus egestas nec massa sit amet sagittis.',
                    threadReactionsResult: 10,
                    user: {
                      id: 0,
                      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      nickname: 'Liteon X'
                    }
                  }}/>
            </PageContentSection>
          </PageContent>
        </Page>
    )
}