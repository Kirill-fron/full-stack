import { useEffect, useRef } from "react"
import { Filters } from "./use-filters"
import qs from "qs"
import { useRouter } from "next/navigation"

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter()
    const isMounted = useRef(false)
    const prevQueryRef = useRef<string>("")

    useEffect(() => {
        const params = {
            ...filters.prices,
            pizzaTypes: Array.from(filters.pizzaTypes),
            sizes: Array.from(filters.sizes),
            ingredients: Array.from(filters.selectedIngredients)
        }
        
        const query = qs.stringify(params, {
            arrayFormat: 'comma'
        })
        
        // Обновляем URL только если query действительно изменился
        if (isMounted.current && prevQueryRef.current !== query) {
            router.push(`?${query}`, {
                scroll: false
            })
        }
        
        isMounted.current = true
        prevQueryRef.current = query
    }, [
        filters.prices.priceForm, 
        filters.prices.priceTo,
        filters.pizzaTypes,
        filters.sizes,
        filters.selectedIngredients,
        router
    ])
}