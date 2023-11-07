import "./index.scss";
import SlideBody from "../slide-body";
import gialieu from "../../assets/image/bac-si-da-lieu-tu-xa.jpeg";
import tamthan from "../../assets/image/than-kinh.jpeg";
import dalieu from "../../assets/image/bac-si-da-lieu-tu-xa.jpeg";
import tuvan from "../../assets/image/tu-van-tri-lieu-tam-ly-tu-xa.jpeg";
import tieuhoa from "../../assets/image/bac-si-tieu-hoa.jpeg";

const CallVedeo = () => {
  const data = [
    {
      id: "1",
      title: "Tư ván trị liệu Tâm lý từ xa",
      image: gialieu
    },
    {
      id: "2",
      title: "Sức khỏe tâm thần từ xa",
      image: tamthan
    },
    {
      id: "3",
      title: "Bác sỹ da liễu từ xa",
      image: dalieu
    },
    {
      id: "4",
      title: "Bác sỹ tư vấn từ xa",
      image: tuvan
    },
    {
      id: "5",
      title: "Bác sỹ tiêu hóa từ xa",
      image: tieuhoa
    }
  ];

  return (
    <SlideBody
      color={"#FFF"}
      data={data}
      title={"Bác sỹ từ xa Vedeo"}
      type={"vedeo"}
    />
  )
};

export default CallVedeo;