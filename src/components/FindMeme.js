import React,{useState, useEffect} from "react";
import { Fragment } from "react"
import { Form,FormGroup,Input,Container,Button } from "reactstrap"
import axios from "axios";
import ReactDOM from 'react-dom';
import { toast } from "react-toastify";
import Meme from "./Meme"
import base_url from "./../api/bootapi"

export default function FindMeme() {
    const[id,setId]=useState({});

    useEffect(()=>{
        console.log("find meme");
        document.title="Find Meme";
        
    },[])
    const handleForm = (e) =>{
        e.preventDefault();
        FindMeme(id)
    }
    
    const FindMeme=(meme)=>{
        console.log(`${base_url}/memes/`+meme.id);
        axios.get(`${base_url}/memes/`+meme.id).then(
            (response)=>{
                toast.success("Found the meme")
                console.log(response.data);
                var found = <div> <Meme key={meme.id} meme={response.data}/> </div>;
                console.log(found);
                ReactDOM.render(found, document.getElementById('temp'))

            },(error)=>{
                console.log(error);
                toast.error("Meme not found")
            }
        )
        
    }

    return (
        <div>
        <div>
        <Fragment>
        <h1> Find Your meme here</h1>
        <Form>
            <FormGroup >
                <label for = "id">ID</label>
                <Input 
                    type="text" 
                    placeholder="Enter the ID" 
                    id="id" 
                    name = "id"
                    onChange ={(e)=>{
                        setId({...id,id:e.target.value})
                    }}
                    />
            </FormGroup>
            <Container className="text-center">
                <Button type = "submit" color="success" onClick={handleForm} >Find Meme</Button>
                <Button type="reset" color="warning" className="ml-2"  >Clear</Button>
            </Container>
        </Form>
    </Fragment>
    </div>
    <div id = "temp">

        </div>
    </div>)
}
