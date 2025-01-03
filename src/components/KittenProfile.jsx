import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Modal } from 'react-bootstrap';
import { useCats } from '../contexts/CatsContext';
import { getCatFilepath, convertDate, getReleaseDate, capitalize } from './Functions';
import { getAllImages } from './FirebaseFunctions';
import ImageCarousel from "./ImageCarousel";
import VideoCarousel from './VideoCarousel';
import VideoFrame from './VideoFrame';
import './../App.css';
import CatImage from './CatImage';
import ParentPreview from './ParentPreview';

const KittenProfile= ({ cat = [] }) => {
    const { name, adj, sex, date, father, mother, price, video } = cat;
    const [images, setImages] = useState([]);
    const [show, setShow] = useState(false);
    const [previewParent, setPreviewParent] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const birthDate = convertDate(date);
    const releaseDate = getReleaseDate(date);
    const currentDate = new Date();

    const getData = async () => {
        const images = await getAllImages(getCatFilepath(cat));
        setImages(images);
    }

    const openParentPreview = (parent) => {
        setPreviewParent(parent);
        handleShow();
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className='cat-columns-container'>
                <Row className='profile-info-container'>
                        <h4>{capitalize(adj)} {sex === 'male' ? 'boy' : 'girl'} born {birthDate}</h4>
                        <h5>Mother: <Link onClick={() => openParentPreview(mother)}>{mother}</Link>, Father: <Link onClick={() => openParentPreview(father)}>{father}</Link></h5>
                        <h5>Date of release: {releaseDate <= currentDate ? 'ready to go!' : convertDate(releaseDate)}</h5>
                        {price ? <p>Price: ${price}</p> : ''}
                </Row>

                <div className='carousel-container'>
                    <ImageCarousel cat={cat} />
                    {video &&
                        <div className='video-frame-container'>
                            <VideoFrame id={video} />
                        </div>
                    }
                </div>

                <div className='kitten-images-container'>
                    {images.map((image) => {
                        return (
                            <CatImage key={image} filepath={image} />
                        );
                    })}
                </div>
            </div>
            
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header className='profile-header' closeButton>
                    <Modal.Title className='profile-title'>
                        <h2>{previewParent}</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ParentPreview parentName={previewParent}/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default KittenProfile;