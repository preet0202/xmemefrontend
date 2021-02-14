import React, { Fragment, useEffect,useState } from 'react'
import { Form, FormGroup,Input,Container,Button } from 'reactstrap'
import  axios from 'axios'
import  base_url from './../api/bootapi'
import { toast } from 'react-toastify'
export default function AddMeme() {

    useEffect(() => {
        document.title="Add Memes || Preet" 
      },[])


      const [meme,setMemes] = useState({});

      const handleForm=(e)=>{
          console.log(meme);
            postDataToServer(meme);
          e.preventDefault();
      }


      //function to post on server

      const postDataToServer=(data)=>{
        axios.post(`${base_url}/memes`,data).then(
            (response)=>{
                console.log(response)
                toast.success("Meme is added successfully")
                setMemes({name:"" , url:"", description:""})
            },
            (error)=>{
                console.log(error)
                toast.error("Something Wrong!!!")
            }
        )
      }

    return (
        <Fragment>
            
              <h1 className="text-center my-3">Fill The Memes</h1>
            <Form onSubmit={handleForm} className="my-2">

                <FormGroup >
                        <label for="Name">Name </label>
                        <Input 
                            type="text"
                            placeholder="Enter Name here"
                            name="memeId"
                            id="Name"
                            onChange={(e)=>{
                                setMemes({...meme,name:e.target.value})
                            }}
                            
                            />

                </FormGroup>

                <FormGroup>
                    <label for="memeUrl">Meme Url </label>
                    <Input 
                        type="text"
                        placeholder="Enter here"
                        name="memeUrl"
                         id="memeUrl"
                         onChange={(e)=>{
                            setMemes({...meme,url:e.target.value})
                        }}
                         />
                </FormGroup>

                <FormGroup>
                    <label for="memedescription">Meme Description </label>
                    <Input 
                        type="text"
                        placeholder="Enter here"
                        name="memeDescription"
                         id="memeDescription"
                         onChange={(e)=>{
                            setMemes({...meme,description:e.target.value})
                        }}
                    />
                </FormGroup>
                
                <Container className="text-center">
                    <Button color ="success">Add Meme</Button>
                    <Button type="reset" color ="warning ml-2" onClick={()=>{
                        setMemes({})
                    }} 
                    >Clear</Button>
                </Container>

            </Form>
        </Fragment>
    )
}
