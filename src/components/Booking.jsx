import React from 'react'
import Button from './Button'
import { useState } from "react";
import { useForm } from "react-hook-form";  

function Booking() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    
  return (
    <div className='booking'>
        <div className="container">
            <div className="section-space">
                <div className="section-title mb-60">
                    <h5 className='mb-20 position-relative'>Book Now</h5>
                    <h2>Book Your Table</h2>
                    <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo<br/>
                    molestie vel, ornare non id blandit netus.</p>
                </div>
                <div className="col-lg-6 col-md-8 col-12">
                    <form class="row g-3" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    {/* <form class="row g-3" onSubmit={handleSubmit((data) => console.log(data))}> */}
                        <div class="col-md-6">
                            <input {...register("name")} type="name" class="form-control" id="name" placeholder='Your Name'/>
                        </div>
                        <div class="col-md-6">
                            <input {...register("email")} type="email" placeholder='Your Email' class="form-control" id="email"/>
                        </div>
                        <div class="col-md-6">
                            <input {...register("date")} type="date" placeholder='Reservation Date' class="form-control" id="date"/>
                        </div>
                        <div class="col-md-6">
                            <input {...register("countPeople")} type="number" placeholder='Total People' class="form-control" id="number"/>
                        </div>
                        <div class="col-12">
                            <textarea {...register("massage")} class="form-control" rows="4" cols="50" placeholder="Message"></textarea>
                        </div>
                        <div class="col-12">
                            <Button lable='Book Now' />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Booking