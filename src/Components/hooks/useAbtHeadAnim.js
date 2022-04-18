import React, { useEffect, useMemo, useState } from "react"

const useAbtHeadAnim = (options, targetRef) => {
    const [isVisible, setisVisible] = useState(false);
    const callBackFunction = entries => {
        const entry = entries[0];
        setisVisible(entry.isIntersecting);
        if(entry.isIntersecting){
            targetRef.current.classList.add('heading-go-up');
        }else{
            targetRef.current.classList.remove('heading-go-up');
        }
    }

    const optionsMemo = useMemo(()=> {
        return options;
    },[options]);

    useEffect(() => {
        const abtHeadObs = new IntersectionObserver(callBackFunction, optionsMemo);
        const currentTarget = targetRef.current;
        if(currentTarget){
            abtHeadObs.observe(currentTarget);
        }

    }, [targetRef, optionsMemo]);

} 

export default useAbtHeadAnim;