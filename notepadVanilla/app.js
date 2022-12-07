const notepad = document.querySelector('[data-js="notepad"]')
const saveBtn = document.querySelector('[data-js="saveBtn"]')
const loadBtn = document.querySelector('[data-js="loadBtn"]')
const exportBtn = document.querySelector('[data-js="exportBtn"]')

let note = ""
let noteName = ""
let saved = false



const handleSave = () => {
    localStorage.setItem('note', note)
    saved = true
}

const getLocalStorage = () => {
    notepad.textContent = localStorage.getItem('note')
}

const loadFromFile = () => {
    saved = false

    const reader = new FileReader()

    if(loadBtn.files.length > 0) {
        reader.onload = event => {
            note = reader.result
            notepad.textContent = note
       }
       
        reader.readAsText(loadBtn.files[0]) 
    }
}

const handleExport = () => {
    if(!saved) {
        exportBtn.href = "#"
        exportBtn.removeAttribute("download")
        alert("Você precisa salvar primeiro!")
        return
    }

    if(loadBtn.files.length > 0) {
        createNote("exported")
    } else {
        createNote("new")
    }
    
}

const createNote = type => {
    switch(type) {
        case "new":
            noteName = "NewNote.txt"
            break
        case "exported":
            noteName = loadBtn.files[0].name
            break
    }
    
    let newData = new Blob([note], {type: 'text/plain'})
    exportBtn.href = window.URL.createObjectURL(newData)
    exportBtn.download = noteName
    window.URL.revokeObjectURL(newData)
}

notepad.addEventListener('change', e => {
    note = e.target.value
    saved = false
})

exportBtn.addEventListener('click', handleExport)
saveBtn.addEventListener('click', handleSave)
loadBtn.addEventListener('change', loadFromFile)
document.addEventListener('load', getLocalStorage)