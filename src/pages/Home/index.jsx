import { Button, Gap, PostItem } from "../../components"; 
import Swal from "sweetalert2";
import './home.css'

function Home() {
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    };

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Tambah Post Baru" />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
      <PostItem
        image="/images/photo1.jpg" alt="800"
        title="DREAM Squad"
        name="NCT DREAM"
        date="17 Aug 2016" // Tanggal debut
        body="NCT DREAM debuted on August 17, 2016, 
              and has since captivated fans with 
              their energetic performances and music!"
        onDelete={() => handleDelete()}
      />
      <PostItem
        image="/images/photo2.jpg" alt="800"
        title="The 127 Revolution"
        name="NCT 127"
        date="7 Jul 2016" // Tanggal debut
        body="NCT 127, the second sub-unit of NCT, debuted on July 7, 2016, with their powerful performances and dynamic music. Known for their energetic dance routines and unique concept, NCT 127 has taken the global stage by storm!"
        onDelete={() => handleDelete()}
      />
      <PostItem
        image="/images/photo3.jpg" alt="800"
        title="Chinese Unit"
        name="WayV"
        date="17 Jan 2019" // Tanggal debut
        body="WayV, the Chinese sub-unit of NCT, debuted on January 17, 2019. They are known for their stunning visuals, powerful performances, and music that blends K-pop and C-pop. As the international face of NCT, WayV continues to gain global recognition."
        onDelete={() => handleDelete()}
      />
      <PostItem
        image="/images/photo4.jpg" alt="800"
        title="Dreams and Wishes"
        name="NCT WISH"
        date="TBA" // Tanggal debut belum ditentukan
        body="NCT WISH is a special sub-unit within NCT that aims to bring fans closer to the members' dreams and wishes. Through this project, the unit will showcase individual and group talents while sharing their heartfelt aspirations. Stay tuned for their upcoming debut and releases!"
        onDelete={() => handleDelete()}
      />

      </div>
    </div>
  );
}

export default Home;
