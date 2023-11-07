import Nerve from "../../assets/image/than-kinh.jpeg";
import Ear from "../../assets/image/ear-nose.jpeg";
import Spine from "../../assets/image/co-xuong-khop.jpeg";
import Heart from "../../assets/image/tim-mach.jpeg";
import Medicine from "../../assets/image/co-xuong-khop.jpeg";
import SlideBody from "../slide-body";

const Specialization = () => {
  const data = [
    {
      id: 1,
      title: "Tai mũi họng",
      image: Ear
    },
    {
      id: 2,
      title: "Cột sống",
      image: Spine
    },
    {
      id: 3,
      title: "Y học cổ chuyền",
      image: Medicine
    },
    {
      id: 4,
      title: "Châm cứu",
      image: Heart
    },
    {
      id: 5,
      title: "Sản phụ khoa",
      image: Spine
    },
    {
      id: 6,
      title: "Siêu âm thai",
      image: Nerve
    }
  ];

  return <SlideBody title={"Chuyên khoa phổ biến"} data={data} color={"#f5f5f5"} />
};
export default Specialization;