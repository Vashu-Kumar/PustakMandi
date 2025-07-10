import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea
} from '@mui/material';

import { BASE_URL, IMAGE_URL} from '../../config';

const Books = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/PustakMandi/api/books')
            .then((res) => {
                setBooks(res.data);

            }).catch((err) => {
                console.error('Error fetching books:', err);
            })
    }, []);


    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        justifyContent: 'center',
        marginTop: '30px',
        padding: '0 20px'
    }
    return (
        <div className="homepage py-1" style={containerStyle}>
            {books.map((book) => (
                <Card
                    key={book._id}
                    sx={{
                        width: 220,
                        borderRadius: 3,
                        boxShadow: 3,
                        transition: 'transform 0.2s',
                        overflow: 'hidden',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        }

                    }}
                    onClick={() => navigate(`/PustakMandi/book/${book._id}`)}
                >
                    <CardActionArea sx={{height: '50%'}}>
                        <CardMedia
                            component="img"
                            height='140'
                            image={`${IMAGE_URL}${book.imageURI}`}
                            alt={book.title}
                            sx={{ objectFit: 'cover' }}
                        />
                        <CardContent sx={{ textAlign: 'left', backgroundColor: '#fff' }}>
                            <Typography variant="subtitle1" fontWeight="bold" noWrap>
                                {book.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" noWrap>
                                <strong>Author:</strong> {book.author}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" noWrap>
                                <strong>Genre:</strong> {book.genre}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            
            ))}
        </div>
                       
    );
}

export default Books;
