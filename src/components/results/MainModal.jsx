import { useData } from '../contexts/DataContext'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const MainModal = ({ setModalVisible }) => {

    const { calculatedData } = useData();
    const { adjustment, mealTimes, partition, bGrams, distribution } = calculatedData;
    
    useGSAP(() => {
       const tl = gsap.timeline({ defaults: { opacity: 0, duration: .45} });
       tl.from('.modal-con', { scale: .9, y: '50px' })
       .from('.title-modal', { y: '10px' }, '-=.2')
       .from('.behavior-bar', { y: '10px' }, '-=.2')
       .from('.meal-box', { y: '10px', stagger: .2 }, '-=.4')
       .from('.note-bar', { y: '10px' }, '-=.4')
    })

    return (
        <>
          <div onClick={() => setModalVisible(false)} className="bg-[#4A4A4A] opacity-60 fixed inset-0 z-10"></div>

          <div className={"w-full p-10 rounded-2xl text-dark font-display modal-con bg-white max-w-[50em] fixed z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"}>
             <img onClick={() => setModalVisible(false)} src="cross-small.png" draggable={false} className="w-6 cursor-pointer absolute top-3 right-3" alt="" />
             <h2 className="text-2xl font-bold text-center title-modal">Recommended Feeding Plan</h2>

             <div className="mt-10">
                <div className="bg-secondary behavior-bar flex items-center border-l-8 border-l-primary gap-5 p-5">
                    <img className="w-7" src={"info.png"} />

                    <div>
                        <p className="text-lg font-bold">Behavioral Adjustment Score: {`${adjustment.percentageChange > 0 ? '+' : ''}${adjustment.percentageChange}%`} </p>
                        <p>{adjustment.explanationText}</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-5 mt-10">
                    <MealTimeBox data={{ time: mealTimes.breakfast, grams: partition.breakfast, window: "Breakfast" }} />
                    <MealTimeBox data={{ time: mealTimes.lunch, grams: partition.lunch, window: "Lunch" }} />
                    <MealTimeBox data={{ time: mealTimes.dinner, grams: partition.dinner, window: "Dinner" }} />
                </div>

                <div className="bg-[#F5F5F5] note-bar p-8 rounded-2xl mt-10">
                   <p className="text-lg font-semibold">Baseline Calculation</p>
                   <p>Base grams: {bGrams}g</p>
                   <p>Meal Distribution: B:{distribution[0].toFixed(1)}% | L:{distribution[1].toFixed(1)}% | D:{distribution[2].toFixed(1)}%</p>
                </div>
             </div>
          </div>
        </>
    )
}

const MealTimeBox = ({data}) => {
    
    const { time, grams, window } = data;
    console.log(time)
    return (
        <div className="meal-box bg-white shadow-md text-center relative rounded-2xl py-10 text-primary pb-16">
            <h3 className="font-semibold mb-5">{window}</h3>
            <p className="bg-secondary w-fit mx-auto px-6 py-2 rounded-full">{time}</p>

            <p className="absolute bottom-0 bg-primary text-white font-semibold w-full py-2 rounded-br-2xl rounded-bl-2xl">{grams} grams</p>
        </div>
    )
}

export default MainModal;