import React, { useState } from 'react';

const Team = () => {
  const [photo, setPhoto] = useState(null);
  const [designation, setDesignation] = useState('');
  const [photoPreview, setPhotoPreview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    } else {
      setPhotoPreview('');
    }
  };

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your logic to handle form submission (e.g., upload photo and save designation)
    console.log('Photo:', photo);
    console.log('Designation:', designation);
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="photo">Upload Photo:</label>
          <input type="file" id="photo" onChange={handlePhotoChange} accept="image/*" />
        </div>
        {photoPreview && (
          <div>
            <img src={photoPreview} alt="Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </div>
        )}
        <div>
          <label htmlFor="designation">Designation:</label>
          <input type="text" id="designation" value={designation} onChange={handleDesignationChange} />
        </div>
        <button type="submit">Save</button>
      </form>
      {submitted && (
        <div>
          <h2>Submitted Data</h2>
          <p>Name: <img src={photoPreview} alt="Uploaded Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} /></p>
          <p>Designation: {designation}</p>
        </div>
      )}
    </div>
  );
};

export default Team;
