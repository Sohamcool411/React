import conf from '../conf.js'
import {Client, Databses, Storage , Query,ID} from 'appwrite'


export class Service{
    client=new Client();
    databases; 
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases=new Databses(this.client);
        this.bucket=new Storage(this.client)
    }
    //we declare this in constructor to avoid resource wastage by creating the database and storage only when new object is created.

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log('Appwrite sevice :: createPost :: error',error);
        }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log('Appwrite sevice :: updatePost :: error',error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log('Appwrite sevice :: deletePost :: error',error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log('Appwrite sevice :: getPost :: error',error)
        }
    }

    async gettPosts(queries=[ Query.equal('status',['active'])]){
        try {
            return await this.databases.listDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                // [
                //     Query.equal('status',['active'])
                // ]
            )
        } catch (error) {
            console.log('Appwrite sevice :: getPosts :: error',error)
        }
    }

    //file upload service
    
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('Appwrite service :: uploadFile :: error',error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log('Appwrite service :: deleteFile :: error',error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()

export default service