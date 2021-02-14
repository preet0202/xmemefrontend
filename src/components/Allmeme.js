import React from 'react'
import Meme from "./Meme"
import {useState , useEffect} from 'react'
import base_url from "./../api/bootapi"
import axios from "axios"
import { toast } from 'react-toastify'
 
export default function Allmeme() {

    useEffect(() => {
      document.title="All Memes" 
      
    },[]);
    
    const [memes,setMemes]=useState([]);


    //function
    const getAllMemesFromServer = () =>{
        axios.get(`${base_url}/memes`).then(
            (response)=>{
                //success
                //console.log(response);
                console.log(response.data);
                toast.success("Memes are being loaded",{
                    position: 'bottom-center'
                })
                setMemes(response.data);
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("server down!!! Something wrong",{
                    position: 'bottom-center'
                })
            }
        )
    }

    //function to call server:
    useEffect(() => {
        
        getAllMemesFromServer();
      },[]);
    
    return (
        <div>
            <h1>All Memes</h1>
            <p>List of Memes are</p>
            {

                memes.length>0 ? 
                memes.map((item)=> <Meme key={item.id} meme={item}  />)

                : "No Memes"
            }
        </div>
    );
}
