"use client";

import React, { useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
    imageUrl?: string;
    title?: string;
    icon?: React.ReactNode;
    gradientSize?: number;
    gradientColor?: string;
    gradientFrom?: string;
    gradientTo?: string;
    children?: React.ReactNode;
}

export const MagicCard = ({
    imageUrl,
    title,
    icon,
    className,
    gradientSize = 350,
    gradientColor,
    gradientFrom,
    gradientTo,
    children,
    ...props
}: MagicCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    const fromColor = gradientFrom || gradientColor || "rgba(56, 189, 248, 0.45)";
    const toColor = gradientTo || "rgba(139, 92, 246, 0.35)";

    return (
        <article
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative w-full cursor-pointer rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden",
                className
            )}
            {...props}
        >
            {/* Dynamic Mouse Spotlight Radial Gradient Layer */}
            <div
                className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[1]"
                style={{
                    background: `radial-gradient(${gradientSize}px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), ${fromColor}, ${toColor}, transparent 80%)`,
                }}
            />

            {/* Inner Content Wrapper */}
            <div className="relative z-[10] h-full w-full">
                {children ? (
                    children
                ) : (
                    <div className="absolute inset-0 grid place-items-center gap-2 overflow-hidden rounded-xl">
                        {imageUrl && (
                            <img src={imageUrl} alt="" className="relative z-[2] w-[100px] select-none" />
                        )}
                        {title && (
                            <h2 className="relative z-[4] m-0 text-base font-medium select-none text-foreground">
                                {title}
                            </h2>
                        )}
                    </div>
                )}
            </div>

            {/* Subtle Border Glass Accent */}
            <div
                className="pointer-events-none absolute inset-0 z-[2] rounded-[inherit] border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
        </article>
    );
};


