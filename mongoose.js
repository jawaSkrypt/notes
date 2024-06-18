const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =`mongodb+srv://jawahar:${password}@cluster0.72n8kz2.mongodb.net/testNoteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Note = mongoose.model('Note', noteSchema)


const note = new Note({
  content: 'HTML is easy',
  important: true
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})


// Note.find({}).then(result => {
//     result.forEach(note=> {
//         console.log(JSON.stringify(note))
//     })
//     mongoose.connection.close()
// })