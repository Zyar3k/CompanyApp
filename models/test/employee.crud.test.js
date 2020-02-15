const Employee = require('../employee.model');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;

describe('Employee', () => {

  before(async () => {

    try {
      const fakeDB = new MongoMemoryServer();
  
      const uri = await fakeDB.getConnectionString();
  
      mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
    } catch(err) {
      console.log(err);
    }
  
  });

  describe('Reading  data', () => {

    it('should return all the data with "find" method,', async () => {
  
    });
  
    it('should return proper document by various params with "findOne" method', async () => {
  
    });
  
    it('should properly remove multiple documents with "deleteMany" method', async () => {
  
    });
  
  });

  describe('Creating data', () => {

    it('should insert new document with "insertOne" method ', () => {
      
    });
    
    
  });


  describe('Updating data', () => {
    
    it('should properly update one document with "updateOne" method ', () => {
      
    });

    it('should properly update one document with "save" method ', () => {
      
    });

    it('should properly update multiple documents with "updateMany" method ', () => {
      
    });
    
    
    
  });
  
  describe('Removing data', () => {

    it('should properly remove one document with "deleteOne" method', async () => {
  
    });
  
    it('should properly remove one document with "remove" method', async () => {
  
    });
  
    it('should properly remove multiple documents with "deleteMany" method', async () => {
  
    });
  
  });



});








