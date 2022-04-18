import React, { useEffect, useMemo, useState } from "react"

const useSponsRef = (options, targetRef) => {
    const [isVisible, setisVisible] = useState(false);
    const callBackFunction = entries => {
        const entry = entries[0];
        setisVisible(entry.isIntersecting);
        // console.log(targetRef);
        if(entry.isIntersecting){
            targetRef.current.classList.add('spons-cont-anim');
        }else{
            targetRef.current.classList.remove('spons-cont-anim');
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

export default useSponsRef;