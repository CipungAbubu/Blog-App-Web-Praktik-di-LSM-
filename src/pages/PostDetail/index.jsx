import { Gap, Link } from "../../components";
import { useNavigate } from "react-router-dom";
import './postDetail.css'

function PostDetail() {
    const navigate = useNavigate();

    const albums = [
        { title: "The First", year: 2016 },
        { title: "We Young", year: 2017 },
        { title: "Reload", year: 2020 },
        { title: "Glitch Mode", year: 2022 },
        { title: "Beatbox", year: 2022 },
        { title: "Candy", year: 2023 },
      ];

  return (
    <div className="detail-blog-wrapper">
      <Gap height={20} />
      <div className="img-container">
        <img className="img-cover" src="/images/photo1.jpg" alt="Thumb" />
        <img className="img-cover" src="/images/dream1.jpg" alt="Dream 1" />
        <img className="img-cover" src="/images/dream2.jpg" alt="Dream 2" />
      </div>
      <p className="blog-title">DREAM Squad</p>
      <p className="blog-author">NCT DREAM - 17 Aug 2016</p>
      <p className="blog-body">
        NCT DREAM debuted on August 17, 2016, and has since captivated fans with 
        their energetic performances and music! They are known for their youthful
        concept and dynamic music style, which has made them one of the most beloved 
        sub-units of NCT.
      </p>
      <Gap height={20} />
      <div className="album-list">
        <p className="album-heading">Albums:</p>
        <ul className="albums">
          {albums.map((album, index) => (
            <li key={index} className="album-item">
              {album.title} ({album.year})
            </li>
          ))}
        </ul>
      </div>

      <Gap height={20} />
      <Link title="Back to Home" onClick={() => navigate('/')} />
    </div>
  );
}

export default PostDetail;
