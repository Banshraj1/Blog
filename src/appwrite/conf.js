const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteId: String(import.meta.env.VITE_APPWRITE_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;

export const sampleData = {
  $id: "6a339e1e001cb31d7b8a",
  bucketId: "69a95f820015ca848e8f",
  $createdAt: "2026-06-18T07:28:30.210+00:00",
  $updatedAt: "2026-06-18T07:28:30.210+00:00",
  $permissions: [
    'read("user:6a2e2912001eeb44641b")',
    'update("user:6a2e2912001eeb44641b")',
    'delete("user:6a2e2912001eeb44641b")',
  ],
  name: "no_image.jpeg",
  signature: "d2346b938991a867a8b20fa887d2a2ec",
  mimeType: "image/jpeg",
  sizeOriginal: 7425,
  sizeActual: 9900,
  chunksTotal: 1,
  chunksUploaded: 1,
  encryption: true,
  compression: "none",
};
