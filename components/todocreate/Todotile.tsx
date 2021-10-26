import React, { FC, useState,useEffect } from "react";
import axios from "axios";

interface data {
  title: string;
  _id: string;
}
interface item {
  title: data;
  arrayoftodo?: data[];
  removeelement: (items: data[]) => void;
}

const Todoitemtile: FC<item> = ({ title, arrayoftodo, removeelement }) => {
  const [complted, setcomplted] = useState<boolean>(false);
  const [updateTitle, setupdateTitle] = useState<Boolean>(false);
  const [saved, setsaved] = useState<boolean>(false)
  const [updatedtitle, setupdatedtitle] = useState<string>(title.title);
  const [afterupdation, setafterupdation] = useState<string>("")

  useEffect(() => {
    console.log("running")
  }, [])
  const updatetitle = (): void => {
    setupdateTitle(true);
  };
  const cutthetask = (): void => {
    setcomplted((prev) => !prev);
  };
  const savetitle = async(id) => {
    await axios.put(`http://localhost:4200/todo/${id}`,{title:afterupdation});
    setcomplted(prev=>!prev)
    setupdateTitle(false)
    setsaved(true)

  };
  const deleteitem = async (id: string) => {
    const a: data[] = arrayoftodo.filter((title) => title._id != id);
    setcomplted(prev=>!prev)
    removeelement(a);
    await axios.delete(`http://localhost:4200/todo/${id}`);
    
  };
  return (
    <div className="todotile" onClick={cutthetask}>
      {!updateTitle ? (
        <span className={complted && "completed"}>{saved? afterupdation :title.title}</span>
      ) : (
        <input
          type="text"
          value={updateTitle? afterupdation : updatedtitle}
          onChange={(e) => updateTitle ? setafterupdation(e.target.value) : setupdatedtitle(e.target.value)}
        />
      )}

      <div className="buttons">
        <button onClick={() => deleteitem(title._id)}>delete</button>
        {!updateTitle ? (
          <button onClick={() => updatetitle()}>Update</button>
        ) : (
          <button onClick={() => savetitle(title._id)}>Save</button>
        )}
      </div>
    </div>
  );
};

export default Todoitemtile;
