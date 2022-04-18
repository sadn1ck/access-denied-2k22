import React, { useEffect, useMemo, useState } from "react"

const useAbtImg = (options, targetRef) => {
    const [isVisible, setisVisible] = useState(false);
    const callBackFunction = entries => {
        const entry = entries[0];
        setisVisible(entry.isIntersecting);

        if(entry.isIntersecting){
            targetRef.current.classList.add('abt-img-anim');
        }else{
            targetRef.current.classList.remove('abt-img-anim');
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

export default useAbtImg;