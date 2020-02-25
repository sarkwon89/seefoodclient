import React, { useState } from 'react'


function Upload(props) {

    const [loading, setLoading] = useState(false)

    const uploadImage = async e => {
        const files = e.target.files
        console.log(e.target.files)
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'seefoodar')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/diad1aa5z/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()
        console.log(file.secure_url)
        props.handleImageUpload(file.secure_url)
        setLoading(false)
        
    }

    return (
        <div className="input-field col s12">
            <input
                type="file"
                name="files"
                placeholder="Upload an image"
                id="imgFile"
                onChange={uploadImage}
            />
            {/* <label htmlFor="Img1">Image</label> */}
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                    <img src={props.image} style={{ width: '300px' }} alt="image" />
                )}
        </div>
    )
}

export default Upload




