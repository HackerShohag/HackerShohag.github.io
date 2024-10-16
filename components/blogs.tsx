'use client';

import React from "react";
import Blog from "@/components/blog";

import { useSectionInView } from "@/lib/hooks";
import { blogsData } from "@/lib/data";
import SectionHeading from "./section-heading";

export default function Blogs() {
    const { ref } = useSectionInView("Blogs");

    return (
        <section id="blogs" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>My Blogs</SectionHeading>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogsData.map((blog, index) => (
                    <Blog
                        className="h-full"
                        key={index}
                        blogItem={blog}
                    />
                ))}
            </div>
        </section>
    );
}
