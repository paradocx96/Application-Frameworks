use sliit

//Question 3
db.students.insert
({
    name: 'John',
    dateOfBirth: '1990-01-01T00:00:00Z',
    subjects: ['Application frameworks', 'Computer architecture']
})

//Question 4
db.students.find
({
    name: 'John'
})

//Question 5
db.students.find
(
    ObjectId('6044dc3bde4927a5e570559e')
)

db.students.find
({
    _id: ObjectId('6044dc3bde4927a5e570559e')
})

//Question 6
db.students.update
(
    {name: 'John'},
    { $addToSet: { subjects: 'Distributed Computing' } }  
)

db.students.update
(
    {name: 'John'},
    { $push: { subjects: 'Distributed Computing' } }  
)

//Question 7
db.students.insertMany
([
    {
        name: 'Smith',
        dateOfBirth: '1990-01-15T00:00:00Z',
        subjects: ['Application frameworks', 'Computer architecture'],
        isActive: true
    },
    {
        name: 'Jane',
        dateOfBirth: '1990-02-15T00:00:00Z',
        subjects: ['Application frameworks', 'Computer architecture'],
        isActive: false
    }      
])

db.students.find({})

//Question 7
db.students.update
(
    { name: 'Smith' } && { isActive: true },
    { $push: { subjects: 'Distributed Computing' } }
)


//Question 8
db.students.updateOne
(    
    { isActive: true },
    { $set: { isActive: false } }
)

//Question 9
db.students.remove
({
    name: 'John'
})

db.students.find({})



