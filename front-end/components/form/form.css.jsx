import styled from 'styled-components'

export const FormComponent = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 30vh;
    width: 25vw;
    background-color: aliceblue;
`

export const FormTitle = styled.h1`

`

export const NoteTitleLabel = styled.label`
    margin-top: 2vh;
`
export const NoteTitleInput = styled.input`
    margin-top: 1vh;
`
export const NoteDescriptionLabel = styled.label`
    margin-top: 2vh;
`
export const NoteDescriptionInput = styled.input`
    margin-top: 1vh;
`
export const SubmitButton = styled.button`
    margin-top: 3vh;
    width: 10vw;
`