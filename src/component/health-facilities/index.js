import SlideBody from "../slide-body";
import logoVietduc from "../../assets/image/lo-go-viet-duc.jpeg";
import logoChoday from "../../assets/image/logo-bvcr-moi.jpeg";
import logo from "../../assets/image/logobenhvien108.jpeg";
import logoYduoc from "../../assets/logo-y-duoc-1.jpeg"
const data = [
  {
    id: "1",
    title: "Bệnh viện Hữu nghị Việt Đức",
    image: logoVietduc
  },
  {
    id: "2",
    title: "Bệnh viện Chợ Rẫy",
    image: logoChoday
  },
  {
    id: "3",
    title: "Phòng khám bệnh viện y Dược 1 Hà nội",
    image: logoYduoc
  },
  {
    id: "4",
    title: "Trung tâm khám sức khỏe định kỳ",
    image: logo
  }
];

const HealthFacilities = () => {
  return (
    <SlideBody
      data={data}
      title={"Cơ sở y tế nổi bật"}
      color={"#f5f5f5"}
    />
  )
}
export default HealthFacilities;