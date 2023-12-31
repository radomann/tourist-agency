import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "../../layout";
import { myGallery } from "../../components/imagegallery";
const { render } = myGallery;
import { touristServices } from "../../../service/tourist"
import { FooterPage } from "../../layout/footer";

const { getAllDestinations } = touristServices;


export const SinglePage = () => {
  const { id } = useParams()
  // const images = [
  //   {
  //     original: "https://picsum.photos/id/1018/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1018/1000/600/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1015/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1015/1000/600/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1019/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1019/1000/600/",
  //   },
  // ];

  const [data, setData] = useState(null)
  const [img, setImg] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const result = await getAllDestinations("/destinations/" + id)
        setData(result.data)

        setImg(result.data.media.map(result => 
          ({
            original: result.path,
            thumbnail: result.path
          })))
      } catch (error) {
        setError(error);
      }
    }
    fetchAllData()
  }, [])

  if (error)
    return <div>Error is: {error.message}</div>

  if (!data) return <div>Error is {error}</div>

  return <>
    <AppLayout />
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8" >
            <h6 className="section-title bg-white text-start text-primary pe-3">Destinations</h6>
            <h1 className="mb-4"><span className="text-primary">{data.title}</span></h1>
            <img className="img-fluid" src={data.media[0].path} alt="" />
            <p className="mb-4">{data.description}</p>
            <p className="mb-4">Cijena putovanja je {data.price} €</p>
            <p className="mb-4">Ova tura traje {data.duration} {data.duration > 1 ? 'dana' : 'dan'}.</p>
            <p className="mb-4">Datum polaska: {data.start_date}.</p>
            <p className="mb-4">Datum povratka: {data.end_date}.</p>
            {/* TODO render images only if they exist */}

          </div>
          <div className="row">
            {}
            {render(img)}
          </div>

        </div>
      </div>
    </div>
    <FooterPage />
  </>
}