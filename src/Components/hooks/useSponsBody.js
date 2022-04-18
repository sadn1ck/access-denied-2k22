import React, { useEffect, useMemo, useState } from "react"

const useSponsBody = (options, targetRef) => {
    const [isVisible, setisVisible] = useState(false);
    const callBackFunction = entries => {
        const entry = entries[0];
        setisVisible(entry.isIntersecting);

        if(entry.isIntersecting){
            targetRef.current.classList.add('spons-body-p-anim');
        }else{
            targetRef.current.classList.remove('spons-body-p-anim');
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

export default useSponsBody;