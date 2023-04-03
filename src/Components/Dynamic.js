import React from 'react'
import { useState } from "react";
import '../Components/Dynamic.css'

export default function Dynamic() {
    const [LinkedList, setLinkedList] = useState([{ service: "" }]);

    const handleServiceChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...LinkedList];
      list[index][name] = value;
      setLinkedList(list);
    };
  
    const handleServiceRemove = (index) => {
      const list = [...LinkedList];
      list.splice(index, 1);
      setLinkedList(list);
    };
  
    const handleServiceAdd = () => {
      setLinkedList([...LinkedList, { service: "" }]);
    };
  
    return (
      <form className="App" autoComplete="off">
        <div className="form-field">
          <label htmlFor="service">Enter the Link(s)</label>
          {LinkedList.map((singleService, index) => (
            <div key={index} className="services">
              <div className="first-division">
                <input
                  name="service"
                  type="text"
                  id="service"
                  value={singleService.service}
                  onChange={(e) => handleServiceChange(e, index)}
                  required
                />
                {LinkedList.length - 1 === index && LinkedList.length < 4 && (
                  <button
                    type="button"
                    onClick={handleServiceAdd}
                    className="add-btn"
                  >
                    <span>Add a Service</span>
                  </button>
                )}
              </div>
              <div className="second-division">
                {LinkedList.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handleServiceRemove(index)}
                    className="remove-btn"
                  >
                    <span>Remove</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="output">
          <h2>Output</h2>
          {LinkedList &&
            LinkedList.map((singleService, index) => (
              // <ul key={index}>
              //   {singleService.service && <li>{singleService.service}</li>}
              // </ul>

              <input className='output1'  key={index} value={singleService.service} type="text"  placeholder={singleService.service} />
            ))}
        </div>
      </form>
    );
}
