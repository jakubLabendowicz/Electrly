"use client"

import ModuleBarButton from "@/components/elements/buttons/ModuleBarButton";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import PageContent from "@/components/layouts/PageContent";
import Page from "@/components/layouts/Page";
import Image from 'next/image'
import Link from 'next/link'
import PageContentSection from "@/components/layouts/PageContentSection";
import ThreadCategoryCard from "@/components/elements/cards/ThreadCategoryCard";
import { useEffect, useState } from "react";
import { getCategories } from "@/api/gate/ThreadCategoryApi";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((response)=>{
      setCategories((response as any).data);
    })
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
          </PageContent>
        </Page>
    )
}