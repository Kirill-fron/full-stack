import React from 'react'
import { cn } from '@/lib/utils'
import { Container, SortPopup } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { Category } from '@prisma/client';

interface Props {
    categories: Category[]
  
}


export const TopBar:React.FC<Props> = ({categories}) => {
    return (
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10')}>
            <Container className="flex items-center justify-between">
                <Categories items={categories} />
                <SortPopup />
            </Container>
        </div>
    )
}

