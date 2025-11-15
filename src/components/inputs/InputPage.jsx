import DataList from "./DataList";
import InputForms from "./InputForms";
import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const InputPage = ({setModalVisible}) => {
    
    useGSAP(() => {
       const tl = gsap.timeline({ delay: .3 ,defaults: { opacity: 0 } });

       tl.from('.input-boxes', { stagger: .2, y:'50px' })
       .from('.list-box', { stagger: .2, x:'50px' }, '-=.5')
    })

    return (
        <div className="py-20 text-primary font-display min-h-[60em]">
            <div className="text-center flex flex-col items-center">
             <div className="flex select-none items-center justify-center">
                <img draggable={false} src={'pawlar_logo.png'} alt="" />
                <img draggable={false} src="pawlar_text.png" alt="" />
             </div>

             <p className="text-xl mt-2 mb-5">Generate a well organized meal plan</p>
             
            </div>

            <div className="w-11/12 mt-10 mx-auto max-w-[75em] grid grid-cols-2 gap-10">
                <InputForms />
                <DataList setModalVisible={setModalVisible} />
            </div>
            
        </div>
    )
};

export default InputPage;