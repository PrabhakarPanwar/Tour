import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

function Adding() {
    const [text, setText] = useState("");
    const [image, setImage] = useState("");
    const [publicId, setPublicId] = useState("");
    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState(null);

    const handleUpload = async () => {

        const formData = new FormData();
        formData.append("file", file);
        formData.append("caption", text);        // 👈 fixed
        formData.append("upload_preset", "Kanatal_Orchids");
        formData.append("folder", "admin-upload");
        try {
            const res = await axios.post(
                `https://api.cloudinary.com/v1_1/dycefizg5/image/upload`,
                formData
            );
            setImage(res.data.secure_url);
            setPublicId(res.data.public_id);
        } catch (err) {
            toast.alert("DataBase Not Responding")
        }
    };
    return (
        <div >
            <h1>Image Upload</h1>
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                required
            />
            <input
                type="text"
                placeholder="Explain the picture in 100 words"
                onChange={(i) => setText(i.target.value)}
                required
            />
            <button className='bg-slate-600 text-white' onClick={handleUpload}>Upload</button>

            {/* Show progress */}
            {progress > 0 && <p>Uploading: {progress}%</p>}

            {/* Show uploaded image */}
            {image && (
                <div>
                    <img src={image} alt={text} className='h-[250px] w-[350px]' />
                    <p>{text}</p>
                </div>
            )}
        </div>
    )
}

export default Adding