"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";

type props = {
    children: React.ReactNode;
};

export default function Provider({ children }: props) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
}