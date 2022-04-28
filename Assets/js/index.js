const getNotes = () => 
fetch ('/api/notes', {
  method: 'GET',
  headers: {
    ContentType: 'application/json'
  }
});

const postNotes = (note) => 
fetch ('/api/notes', {
  Method: 'POST',
  headers: {
    content: 'application/json'
  },
  body: JSON.stringify(note)
});

const deleteNote = () => 
fetch 