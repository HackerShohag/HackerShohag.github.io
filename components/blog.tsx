'use client';

import { Card, CardHeader, CardBody, CardFooter, Image, Chip } from "@nextui-org/react";

import image from "@/public/keyboard.png";

interface BlogProps {
    imageSrc: string;
    title: string;
    description: string;
    tags: readonly string[];
}

import React from 'react'

export default function Blog({ imageSrc, title, description, tags }: BlogProps) {
    return (
        <Card className="max-w-[330px]">
            <CardBody className="p-0">
                <Image
                    alt={title}
                    className="object-cover"
                    src={imageSrc}
                    width={330}
                    height={150}
                    radius="none"
                />
            </CardBody>
            <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{title}</h4>
                <p className="text-small text-default-500 text-justify">
                    {description}
                </p>
            </CardHeader>
            <CardFooter className="flex gap-2 pt-2">
                {tags.map((tag, index) => (
                    <Chip color="primary" key={index} variant="flat">{`#${tag}`}</Chip>
                ))}
            </CardFooter>
        </Card>
    )
}