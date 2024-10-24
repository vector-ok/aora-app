import { Account, Client, ID } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1', // Your API Endpoint
  platform: 'com.project.aora', // Your platform
  projectId: '6718e11b00121f0467e0', // Your project ID
  databaseId: '671a13db001d6447d3d6',
  userCollectionId: '671a1459003b73110811', // Your user collection ID
  videoCollectionId: '671a14d5001a7059f35a',
  storageId: '671a1857000197747fd7', // Your storage bucket ID
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

// Register User
export const createUser = (form) => {
  account.create(ID.unique(), form.email, form.password, form.username).then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
