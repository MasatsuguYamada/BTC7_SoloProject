import {useEffect, useState} from "react";
import {ShowPosition} from "./ShowPosition.jsx";

export function Searchbar() {
    const [nameArray, setNameArray] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [isButton, setIsButton] = useState(false);


    useEffect(() => {
        getDataNameArr();
        // getPosition();
        console.log("useE")
    },[]);

    const getDataNameArr = async ()=>{
        let response = await fetch("/api");
        response = await response.json();
        const nameArr= response.map(elem=>elem.name);
        setNameArray(nameArr);
        console.log("api");
    }

    const postId= async ()=>{
        const res = await fetch('/api/name',{
            method:'POST',
            headers:{'Content-Type': 'application/json',},
            body:JSON.stringify({name:searchName}),
        })
    }

    function getSelectName(){
        const selectEl = document.getElementById("select")
        console.log(selectEl.value)
        setSearchName(selectEl.value);
    }

    return(
        <>
            <div>検索する従業員を選択してください</div>
            <select id="select" onChange={() => {
                getSelectName();
            }}>
                <option key="disabledSelected">選択してください</option>
                {nameArray.map((name, index) => (<option key={index + 1}>{name}</option>))}
            </select>

            <button id="searchButton" onClick={()=>{
                postId();
                setIsButton(true);
                // getPosition();
                console.log(searchName);
            }}>検索実行</button>
            {isButton ? <ShowPosition />:console.log("isButton false")}

        </>
    );
}