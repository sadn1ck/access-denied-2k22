import React, { useEffect, useMemo, useState } from "react"

const useNavObsToChangeColor = (options, targetRef) =>{
    const [isVisible, setisVisible] = useState(false);

    const callBackFunction = entries => {
        const entry = entries[0];
        setisVisible(entry.isIntersecting);

        let navItem = document.getElementsByClassName('main-section');
        console.log(navItem);
    }

    const optionsMemo = useMemo(()=> {
        return options;
    },[options]);


    useEffect(() => {
    const navObs = new IntersectionObserver(callBackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if(currentTarget){
        navObs.observe(currentTarget);
    }
    return () => {
        if(currentTarget) navObs.unobserve(currentTarget);
    }
    }, [targetRef, optionsMemo]);

    return isVisible;

}

export default useNavObsToChangeColor;