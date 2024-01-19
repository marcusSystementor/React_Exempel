import { useState } from "react";

const FormSubmit = () => {
const [age, setAge] = useState("");
const [visaAge, setVisaAge] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        setVisaAge(age);
      
      }
      
      return (
      
       <div className="App">
        <form onSubmit={handleSubmit}>
          <label>Skriv in din ålder:</label>
          <input type="text"
          value={age} onChange={((e) => setAge(e.target.value))}></input>
          <button type="submit">Submit</button>
        </form>
      
        {visaAge !== null && (
            <div>
              <p>Din ålder är: {visaAge}</p>
            </div>
          )}
        </div>


)}

export default FormSubmit;