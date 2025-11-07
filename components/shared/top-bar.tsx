import React from 'react'
import { cn } from '@/lib/utils'
import { Container, SortPopup } from "@/components/shared";
import { Categories } from "@/components/shared/categories";


export const TopBar = () => {
    return (
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10')}>
            <Container className="flex items-center justify-between">
                <Categories />
                <SortPopup />
            </Container>
        </div>
    )
}

