'use client'

import { TextField, Grid } from '@mui/material';

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormData, FormDataProvider } from '../contexts/FormDataContxt';

const FlyerForm = () => {
  const {formData, setFormData} = useFormData();

  const handleInputChange = (e) => {
      setFormData(prevData => ({
        ...prevData,
        [e.target.name]: e.target.value
      }));  
  };
  
  const handleDate = (e) => {
    setFormData(prevData => ({
      ...prevData,
      ['date']: e.format().split('T')[0]
    }));  
};


  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Walk number"
            name="walkId"
            value={formData.walkId}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Jamaat"
            name="jamaat"
            value={formData.jamaat}
            onChange={(e) => {handleInputChange(e)}}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        sx={{ maxWidth: 250 }}
                        label="Pick a date"
                        onChange={handleDate}
                      />
                    </LocalizationProvider>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Place"
            name="place"
            value={formData.place}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Street"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="House Number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Postcode"
            name="postcode"
            value={formData.postcode}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Kids Participation Fee"
            name="kidsPrice"
            value={formData.kidsPrice}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Adults Participation Fee"
            name="adultPrice"
            value={formData.adultPrice}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Kids Track Length"
            name="kidsTrackLength"
            value={formData.kidsTrackLength}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Adults Track Length"
            name="regularTrackLength"
            value={formData.regularTrackLength}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default FlyerForm;
