import Car from "./Car"
import { CARS } from "./data"

const AppBackup = () => {

    return (
      <div>
          <Car brand={CARS[0].brand} description={CARS[0].description}/>
          <Car {...CARS[1]}/>
          <Car {...CARS[2]}/>
          <Car />
      </div>
    )
  }
  
  export default AppBackup