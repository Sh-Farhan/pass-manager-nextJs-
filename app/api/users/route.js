// import { NextResponse } from "next/server";
// import { MongoClient } from "mongodb";
// import bodyParser from "body-parser";

// const url =  process.env.MONGO_URI;
// const client = new MongoClient(url)

// const dbName = 'pass-manager-user-db'

// export const GET = async () => {
//     try{
//         await client.connect();
//         const db = client.db(dbName);
//         const collection = db.collection('userData');
//         const Result = await collection.find({}).toArray();
//         const data = await JSON.stringify(Result)
//         return new NextResponse(data)
//     } catch(error){
//         return new NextResponse("Error in fetching users" + error.message)
//     }

// }

// export const POST = async (req,res) => {
//     try {
//         const data = await req.json();
//         await client.connect();
//         const db = client.db(dbName);
//         const collection = db.collection('userData');
//         const insertResult = await collection.insertOne(data);  // Insert the body (password data)

//         return NextResponse.json({ success: true, result: insertResult });  // Return the result as JSON
//     } catch (error) {
//         return new NextResponse("Error inserting data: " + error.message);
//     } finally {
//         await client.close();  // Ensure the client is closed after the operation
//     }
// };

// export const DELETE = async(req,res) => {
//     try{
//         const data = await req.json();
//         console.log(data);
//         await client.connect();
//         const db = client.db(dbName);
//         const collection = db.collection('userData');
//         const Result = await collection.deleteOne(data);
//         return NextResponse.json({succes : true, result: Result,myDel: data})
//     } catch(error){
//         return new NextResponse("Error inserting data: " + error.message);
//     } finally{
//         await client.close();
//     }
// }
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// MongoDB URI and Database Name
const url = process.env.MONGO_URI;
let client;
let clientPromise;

if (!url) {
    throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable to preserve the MongoClient between hot reloads
    if (!global._mongoClientPromise) {
        client = new MongoClient(url);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable
    client = new MongoClient(url);
    clientPromise = client.connect();
}

// Ensure that MongoDB client connection is reused
async function connectToDatabase() {
    return clientPromise;
}

// GET: Fetch all users from MongoDB
export const GET = async () => {
    try {
        const db = (await connectToDatabase()).db('pass-manager-user-db');
        const collection = db.collection('userData');
        const result = await collection.find({}).toArray();
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching users:', error);
        return new NextResponse("Error fetching users: " + error.message, { status: 500 });
    }
};

// POST: Add a new user to MongoDB
export const POST = async (req) => {
    try {
        const data = await req.json();  // Parse the request body
        const db = (await connectToDatabase()).db('pass-manager-user-db');
        const collection = db.collection('userData');
        const insertResult = await collection.insertOne(data);

        return NextResponse.json({ success: true, result: insertResult });
    } catch (error) {
        console.error('Error inserting data:', error);
        return new NextResponse("Error inserting data: " + error.message, { status: 500 });
    }
};

// DELETE: Delete a user from MongoDB
export const DELETE = async (req) => {
    try {
        const data = await req.json();  // Parse the request body (e.g., user ID)
        const db = (await connectToDatabase()).db('pass-manager-user-db');
        const collection = db.collection('userData');
        const deleteResult = await collection.deleteOne(data);

        if (deleteResult.deletedCount === 0) {
            return new NextResponse("No matching document found to delete", { status: 404 });
        }

        return NextResponse.json({ success: true, result: deleteResult, deletedData: data });
    } catch (error) {
        console.error('Error deleting data:', error);
        return new NextResponse("Error deleting data: " + error.message, { status: 500 });
    }
};
