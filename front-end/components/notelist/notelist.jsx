import { useEffect, useState } from "react";

export default function Notelist() {
    const [data, setData] = useState();
    const [noteList, setNoteList] = useState();

    const fetchApi = async () =>
        await fetch("http://localhost:8000/notes", {
            method: "GET",
            credentials: "same-origin",
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                console.log(response.status);
                throw response;
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error("Error found " + error);
            });

    useEffect(() => {
        fetchApi().then(() => {
            let list = [];
            if (data === undefined || data === null) {
                return
            } else {
                for (let note of data) {
                    list.push(
                        <>
                            <p>{note.name}</p>
                            <p>{note.description}</p>
                        </>
                    );
                }
                setNoteList(list);
            }
        });
    }), [data];
    return <>{noteList}</>;
}
