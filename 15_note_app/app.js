const buttonElement = document.querySelector('.button');
const appElement = document.querySelector('.app');

const createNoteElement = (id, content) => {
	const element = document.createElement('textarea');
	element.classList.add('note');
	element.placeholder = 'Empty Note';
	element.value = content;

	element.addEventListener('dblclick', () => {
		const warning = confirm('Do you want to delete this note?');
		if (warning) {
			deleteNote(id, element);
		} else {
			return;
		}
	});

	element.addEventListener('input', () => {
		updateNote(id, element.value);
	});
	return element;
};

const deleteNote = (id, element) => {
	const notes = getNotes().filter((note) => note.id !== id);
	saveNote(notes);
	appElement.removeChild(element);
};

const addNote = () => {
	const notes = getNotes();
	const noteObject = {
		id: Math.floor(Math.random() * 100000),
		content: '',
	};
	const noteElement = createNoteElement(noteObject.id, noteObject.content);
	appElement.insertBefore(noteElement, buttonElement);
	notes.push(noteObject);
	saveNote(notes);
};

const getNotes = () => {
	return JSON.parse(localStorage.getItem('note-app') || '[]');
};

const updateNote = (id, content) => {
	const notes = getNotes();
	const target = notes.filter((note) => note.id === id)[0];
	target.content = content;
	saveNote(notes);
};

getNotes().forEach((note) => {
	const noteElement = createNoteElement(note.id, note.content);
	appElement.insertBefore(noteElement, buttonElement);
});

const saveNote = (notes) => {
	localStorage.setItem('note-app', JSON.stringify(notes));
};

buttonElement.addEventListener('click', addNote);
