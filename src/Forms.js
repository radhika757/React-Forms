import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import './Forms.css';
import { useState } from "react";


const Forms = () => {

    // yup schema for validation
  const schema = yup.object().shape({
    name: yup.string().required("Enter Your Full Name"),
    email: yup.string().email().required("Enter Your Email"),
    age: yup.number("Incorrect format").positive("Incorrect Format").integer("Incorrect Format").min(18).required("Please enter your age"),
    password: yup.string().min(8).max(20).required(),
    confirmpass: yup.string().oneOf([yup.ref("password"), null],"Passwords do not match").required("Please re-enter your password"),
  });

  // resolver for making the data go through submit and our schema 
  const { register, handleSubmit, formState:{errors}} = useForm({
    resolver : yupResolver(schema),
  });

  const onSubmit = (data) => {
   alert("Submitted Form successfully!");
   window.location.reload(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label for="name">Full Name</label> <br/>
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name")}
        />
        <p >{errors.name?.message}</p>
        <br />
        <label for="email">Email Address</label> <br/>
        <input
          type="text"
          placeholder="Enter your email"
          {...register("email")}
        />
        <p >{errors.email?.message}</p>
        <br />
        <label for="age">Age</label> <br/>
        <input
          type="number"
          placeholder="Enter your age"
          {...register("age")}
        />
        <p >{errors.age?.message}</p>
        <br />
        <label for="password">Enter Password</label> <br/>
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />
        <p >{errors.password?.message}</p>
        <br />
        <label for="pass">Re-enter Password</label> <br/>
        <input
          type="password"
          placeholder="Re-enter your password"
          {...register("confirmpass")}
        />
        <p >{errors.confirmpass?.message}</p>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Forms;
