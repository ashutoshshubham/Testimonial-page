import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "./styles.css";
import { Navigation } from "swiper";
import Review from './Review';

const AllReviews = () => {

    const [review, setReview] = useState([]);

    // const [star, setStar] = useState([])

    const fetchReviews = async () => {
        const res = await fetch('http://localhost:5000/review/getall');
        console.log(res.status)

        const data = await res.json();
        console.log(data);
        setReview(data);
        // setStar(data)
    }

    useEffect(() => {
        fetchReviews();
    }, [])

    const deleteReview = async (id) => {
        console.log(id)
        const res = await fetch('http://localhost:5000/review/delete/' + id, {
            method: "DELETE",
        })

        console.log(res.status)

        if (res.status === 200) {
            fetchReviews();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Review Deleted Successfully'
            })
        }
    }









    return (
        // <div className='mt-5'>
        //     <h1 className='text-center my-3'>ALL REVIEWS HERE</h1>
        //     <div className='container'>

        //         <div className="mb-5 overflow-y-scroll mx-auto" style={{ width: "80vw", height: '40vh' }}>

        //             {review.map((Review) => (
        //                 <div className="col-md-6 mb-3 mx-auto">
        //                     <div className="card">
        //                         <div className="card-body">
        //                             <h5 className="card-title">{Review.name}</h5>
        //                             <p className="card-text">
        //                                 {Review.review}
        //                             </p>
        //                             <p style={{ color: 'green' }}>
        //                                 <span><b>{Review.stars}</b></span>&nbsp;<i className="fas fa-star"></i>
        //                             </p>


        //                             {/* <div>{star.map(() => <i className="fas fa-star" style={{color:'green'}}></i>)}</div> */}




        //                             <button type="button" className="btn btn-primary" onClick={() => (deleteReview(Review._id))}>
        //                                 Delete Review
        //                             </button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}

        //         </div>
        //         <h4><Link to='/review' className='ms-4'>Back</Link></h4>

        //     </div>
        // </div>

        <div style={{ marginTop: '100px' }}>
            <h1 className='text-center my-5'>ALL REVIEWS HERE</h1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {/* <SwiperSlide>Slide 1</SwiperSlide>
<SwiperSlide>Slide 2</SwiperSlide>
<SwiperSlide>Slide 3</SwiperSlide> */}

                {review.map((Review) => (
                    <SwiperSlide> <div className="col-md-6 mb-3 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{Review.name}</h5>
                                <p className="card-text">
                                    {Review.review}
                                </p>
                                <p style={{ color: 'green' }}>
                                    <span><b>{Review.stars}</b></span>&nbsp;<i className="fas fa-star"></i>
                                </p>


                                {/* <div>{star.map(() => <i className="fas fa-star" style={{color:'green'}}></i>)}</div> */}




                                <button type="button" className="btn btn-danger" onClick={() => (deleteReview(Review._id))}>
                                    Delete Review
                                </button>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            <h4><Link to='/review' className='ms-4'>Back</Link></h4>
        </div>




    )
}

export default AllReviews