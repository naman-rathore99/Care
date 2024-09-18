import * as sdk from "node-appwrite"


export const {PROJECT_ID,PATIENT_ID,DOCTOR_ID,API_KEY,APPIONTMENT_ID,DATABASE_ID,NEXT_PUBLIC_BUCKET_ID:BUCKET_ID,NEXT_PUBLIC_ENDPOINT:ENDPOINT}=process.env

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!)
.setProject(PROJECT_ID!)
.setKey(API_KEY!)


export const dataBase = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);