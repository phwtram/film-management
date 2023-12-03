import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditModal() {
  const navigate = useNavigate();
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      
      img: "",
      title: "",
      year: "",
      nation:"",
      clip:"",
      info:"",
      agree: false,
    },

    onSubmit: (values) => {
      try {
        axios.put(`https://6531ffa84d4c2e3f333d7993.mockapi.io/films/${id}`, {
          img:  values.img,
          title:  values.title,
          year:  values.year,
          nation: values.nation,
          clip :values.clip,
          info: values.info
        });
        alert("Sửa thành công");
        navigate("/home");
      } catch (error) {
        console.log("Error Adding Films", error);
      }
    },
    validationSchema: Yup.object({
      img: Yup.string().required("Required.").url("Please type URL"),
      title: Yup.string()
        .required("Required.")
        .min(3, "Must be 3 characters or more"),
        year: Yup.number()
        .required("Required.")
        .min(1),
        nation: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
        clip: Yup.string().required("Required.").url("Please type URL"),
        info: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
    }),
  });

  return (
    <>
    <div style= {{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'

  }}>
      <div
        className="form"
        style={{   
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}
      >
        <form
          onSubmit={formik.handleSubmit}
          style={{
            flexDirection: "column",
            display: "flex",
            width: "700px",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)", // Added shadow for depth
            backgroundColor: "white"
          }}
        >
        <div style={{ position: "relative", marginBottom: "26px" }}>
    <input 
        type="text"
        placeholder="Image"
        name="img"
        value={formik.values.img}
        onChange={formik.handleChange}
        style={{ width: "100%" }}
    />
    {formik.errors.title && (
        <span style={{ color: "red" }}>
            {formik.errors.title}
        </span>
    )}
</div>

<div style={{ position: "relative", marginBottom: "26px" }}>
    <input 
        type="text"
        placeholder="Title"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        style={{ width: "100%" }}
    />
    {formik.errors.title && (
        <span style={{ color: "red" }}>
            {formik.errors.title}
        </span>
    )}
</div>

<div style={{ position: "relative", marginBottom: "26px" }}>
    <input 
        type="text"
        placeholder="Year"
        name="year"
        value={formik.values.year}
        onChange={formik.handleChange}
        style={{ width: "100%" }}
    />
    {formik.errors.title && (
        <span style={{ color: "red" }}>
            {formik.errors.title}
        </span>
    )}
</div>

<div style={{ position: "relative", marginBottom: "26px" }}>
    <input 
        type="text"
        placeholder="Nation"
        name="nation"
        value={formik.values.nation}
        onChange={formik.handleChange}
        style={{ width: "100%" }}
    />
    {formik.errors.title && (
        <span style={{ color: "red" }}>
            {formik.errors.title}
        </span>
    )}
</div>
<div style={{ position: "relative", marginBottom: "26px" }}>
    <input 
        type="text"
        placeholder="Clip"
        name="clip"
        value={formik.values.clip}
        onChange={formik.handleChange}
        style={{ width: "100%" }}
    />
    {formik.errors.title && (
        <span style={{ color: "red" }}>
            {formik.errors.title}
        </span>
    )}
</div>

<div style={{ position: "relative", marginBottom: "26px" }}>
    <input 
        type="text"
        placeholder="Info"
        name="info"
        value={formik.values.info}
        onChange={formik.handleChange}
        style={{ width: "100%" }}
    />
    {formik.errors.title && (
        <span style={{ color: "red" }}>
            {formik.errors.title}
        </span>
    )}
</div>
         
          <Button
            type="submit"
            style={{ 
                border: "1px solid #e8f0fe", 
                backgroundColor: "#e8f0fe",
                color:"#FC6C85",
                borderRadius: "8px", // Added rounded corners
                padding: "8px 16px",
                fontWeight: "600", // Made the text a bit bolder
                marginTop: "16px", // Added top margin for spacing
                transition: "background-color 0.3s", // Added transition for a smooth hover effect
               
            }}
          >
            Update
          </Button>
        </form>
      </div>
      <ToastContainer />
      </div>
    </>
);
}

export default EditModal;
