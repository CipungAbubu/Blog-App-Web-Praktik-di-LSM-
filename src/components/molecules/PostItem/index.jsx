import './postItem.css';
import { Button, Gap } from '../../atoms';
import { useState } from 'react';

function PostItem(props) {
    const { image, title, name, date, body, onDelete } = props;
    const [isExpanded, setIsExpanded] = useState(false);

    // Fungsi untuk mengubah status expand/collapse
    const toggleBody = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='blog-item'>
            <img className='image-thumb' src={image} alt={title} />
            <div className="content-detail">
                <div className='title-wrapper'>
                    <h3 className='title'>{title}</h3>
                    <div className='edit-wrapper'>
                        <Button title='Edit' />
                        <Gap width={10} />
                        <Button title='Hapus' onClick={onDelete}/>
                    </div>
                </div>
                <p className='author'>{name} - {date}</p>
                <p className='body'>
                    {isExpanded ? body : `${body.slice(0, 100)}... `}
                    <span 
                        className='read-more' 
                        onClick={toggleBody}>
                        {isExpanded ? 'Tutup' : 'Baca Selengkapnya'}
                    </span>
                </p>
                <Button title="Lihat Detail" />
            </div>
        </div>
    );
}

export default PostItem;
