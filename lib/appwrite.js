import {
  Account,
  Client,
  ID,
  Avatars,
  Databases,
  Query,
} from 'react-native-appwrite';

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
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register User
export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await SignIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  //   account.create(ID.unique(), form.email, form.password, form.username).then(
  //     function (response) {
  //       console.log(response);
  //     },
  //     function (error) {
  //       console.log(error);
  //     }
  //   );
};

export const signIn = async (email, password) => {
  try {
    await account.deleteSession('current');
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;
    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    );
    if (!currentUser) throw Error;

    return currentUser.documents[0];
    // return user;
  } catch (error) {
    throw new Error(error);
  }
};
