import {useState, useEffect} from "react";
import '../style/ShowPosition.css'

export function ShowPosition(){
    let [col, setCol] = useState("");
    let [row, setRow] = useState("");
    let pastePosition = "";
    const colArr = ["1","2","3","4","5","6","7","8","9","10"];
    const rowArr = ["A","B","C","D","E","F","G","H","I","J"];

    useEffect(()=>{
        getPosition();
    },[]);

    const getPosition = async ()=>{
        let response = await fetch("/api/position");
        [response] = await response.json();
        setCol(response.col);
        setRow(response.row);
    }

    return(
        <>
            <h2 onClick={()=>{
                const pastePositionEl = document.getElementById(`${row}${col}`)
                console.log(pastePositionEl);
                pastePositionEl.style.backgroundColor="red"
            }}>工場内『　柱番号　』マップで確認する（クリック）</h2>
            {rowArr.map((row,index)=> {
                return(
                <div className="container" key={index}>
                    {colArr.map((col, index) => {
                                return(
                        <div className="item" id={`${row}${col}`} key={index}>{row}{col}</div>
                    )
                    })}
                </div>)
            })}
        </>
        )
        }