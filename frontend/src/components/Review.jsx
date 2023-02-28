import React, { useState } from 'react'
import { Formik } from 'formik'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import './Review_rating.css'


const Review = () => {

  const reviewSubmit = async (formdata, { resetForm }) => {
    console.log(formdata)
    resetForm()


    const res = await fetch('http://localhost:5000/review/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(res.status)
    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: "Success",
        text: 'Review Submitted'
      })
    }

  }

  //star rating

  // const [rating, setRating] = useState()






  return (
    <div>
      <div className="container">
        <div className="row mt-5" style={{ height: '70vh' }}>

          <div className="col-md-6 my-auto">

            <img src="https://helpdeskgeek.com/wp-content/pictures/2022/05/review-google.jpg" alt="" className='img-fluid' />


          </div>

          <div className="col-md-6 my-auto">

            <Formik initialValues={{ name: "", review: "", stars: "" }} onSubmit={reviewSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>

                  <div className="card shadow-0">
                    <div className="card-body">

                      <h3 className="card-title text-center"><u>YOUR REVIEW HERE</u></h3>

                      <div className="">
                        <label className="form-label d-block" for="form12"><b>NAME</b></label>
                        <input type="text" id="form12" className="mb-3 w-100" value={values.name} name='name' onChange={handleChange} />

                        <label className="form-label d-block" for="form12"><b>REVIEW</b></label>
                        <div className="">
                          <textarea className="form-control mb-3" id="textAreaExample" rows="5" value={values.review} name='review' onChange={handleChange}></textarea>
                        </div>

                      </div>


                      {/* <div className='star-rating'><span className='me-3'><b>RATE US</b></span>
                        {[...Array(5)].map((star, index) => {
                          index += 1;
                          console.log(index)

                          
                          return(
                            <span key = {index} className={index <= rating ? "on" :"off"} onClick={() => setRating(index)}><i class="fas fa-star"></i></span>
                            
                          );
                        })}
                      </div> */}

                      <div><span className='me-3'><b>RATE <i className="fas fa-star" style={{color:'green'}}></i></b></span>

                        {/* {[...Array(5)].map((star, index) => {
                          index += 1;



                          return (

                            <span key={index} className={index <= rating ? "on" : "off"} onClick={() => {
                              setRating(index);
                              const stars = index;
                              console.log(stars)
                            }
                            }><i class="fas fa-star"></i></span>

                          );
                        })} */}


                        <input type="number" value={values.stars} name='stars' onChange={handleChange} min='1' max='5'/>


                      </div>







                      <button type="submit" className="btn btn-success w-100 my-2">SUBMIT</button>
                      <div className='text-center'>
                        <Link to='/allReviews'>See All Reviews</Link>
                      </div>


                    </div>
                  </div>

                </form>
              )}


            </Formik>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Review