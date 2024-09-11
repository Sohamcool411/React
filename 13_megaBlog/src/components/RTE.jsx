import React from 'react'
import {Editor} from '@tinymce/tinymce-react'

function RTE() {
    return (
        <Editor
        initialValue='default value'
        init={
            {branding:false,
            height:500
            }


        }
        />
    ) 
}

export default RTE