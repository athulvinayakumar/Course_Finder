import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editCategoryAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editCatContext } from '../context/ContextShare';

function EditCategory({ edit }) {

 const{editCatgoryResponse, setCatgoryResponse} = useContext(editCatContext)
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    handleClose1();
    setShow(false);
  };
  const handleClose1 = () => {
    setCat({
      category: edit.category,
    });
  };

  const [cat, setCat] = useState({
    id:edit._id,
    category: edit.category
  });

  const handleUpdate = async () => {

    const { id,category } = cat
    if (!category) {
        toast.warning('Please Fill the form Completely')
    }
    else {
        const reqBody = new FormData()
        reqBody.append("category", category)
       
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await editCategoryAPI(id, reqBody, reqHeader)
            console.log(result);
            if (result.status === 200) {
                alert('Category Updated Sucessful')
                handleClose()
                setCatgoryResponse()
               
            }
    }
}

  return (
    <>
      <button onClick={handleShow} className='btn btn-success me-2'>
        <i className="fa-solid fa-pen-to-square "></i>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center align-items-center flex-column">
              <div className='mb-3 mt-2 w-100'>
                <input
                  type="text"
                  className="form-control"
                  placeholder='category'
                  value={cat.category}
                  onChange={(e) => setCat({ ...cat, category: e.target.value })}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose1}>
            Clear
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
        <ToastContainer position='top-center' theme='colored' autoClose={1000} />
      </Modal>
    </>
  );
}

export default EditCategory;
