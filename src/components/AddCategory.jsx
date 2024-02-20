import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { addCategoryAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewCategory from './ViewCategory';
import { addCatContext } from '../context/ContextShare';



function AddCategory() {

    const { addCatgoryResponse, setAddCatgoryResponse } = useContext(addCatContext)

    const [token, setToken] = useState("")
    const [addDetails, setAddDetails] = useState({
        category: ""
    });
    console.log(addDetails);

    const handleClose = () => {

        setAddDetails({
            category: ""
        })
    }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
        else {
            setToken("")
        }
    }, [])

    const handleAdd = async (e) => {
        e.preventDefault()
        const { category } = addDetails
        if (!category) {
            toast.warning('Please Fill the form Completely')
        } else {

            const reqBody = new FormData()
            reqBody.append("category", category)
            if (token) {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                const result = await addCategoryAPI(reqBody, reqHeader)
                console.log(result);
                if (result.status === 200) {
                    console.log(result.data);
                    toast.success("Category added Succesfully")
                    handleClose()
                    setAddCatgoryResponse(result.data)
                }
                else {
                    toast.error(result.response.data);
                }
            }

        }

    }

    return (
        <>
        
                      <div className="col-md-9 col-lg-10">
                        <div className="row">
                  
                            <div className="col-md-12">
                                <Card style={{ width: '800px',margin: 'auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                                    <Card.Body>
                                        <Card.Title className="text-center fs-2 fw-bolder mb-3">Create Category</Card.Title>
                                        <Form>
                                            <Form.Group controlId="Title">
                                                <Form.Label>Category</Form.Label>
                                                <Form.Control
                                                    value={addDetails.category}
                                                    onChange={(e) => setAddDetails({ ...addDetails, category: e.target.value })}
                                                    type="text"
                                                    placeholder="Enter a Category"
                                                    className="mb-2"
                                                />
                                            </Form.Group>
                                            <div className="d-flex justify-content-center mb-2 mt-3">
                                                <Button onClick={handleAdd} variant="primary" type="submit">
                                                    Add
                                                </Button>
                                                <Button onClick={handleClose} variant="secondary" type="reset" className="ms-2">
                                                    Clear
                                                </Button>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ViewCategory />
                            </div>
                        </div>
                        <ToastContainer position='top-center' theme='colored' autoClose={1000} />
                    </div>
             
                
         


        </>
    )
}

export default AddCategory