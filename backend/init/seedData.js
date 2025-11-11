const Book = require('../models/bookSchema');
const bookData = require('../init/bookdata.js');

const seedData = async () => {
    try{

        await Book.deleteMany({});
        //console.log('Existing book data deleted succesfully'); 
        await Book.insertMany(bookData);
       // console.log('Sample data seeded succesfully')
    }catch(err){
        //console.error("Error seeding book data", err);
    }
};

<<<<<<< HEAD
module.exports = seedData;
=======
module.exports = seedData;
>>>>>>> aea2970d30785cb3ad372155b984cc8132ea8a01
