import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { GetCatFilepath, ConvertDate, GetReleaseDate } from './Functions';
import { GetAllImages,  } from './FirebaseFunctions';
import ImageCarousel from "./ImageCarousel";
import './../App.css';
import CatImage from './CatImage';

const KittenProfile= ({ cat = [] }) => {
    const { id, name, type, colour, sex, adj, status, date, father, mother, price } = cat;
    const [images, setImages] = useState([]);
    const filepath = GetCatFilepath(cat);
    const birthDate = ConvertDate(date);
    const releaseDate = GetReleaseDate(date);
    const currentDate = new Date();

    const getData = async () => {
        const images = await GetAllImages(GetCatFilepath(cat));
        setImages(images);
    }

    useEffect(() => {
        getData();
    }, [])

    console.log(cat);
    console.log(images);

    return (
        <div className='kitten-columns-container'>
            <div>
                <h3>{name} collar {sex == 'male' ? 'boy' : 'girl'}. Born {birthDate}.</h3>
                <p>Mother: <Link to='/queens' state={mother}>{mother}</Link>, Father: <Link to='/kings' state={father}>{father}</Link></p>
                <p>Date of release: {releaseDate <= currentDate ? 'ready to go!' : ConvertDate(releaseDate)}</p>
                {price ? <p>Price: ${price}</p> : ''}

                <ImageCarousel cat={cat} />
            </div>

            <div className='kitten-images-container'>
                {images.map((image) => {
                    return (
                        <CatImage key={image} filepath={image} />
                    );
                })}
            </div>
        </div>
    );
}

export default KittenProfile;