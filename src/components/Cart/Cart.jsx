import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';


const Cart = () => {
    const [data,setData]=useState([]);
    const [showAll, setshowAll] = useState((false));
    const [uniqueId,setUniqueId] = useState();
    const [singleData, setSingleData] = useState({});
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then(res=>res.json())
        .then(Data => setSingleData(Data.data))
    },[uniqueId])


    const handleShowAll = ()=>{
        setshowAll(true);
    }

    useEffect(()=>{
        const loadData = async() => {
            const res = await fetch(
                ` https://openapi.programming-hero.com/api/ai/tools`
            );
            const daTa = await res.json();
            setData(daTa.data.tools);
        }
        loadData();
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
            {
             data.slice(0,showAll? 12:6).map(singledata => <SingleData singleData= {singledata} key = {singledata.id} setUniqueId = {setUniqueId}></SingleData>)   
            }
            </div>
            { !showAll && (
                <p onClick={handleShowAll}>
                    <Button>Show More</Button>
                </p>
            )
            }
            <Modal singleData = {singleData}></Modal>
        </div>
    );
};

export default Cart;