import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

function Deleting() {
    const [images, setImages] = useState([]);

    const fetchImages = async () => {
        const res = await axios.get("http://localhost:8000/api/images");
        if (!res.data.success) {
            return toast.error("Error Fetching the Image")
        }
        setImages(res.data.image)
        toast.success("All Images are Here")


    };

    const handleDelete = async (public_id) => {
        console.log("Deleting:", public_id);
        try {
            await axios.delete("http://localhost:8000/api/images", {
                data: { public_id },
            });
            setImages(images.filter((img) => img.public_id !== public_id));
            toast.success("Image deleted!");
        } catch (error) {
            toast.error("Failed to delete image");
        }
    };
    return (
        <div>
            <h1>All Images</h1>
            <button className='bg-slate-600 text-white' onClick={fetchImages}>Show all Images</button>
            <div className='flex flex-wrap'>
                {images.map((img) => (
                    <div key={img.public_id} style={{ width: "200px" }}>

                        <img
                            src={img.secure_url}
                            alt={img.public_id}
                            width={200}
                            height={150}
                            style={{ objectFit: "cover" }}
                        />
                        <p style={{ fontSize: "12px" }}>{img.public_id}</p>

                        <button className='bg-slate-600 text-white' onClick={() => handleDelete(img.public_id)}>
                            Delete
                        </button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Deleting