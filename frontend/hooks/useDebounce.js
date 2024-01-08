import { useEffect, useState, useRef } from "react";

const useDebounce = (fn, ms, deps = []) => {
    const timeoutRef = useRef()
    const [isReady, setIsReady] = useState(false)

    const cancel = () => {
        setIsReady(false)
        clearTimeout(timeoutRef.current)
    }
    
    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setIsReady(true)
            fn()
        }, ms)

        return () => {
            cancel()
        }
    }, deps)

    return [ isReady, cancel ]
}

export default useDebounce;