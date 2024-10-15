'use client';

import React from 'react'
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter, Image, Chip } from "@nextui-org/react";
import Link from 'next/link';

interface BlogItem {
    imageSrc: string;
    title: string;
    description: string;
    tags: readonly string[];
    link: string;
    className?: string;
}

export default function Blog({ blogItem, className }: { blogItem: BlogItem; className?: string }) {
    return (
        <motion.div whileHover={{ scale: 1.05 }} className={className}>
            <Card href={blogItem.link} as={Link} className="max-w-[330px]">
                <CardBody className="p-0">
                    <Image
                        alt={blogItem.title}
                        className="object-cover"
                        src={blogItem.imageSrc}
                        width={330}
                        height={150}
                        radius="none"
                    />
                </CardBody>
                <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">{blogItem.title}</h4>
                    <p className="text-small text-default-500 text-justify">
                        {blogItem.description}
                        <Link href={blogItem.link} passHref>
                        <span className="text-sm sm:text-md text-blue-500 dark:text-blue-300 hover:underline">
                            {" "}Read more
                        </span>
                    </Link>
                    </p>
                </CardHeader>
                <CardFooter className="flex gap-2 pt-2">
                    {blogItem.tags.map((tag, index) => (
                        <Chip color="primary" key={index} variant="flat">{`#${tag}`}</Chip>
                    ))}
                </CardFooter>
            </Card>
        </motion.div>
    );
}