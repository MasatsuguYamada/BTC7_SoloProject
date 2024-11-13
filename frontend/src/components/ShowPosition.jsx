import {useState, useEffect} from "react";
import '../style/ShowPosition.css'

export function ShowPosition(){
    let [col, setCol] = useState("");
    let [row, setRow] = useState("");
    let [name, setName]=useState("");

    const colArr = ["1","2","3","4","5","6","7","8","9","10"];
    const rowArr = ["A","B","C","D","E","F","G","H","I","J"];

    useEffect(()=>{
        getPosition();

        //
    },[]);


    const getPosition = async ()=>{
        let response = await fetch("/api/position");
        [response] = await response.json();
        setCol(response.col);
        setRow(response.row);
        setName(response.name);
    }

    const paste = () => {
        console.log(row)
        document.getElementById(`${row}${col}`).style.backgroundColor="red";
    }

    return(
        <>
            <h3 id="namebar">{name}さんは『{row}{col}』柱付近の詰所にいます！</h3>
            <h3 onClick={()=>{
                document.getElementById(`${row}${col}`).style.backgroundColor="red";

            }}>工場内『　柱番号　』マップで確認する<a>（クリック）</a></h3>
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