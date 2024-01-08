import {useRef, useEffect} from "react";

const useInterval = (callback, delay) => {
    // demo uses setState(newValue) notation
    // need to keep ref, otherwise count would grow stale
    const ref = useRef();

    useEffect(() => {
        ref.current = callback
    }, [callback])

    useEffect(() => {
        if(!delay) return;

        const id = setInterval(() => ref.current(), delay)

        return () => {
            clearInterval(id)
        }
    }, [delay])
}

export default useInterval;