import { MongoClient } from 'mongodb';
import { logDB } from '../misc/logger.js';
const db_url = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(db_url)

const dbName = 'kutenq';

await client.connect();
/**
 * Insert data into a collection
 * @param {String} collectionName The collection name you want to insert to
 * @param {Object} data The data you want to insert
 */
const insert = async (collectionName, data) => {

    const db = client.db(dbName);
    const collection = db.collection(collectionName)

    const insertResult = await collection.insertOne(data)

    logDB(`Inserted in to ${collectionName}`);

    return insertResult;
}


const findAll = async (collectionName) => {


    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const findAllResult = await collection.find({}).toArray();

    logDB(`Found all items in ${collectionName}`);

    return findAllResult;
}

/**
 * Find an object
 * @param {String} collectionName 
 * @param {Object} query 
 */
const find = async (collectionName, query) => {


    // Connect to the DB then to the collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const findAllResult = await collection.find(query).toArray();

    logDB(`Found all items in ${collectionName} with query ${query}`);

    return findAllResult;
}

/**
 * Find an object
 * @param {String} collectionName 
 * @param {Object} query 
 */
const findOne = async (collectionName, query) => {


    // Connect to the DB then to the collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const findOneResult = await collection.findOne(query);

    logDB(`Found one item in ${collectionName} with query ${query}`);

    return findOneResult;
}

/**
 * Updates a single entry (first matching result)
 * @param {String} collectionName The collection you want to update
 * @param {Object} query The query you want to match
 * @param {Object} updatedValue The values you want to update
 */
const update = async (collectionName, query, updatedValue) => {


    // Connect to the DB then to the collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const updateResult = await collection.updateOne(query, { $set: updatedValue });

    logDB(`Updated item in ${collectionName} with query ${query}`);

    return updateResult;

}

/**
 * Updates multiple entries
 * @param {String} collectionName The collection you want to update
 * @param {Object} query The query you want to match
 * @param {Object} updatedValue The values you want to update
 */
const updateMany = async (collectionName, query, updatedValue) => {


    // Connect to the DB then to the collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const updateResult = await collection.updateMany(query, { $set: updatedValue });

    logDB(`Updated items in ${collectionName} with query ${query}`);


    return updateResult;

}

/**
 * Check if document exists
 * @param {String} collectionName 
 * @param {Object} query 
 * @returns 
 */
const checkIfExists = async (collectionName, query) => {


    // Connect to the DB then to the collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const countResult = await collection.countDocuments(query);

    logDB(`Checked if a result in ${collectionName} with query ${query} exists`);


    return countResult;

}

/**
 * Creates a collection
 * @param {String} collectionName The name of the collection
 */
const createCollection = async (collectionName) => {

    // Connect to db
    const db = client.db(dbName);

    // Create db
    db.createCollection(collectionName, function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
    });
}


export { insert, findOne, find, findAll, update, updateMany, checkIfExists, createCollection }