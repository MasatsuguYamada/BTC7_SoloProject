import {useState, useEffect} from "react";
import '../style/ShowPosition.css'

export function ShowPosition(){
    let [col, setCol] = useState("");
    let [row, setRow] = useState("");
    let row_global = "";
    let col_global = "";
    let pastePosition = "";
    const colArr = ["1","2","3","4","5","6","7","8","9","10"];
    const rowArr = ["A","B","C","D","E","F","G","H","I","J"];

    useEffect(()=>{
        getPosition();
    },[]);

    const getPosition = async ()=>{
        console.log("api/position");
        let response = await fetch("/api/position");
        [response] = await response.json();
        console.log(response);
        setCol(response.col);
        setRow(response.row);
        row_global=response.col;
        col_global=response.row;
    }

    // function paste(row, col){
    //     console.log("aaaaaa");
    //     console.log(rowGrobal);
    //     let pastePosition = `${row}${col}`
    //     console.log(pastePosition);
    //     const pastePositionEl = document.getElementById(pastePosition)
    //     console.log(pastePositionEl);
    //     pastePositionEl.backgroundColor ="red";
    //
    // }

    return(
        <>
            <h2 onClick={()=>{

                const pastePositionEl = document.getElementById(`${row}${col}`)
                console.log(pastePositionEl);
                pastePositionEl.style.backgroundColor="red"

            }}>工場内『　柱番号　』マップ</h2>
            {rowArr.map((row,index)=> {
                return(
                <div className="container" key={index}>
                    {colArr.map((col, index) => {
                                return(
                        <div className="item" id={`${row}${col}`} key={index}>{row}{col}</div>
                    )
                    })}
                </div>)
            })

            }
            {/*<div>{paste(row, col)}</div>*/}

            {/*{console.log(col)}*/}
            {/*{console.log(row)}*/}
        </>
        )
        }