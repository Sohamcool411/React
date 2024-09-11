import React from 'react'
import appWriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id,title,featuredImage}) {
    return (
        <Link to={`/post/${$id}`}>
            <div>
                <div>
                    <img src={appWriteService.getFilePreview(featuredImage)} alt={title} className="rounded-xl"/>
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard