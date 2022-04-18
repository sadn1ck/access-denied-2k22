import React, { useEffect, useMemo, useState } from "react"

const useAccDen = (options, targetRef) => {
    const [isVisible, setisVisible] = useState(false);
    const callBackFunction = entries => {
        const entry = entries[0];
        setisVisible(entry.isIntersecting);

        if(entry.isIntersecting){
            targetRef.current.classList.add('abt-head-anim');
        }else{
            targetRef.current.classList.remove('abt-head-anim');
        }
    }

    const optionsMemo = useMemo(()=> {
        return options;
    },[options]);

    useEffect(() => {
        const accessDenHead = new IntersectionObserver(callBackFunction, optionsMemo);
        const currentTarget = targetRef.current;
        if(currentTarget){
            accessDenHead.observe(currentTarget);
        }

    }, [targetRef, optionsMemo]);

} 

export default useAccDen;