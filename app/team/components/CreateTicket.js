import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CreateTicket = () => {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send email data to backend for processing
    // try {
    //   const response = await fetch('/api/sendEmail', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ email, content })
    //   });

    //   if (response.ok) {
    //     console.log('Email sent successfully');
    //   } else {
    //     console.error('Failed to send email');
    //   }
    // } catch (error) {
    //   console.error('Error sending email:', error);
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="required info one"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
      />

<TextField
sx={{mt: 1}}
        label="required info two"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
      />


      <TextField
      sx={{mt: 1}}

        label="Comments"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        fullWidth
        multiline
        rows={4}
      />
      <Button sx={{mt: 1}}
 type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default CreateTicket;
