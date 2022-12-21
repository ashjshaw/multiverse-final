package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type Note struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	IsComplete  bool   `json:"isComplete"`
}

var notes []Note

func getAllNotes(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(notes)
}

func postNote(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var note Note
	_ = json.NewDecoder(r.Body).Decode(&note)
	notes = append(notes, note)
	json.NewEncoder(w).Encode(note)
}

func updateNote(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	// loop over the notes, range
	//delete the note with the name that we have sent
	//add a new note
	for index, item := range notes {
		if item.Name == params["name"] {
			notes = append(notes[:index], notes[index+1:]...)
			var note Note
			_ = json.NewDecoder(r.Body).Decode(&note)
			note.Name = params["name"]
			notes = append(notes, note)
			json.NewEncoder(w).Encode(note)
			return
		}

	}

}

func deleteNote(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for index, item := range notes {

		if item.Name == params["name"] {
			notes = append(notes[:index], notes[index+1:]...)
		}
	}
	json.NewEncoder(w).Encode(notes)
}

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/notes", getAllNotes).Methods("GET")
	r.HandleFunc("/notes", postNote).Methods("POST")
	r.HandleFunc("/notes", updateNote).Methods("PUT")
	r.HandleFunc("/notes", deleteNote).Methods("DELETE")

	fmt.Printf("Starting server at port 8000\n")
	log.Fatal(http.ListenAndServe(":8000", r))

}
