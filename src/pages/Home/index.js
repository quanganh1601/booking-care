import "./index.scss";
import SlideImage from "../../component/slide-image";
import Panel from "../../component/panel";
import Specialization from "../../component/specialization"
import CallVedeo from "../../component/call-vedeo"
import HealthFacilities from "../../component/health-facilities";
import DoctorHot from "../../component/doctor-hot"

const Home = () => {
  return (
    <div className="content-home">
      <Panel/>
      <SlideImage/>
      <Specialization/>
      <CallVedeo/>
      <HealthFacilities/>
      <DoctorHot/>
    </div>
  )
}
export default Home;