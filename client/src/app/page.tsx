import ModuleBarButton from "@/components/elements/buttons/ModuleBarButton";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

import { useContext, useEffect, useState } from "react";

import Page from "@/components/layouts/Page";
import PageContent from "@/components/layouts/PageContent";
import PageContentSection from "@/components/layouts/PageContentSection";

import Image from 'next/image'
import Link from 'next/link'
import TrendingThreadCard from "@/components/elements/cards/TrendingThreadCard";
import { wrap } from "module";
import UserContext from "@/context/UserContext";
import ThreadCard from "@/components/elements/cards/ThreadCard";

export default function Home() {
    let trendingThreads = [
      {
        id: 0,
        imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        user: {nickname: "Sam Smith"}
      },
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1543489816-c87b0f5f7dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        user: { nickname: "Sam Smith" }
      },
      {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        user: { nickname: "Sam Smith" }
      },
      {
        id: 3,
        imageUrl: "https://images.unsplash.com/photo-1616243850909-f010afe8de3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        user: { nickname: "Sam Smith" }
      },
      {
        id: 4,
        imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        user: { nickname: "Sam Smith" }
      },
      {
        id: 5,
        imageUrl: "https://images.unsplash.com/photo-1543489816-c87b0f5f7dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        user: { nickname: "Sam Smith" }
      }
    ];

    return (
        <Page>
          <PageContent
            header = {
                <div style={{
                  fontSize: 24,
                  fontWeight: 700
                }}>
                  {/* header */}
                  Hello, welcome back!
                </div>
            }
            footer = {
                <div>
                    {/* footer */}
                </div>
            }>
            <PageContentSection title="Trending Today">
              <div style={{
                width: '100%',
                display: "flex",
                flexDirection: "row",
                flexWrap: 'wrap',
                justifyContent: "space-between",
                gap: 32
              }}>
                {trendingThreads.map((thread, index) => (
                  <TrendingThreadCard key={index} thread={thread} />
                ))}
              </div>
            </PageContentSection>
            <PageContentSection title="Nav" showTitle={false}>
              <div style={{
                width: '100%',
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 64
              }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 64,
                    minWidth: 500,
                    maxWidth: 1000,
                    width: '60%',
                    borderRadius: 8,
                    backgroundColor: 'white',
                    color: "black"
                }}>
                  TODO: Filters!!!
                </div>
                <Link href={'/community/threads/create'} style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 64,
                    minWidth: 200,
                    maxWidth: 500,
                    width: '35%',
                    borderRadius: 8,
                    backgroundColor: '#5448C8',
                    color: "white",
                    fontSize: 16,
                    fontWeight: 700
                }}>
                    Write new thread
                </Link>
              </div>
            </PageContentSection>
            <PageContentSection title="Threads & Discussion">
            <div style={{
                width: '100%',
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 64
              }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    minWidth: 500,
                    maxWidth: 1000,
                    width: '60%',
                    gap: 32
                }}>
                  {/* TODO: Threads!!! */}
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
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    minWidth: 200,
                    maxWidth: 500,
                    width: '35%',
                }}>
                  <div style={{
                    padding: 16,
                    width: '100%',
                    borderRadius: 8,
                    backgroundColor: 'white',
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16
                  }}>
                    <div style={{
                      fontSize: 18,
                      fontWeight: 700
                    }}>
                      Top Trending Topic
                    </div>
                    <div style={{
                      fontSize: 14,
                      display: "flex",
                      flexDirection: "column",
                      gap: 16
                    }}>
                      <div>#1     Introduction to ESP32: Getting Started and Basics</div>
                      <div>#2     ESP32 vs. ESP8266: A Comparative Analysis</div>
                      <div>#3     Programming ESP32 with Arduino IDE: Tips and Tricks</div>
                      <div>#4     IoT Projects with ESP32: Share Your Ideas and Experiences</div>
                      <div>#5     Troubleshooting ESP32 Wi-Fi Connectivity Issues</div>
                      <div>#6     Powering ESP32: Battery vs. USB vs. Solar Panel</div>
                      <div>#7     Interfacing Sensors with ESP32: A Beginner`s Guide</div>
                      <div>#8     Customizing the ESP32 Development Environment</div>
                    </div>
                  </div>
                </div>
              </div>
            </PageContentSection>
          </PageContent>
        </Page>
    )
}