import React, { useContext, useEffect, useState } from 'react'
import EditCategory from './EditCategory'
import { deleteCategoryAPI, getCategoryAPI } from '../services/allAPI'
import { addCatContext, editCatContext } from '../context/ContextShare';

function ViewCategory() {

    const [adminCategory, setAdminCategory] = useState([]);
    const{addCatgoryResponse, setAddCatgoryResponse} = useContext(addCatContext)
    const{editCatgoryResponse, setCatgoryResponse} = useContext(editCatContext)
    const getCategory = async () => {

        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await getCategoryAPI(reqHeader)
            setAdminCategory(result.data);
        }
    }
    useEffect(() => {
        getCategory()
    }, [addCatgoryResponse,editCatgoryResponse])

    const handleDelete = async (id) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        const result = await deleteCategoryAPI(id, reqHeader)
        if (result.status === 200) {
            getCategory()
        }
        else {
            alert(result.response.data)
        }
    }

    return (
        <>

            <div className='card shadow p-3 ' style={{ width: '800px', margin: 'auto', marginTop: '40px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                {adminCategory?.length > 0 ?
                    adminCategory.map((item) => (
                        <div className='p-3 border rounded mt-2' >
                            <div className='d-flex align-items-center'>
                                <h3 className='ms-2 mb-0 fs-5'>{item.category}</h3>
                                <div className="ms-auto">
                                    <EditCategory edit={item}/>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-danger">
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )) :
                    <p className='text-danger fw-bolder mt-3 ms2 '>Categories not uploaded yet!!!!!</p>
                }
            </div>

        </>
    )
}

export default ViewCategory