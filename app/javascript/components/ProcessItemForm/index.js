import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import cs from "./styles";

const ProcessItemForm = ({
  initialTitle = "",
  initialDescription = "",
  initialImageUrl = "",
  onProcessItem,
  buttonText,
  loading,
  errors
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  return (

    <div className={cs.form}>
       {errors && (
        <div className={cs.errors}>
          <div className="error">{errors.fullMessages.join('; ')}</div>
        </div>
      )}
     
      <TextField 
        id="outlined-basic" 
        label="Title" 
        variant="outlined" 
        value={title}
        className={cs.input}
        onChange={e => setTitle(e.currentTarget.value)}/>
      <TextField
        id="outlined-basic" 
        label="Description"
        variant="outlined"
        value={description}
        className={cs.input}
        onChange={e => setDescription(e.currentTarget.value)}
      />

      <TextField
        id="outlined-basic" 
        label="Image Url"
        variant="outlined"
        value={imageUrl}
        className={cs.input}
        onChange={e => setImageUrl(e.currentTarget.value)}
      />

        
      {loading ? (
        "...Loading"
      ) : (
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          onClick={() => onProcessItem({ title, description, imageUrl })}
          className={cs.button}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default ProcessItemForm;