import React from 'react';

const ComponentContext = React.createContext({
  handleChangeFactors: () => {},
  factors: {
    temperature: "",
    socialSituation: "",
    ownerPresence: "",
  },
  handleChangeProfile: () => {},
  profile: {
    servingSize: 0,
    age: "",
    activityLevel: "",
    healthStatus: "",
  }
});

const DataContext = ({ children }) => {

    const [factors, setFactors] = React.useState({ temperature: "moderate", socialSituation: "calm", ownerPresence: "absent" })
    const [profile, setProfile ] = React.useState({ servingSize: 25, age: "adult", activityLevel: "moderate", healthStatus: "healthy" });
    const [calculatedData, setCalculatedData] = React.useState({});


    const handleChangeFactors = ({ target }) => {
      const { id, value } = target;

      setFactors(prev => ({ ...prev, [id]:value }))
    }

    
    
    const handleChangeProfile = ({ target }) => {   
      const {id, value} = target;
      setProfile(prev => ({ ...prev, [id]: value }))
    }

    
    return (
        <ComponentContext.Provider value={{ handleChangeFactors, factors, handleChangeProfile, profile, calculatedData, setCalculatedData  }}>
            {
              children
            }
       </ComponentContext.Provider>
    )
}

export const useData = () => {
    return React.useContext(ComponentContext);
}

export default DataContext;
