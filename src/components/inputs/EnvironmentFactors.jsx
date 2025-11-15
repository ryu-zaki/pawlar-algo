

import { useData } from '../contexts/DataContext'
const EnvironmentFactors = () => {
    
    const { handleChangeFactors, factors } = useData();
    
    return (
        <div className="input-boxes shadow-md p-10 mt-10 rounded-xl">
            <h2 className="text-2xl font-semibold">Environmental Factors</h2>
            <div className="text-dark grid grid-cols-2 mt-5 gap-5">

              <div className="flex flex-col">
                 <label>Temperature</label>
                 <select id="temperature" onChange={handleChangeFactors} value={factors.temperature} className="border h-[2.8em] rounded-lg mt-2 bg-[#F5F5F5] border-[#D9D9D9]">
                   <option value="cold">Cold (&lt;15°C)</option>
                   <option value="moderate" selected>Moderate (15-25°C)</option>
                   <option value="hot">Hot (&gt;25°C)</option>
                 </select> 
              </div>

              <div className="flex flex-col">
                 <label>Social Situation</label>
                 <select id="socialSituation" onChange={handleChangeFactors} value={factors.socialSituation} className="border h-[2.8em] rounded-lg mt-2 bg-[#F5F5F5] border-[#D9D9D9]">
                   <option value="calm" selected>Calm/Normal</option>
                   <option value="stress">Stressful (Guests, Travel)</option>
                    <option value="other_dogs">With Other Dogs</option>
                 </select> 
              </div>

              <div className="flex flex-col">
                 <label>Owner Presence</label>
                 <select id="ownerPresence" onChange={handleChangeFactors} value={factors.ownerPresence} className="border h-[2.8em] rounded-lg mt-2 bg-[#F5F5F5] border-[#D9D9D9]">
                   <option value="absent" selected>Absent</option>
                   <option value="present">Present</option>
                 </select> 
              </div>

            </div>
          </div>
    )
}

export default EnvironmentFactors;