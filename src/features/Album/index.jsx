import React from 'react';
import AlbumList from './components/AlbumList/index';

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Các Ca Khúc Pop Ballad Việt Nổi Bật',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/f/3/c/5f3c6acd427dd1a880b8d9d2b9865bea.jpg'
        },
        {
            id: 2,
            name: 'Nhạc Việt Hôm Nay Nghe Gì?',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/e/5/e/3e5e9ddc91c2d2013f284bb7b82f7374.jpg'
        },
        {
            id: 3,
            name: 'Pop Việt Ngày Nay',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/c/1/4/0c145f070587bba2c714ed69d912ecac.jpg'
        },
        {
            id: 4,
            name: 'Nhạc Việt Đầy Hứa Hẹn',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/a/c/3/8/ac380820e53ddc7e798d43436d2c66ba.jpg'
        },
        {
            id: 5,
            name: 'V-Pop Nhạc Mới Nổi Bật',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/1/7/d/017dbc601d894c9d88ac88a8d6850180.jpg'
        }
    ];
    
    return (
        <div>
            <h3>Âm Nhạc Dành Cho Bạn</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}
export default AlbumFeature;