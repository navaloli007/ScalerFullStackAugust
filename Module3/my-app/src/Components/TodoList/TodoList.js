import { useCallback, useState } from "react";


function TodoList(){

    const [items, setItems] = useState(["Item1","Item2","Item3","Item4"]);
 
    const removeItem = useCallback((itemToRemove)=>{
        setItems((prevItems)=>{
         return prevItems.filter((item)=> item!==itemToRemove);
        });
    } ,[]);

    return <div>
        {

            items.map((item)=>{
                return <div key={item}>
                    {item}
                    <button onClick={()=>removeItem(item)}> Remove </button>
                    </div>
            })
        }

    </div>


}

export default TodoList;