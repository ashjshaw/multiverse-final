import React, { useState } from "react";
import {
    FormComponent,
    FormTitle,
    NoteDescriptionInput,
    NoteDescriptionLabel,
    NoteTitleInput,
    NoteTitleLabel,
    SubmitButton,
} from "./form.css";

export default function Form() {
    const [noteTitle, setNoteTitle] = useState();
    const [noteDescription, setNoteDescription] = useState();

    const changeNoteTitleFunc = (e) => {
        setNoteTitle(e.target.value);
    };

    const changeNoteDescriptionFunc = (e) => {
        setNoteDescription(e.target.value);
    };

    const submitFunction = (e) => {
        let noteData = {name: noteTitle, description: noteDescription, isComplete: false}
        console.log(noteData)
        fetch('http://localhost:8000/notes', {
            method: 'POST',
            mode:'cors',
            body: JSON.stringify(noteData)
        })
    };
    return (
        <>
            <FormComponent onSubmit={submitFunction}>
                <FormTitle>Create a new note</FormTitle>
                <NoteTitleLabel>Note Title</NoteTitleLabel>
                <NoteTitleInput onChange={changeNoteTitleFunc} />
                <NoteDescriptionLabel>Note contents</NoteDescriptionLabel>
                <NoteDescriptionInput onChange={changeNoteDescriptionFunc} />
                <SubmitButton type="submit">Create Note</SubmitButton>
            </FormComponent>

            <p>{noteTitle}</p>
            <p>{noteDescription}</p>
        </>
    );
}
