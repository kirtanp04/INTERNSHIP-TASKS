/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import NavBar from '../../NavBar'
import Toastify from 'toastify-js'
import { Grid, Image, Item, Button } from 'semantic-ui-react'
import imageCompression from 'browser-image-compression'

import './Style.css'

const ImageSize = () => {
    const [origImage, setOrigImage] = useState('')
    const [origFile, setOrigFile] = useState('')
    const [compress, setCompress] = useState('')
    const [fileName, setFileName] = useState('')
   

    const handel = (e) => {
        const img = e.target.files[0]
        setOrigImage(img)
        setOrigFile(URL.createObjectURL(img))
        setFileName(img.name)
    }
    // let value = 0
    const Compress = (e) => {
       

        const option = {
            maxSizeMB: 1,
            maxWidthHeight: 500,
            useWebWorker: true
        }
        if (option.maxSizeMB >= origImage / 1024) {
            Toastify({
                text: "Image size shoult be >= 1MB",
                duration: 1500,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: false,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "black",
                },

            }).showToast();
        }

        let output;
        imageCompression(origImage, option).then((x) => {
            output = x;

            const downloadLink = URL.createObjectURL(output)
            setCompress(downloadLink)
        })

    }
    return (

        <><NavBar></NavBar>
            <div className="boxes">
                <Grid>
                    <input type="file"
                        accept='image/'
                        className='file-upload-button mt-5'
                        onChange={(e) => handel(e)} />
                    <div className="imgs">
                        <Grid.Column width={6}>
                            <Item>

                                {
                                    origFile ? (

                                        <Image src={origFile} className='image1'></Image>
                                    ) : console.log(1)
                                }
                            </Item>
                        </Grid.Column>
                        <Grid.Column width={4}>
                        



                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Item>
                                {
                                    compress ? (

                                        <Image src={compress} className='image2'></Image>
                                    ) : console.log(0)
                                }
                            </Item>
                        </Grid.Column>
                    </div>


                </Grid>
                <div className="boxes">
                    {
                        origFile && <Button className='buttons1' onClick={(e) => Compress(e)}>Compress Image</Button>
                    }
                    {
                        compress && <Button className='buttons2'><a href={compress} download={fileName}>Download Image</a> </Button>
                    }



                </div>

            </div>

        </>
    )
}

export default ImageSize