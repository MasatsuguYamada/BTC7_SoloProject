import {useEffect, useState} from "react";


export function Searchbar() {
    const [workersData, setWorkersData] = useState([])
    const [nameArray, setNameArry] = useState([]);

    const getData = async ()=>{
        let response = await fetch("/api");
        response = await response.json();

        const a= response.map(elem=>elem.name)
        console.log(a);
        setWorkersData(response)
    }

    useEffect(() => {
        getData();
    },[]);

    return(
        <>

            <div>検索する従業員を選択してください</div>
            <select onClick={()=>{
                console.log(workersData)
            }}>
                <option>選択１</option>
                <option>選択２</option>
                <option>選択３</option>
            </select>
            <button onClick={()=>{}}>検索実行</button>
        </>
    );
}