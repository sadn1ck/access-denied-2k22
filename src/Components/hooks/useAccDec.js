import React, { useEffect, useMemo, useState } from "react"

const useAccDesc = (options, targetRef) => {
    const [isVisible, setisVisible] = useState(false);
    const callBackFunction = entries => {
        const entry = entries[0];
        setisVisible(entry.isIntersecting);

        if(entry.isIntersecting){
            targetRef.current.classList.add('abt-desc-anim');
        }else{
            targetRef.current.classList.remove('abt-desc-anim');
        }
    }

    const optionsMemo = useMemo(()=> {
        return options;
    },[options]);

    useEffect(() => {
        const accDesc = new IntersectionObserver(callBackFunction, optionsMemo);
        const currentTarget = targetRef.current;
        if(currentTarget){
            accDesc.observe(currentTarget);
        }

    }, [targetRef, optionsMemo]);

} 

export default useAccDesc;