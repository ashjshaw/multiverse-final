import { FormComponent, FormTitle, NoteDescriptionInput, NoteDescriptionLabel, NoteTitleInput, NoteTitleLabel, SubmitButton } from "./form.css";

export default function Form(){
    return (
        <FormComponent>
            <FormTitle>Create a new note</FormTitle>
            <NoteTitleLabel for="note-input">Note Title</NoteTitleLabel>
            <NoteTitleInput id="note-input"/>
            <NoteDescriptionLabel id="note-description">Note contents</NoteDescriptionLabel>
            <NoteDescriptionInput for="note-description"/>
            <SubmitButton>Create Note</SubmitButton>
        </FormComponent>
    )
}