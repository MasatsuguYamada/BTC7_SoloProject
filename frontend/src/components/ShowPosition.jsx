import {useState, useEffect} from "react";
import '../style/ShowPosition.css'

export function ShowPosition(){
    const [col, setCol] = useState(0);
    const [row, setRow] = useState(0);
    const colArr = ["1","2","3","4","5","6","7","8","9","10"];
    const rowArr = ["A","B","C","D","E","F","G","H","I","J"];

    useEffect(()=>{
        getPosition()
    },[]);

    const getPosition = async ()=>{
        console.log("api/position");
        let response = await fetch("/api/position");
        [response] = await response.json();
        console.log(response);
        setCol(response.col);
        setRow(response.row);
        console.log(col);
        console.log(row);
    }

    return(
        <>
            {rowArr.map(row=> {
                return(
                <div className="container">
                    {colArr.map(col => {
                        // {let idName={col}}
                        return(
                            <div className="item" id={`${col}${row}`}>{col}</div>
                        )
                    })}
                </div>)
            })}
                {/*colArr.map(col => <div className="item">{col}</div>)*/}
                {/*    }*/}
                {/*</div>)}*/}





        </>
        )
        }