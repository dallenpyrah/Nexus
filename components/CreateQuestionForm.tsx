import { useState } from "react";
import {TextField, Button} from "@mui/material";

export const CreateQuestionForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="title"
                label="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <TextField
                id="description"
                label="Description"
                multiline
                rows={4}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Submit
            </Button>
        </form>
    );
};
