
import { useData } from '../contexts/DataContext';


const DogsProfile = () => {

    const { handleChangeProfile, profile } = useData();
    console.log(profile)
    return (
        <div className="input-boxes shadow-md p-10 rounded-xl">
            <h2 className="text-2xl font-semibold">Dog's profile</h2>
            <div className="text-dark grid grid-cols-2 mt-5 gap-5">

              <div className="flex flex-col">
                 <label>Serving Size</label>
                 <input id="servingSize" value={profile.servingSize} onChange={handleChangeProfile} className="border p-2 rounded-lg mt-2 bg-[#F5F5F5] border-[#D9D9D9]" type="number" /> 
              </div>

              <div className="flex flex-col">
                 <label>Age</label>
                 <select value={profile.age} id={"age"} onChange={handleChangeProfile} className="border h-full rounded-lg mt-2 bg-[#F5F5F5] border-[#D9D9D9]">
                   <option value="puppy">Puppy (0-1 years)</option>
                   <option value="adult" selected>Adult (1-7 years)</option>
                    <option value="senior">Senior (7+ years)</option>
                 </select> 
              </div>

              <div className="flex flex-col">
                 <label>Activity Level</label>
                 <select value={profile.activityLevel} id="activityLevel" onChange={handleChangeProfile} className="border h-full rounded-lg mt-2 bg-[#F5F5F5] border-[#D9D9D9]">
                   <option value="low">Low (Walks)</option>
                   <option value="moderate" selected>Moderate (Runs/Jogs)</option>
                    <option value="high">High (Agility/Working)</option>
                 </select> 
              </div>

              <div className="flex flex-col">
                 <label>Health Status</label>
                 <select value={profile.healthStatus} id={"healthStatus"} onChange={handleChangeProfile} className="border h-[2.8em] rounded-lg mt-2 bg-[#F5F5F5] border-[#D9D9D9]">
                    <option value="healthy" selected>Healthy</option>
                    <option value="overweight">Overweight</option>
                    <option value="underweight">Underweight</option>
                    <option value="special">Special Needs</option>
                 </select> 
              </div>


            </div>
          </div>
    )
}


export default DogsProfile;