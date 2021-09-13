require('dotenv').config();
const axios = require('axios');
const readDatabase = process.env.DATABASEREADURL;
const writeDatabase = process.env.DATABASEWRITEURL;

class ConnectDatabase {
  constructor(collection_name) {
    this.data = {
      plugin_id : "613ad7f916dd8d4dde70e571",
      organization_id : "613fa96c6173056af01b4b28",
      collection_name: collection_name,
      bulk_write: false,
      object_id: "",
      filter: {},
      payload: {}
    }
  }

  // Adding a document to the database
  create = async (payload) => {
    try {
      this.data.payload = payload;

      const response = await axios.post( writeDatabase, this.data);
      return response.data
    }
    catch(error) {
      return error;
    }
  };

  //Fetching multiple documents from the Database
  fetchAll = async( filter = {}) => {
    try {
      this.data.filter = filter;
      const response = await axios.get(
        `${readDatabase}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}`
      );

      return response.data;
    }
    catch(error) {
      return error;
    }
  };

  // Fetching a single item from the Database
  fetchOne = async (query) => {
    try {
      const response = await axios.get(
        `${readDatabase}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}?${Object.keys(query)}=$(Object.values(query))`
      );

      return response.data;
    }
    catch(error) {
      return error;
    }
  };

  // Updating a document 
  update = async (id, payload) => {
    try {
      this.data.payload = payload;
      this.data.object_id = id;

      const response = await axios.put(
        writeDatabase, this.data
      );

      return response.data;
    }

    catch(error) {
      return error;
    }
  };

  // Deleting item rom the Database
  delete = async (id) => {
    this.data.object_id = id;

      try {
        const response = await axios.delete(writeDatabase, JSON.stringify(this.data));
        return response.data;
      } 
      catch (error) {
        return error;
      }
  };
}

module.exports = ConnectDatabase;