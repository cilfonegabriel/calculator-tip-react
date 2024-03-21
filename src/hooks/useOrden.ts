import { useState } from "react"
import type { OrderItem } from "../types"

export default function useOrden() {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = () => {
        console.log("addItem")
    }
    
    return {
        addItem,
    }
}