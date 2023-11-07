import { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../action";
import Slider from "react-slick";
import "./index.scss";
import { Buffer } from 'buffer';

console.log("log")

const DoctorHot = (props) => {
  const { getUsers, accessToken, doctors } = props;
  useEffect(() => {
    getUsers(accessToken, { limit: 10, page: 1 });
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className="container-doctor">
      <div className="content">
      <div className="show-title">{"Bác sỹ nổi bật tuần qua"}</div>
        <Slider {...settings}>
          {doctors.map((item) => {
            const img = new Buffer.from(item.image.data, "base64").toString('binary');
            return (
              <div className="box-item">
                <img className="show-image" src={img}/>
                <h3 className="show-info">{`${item.data_position.valueVi}, ${item.firstName},${item.lastName}`}</h3>
                <h4>{"Tai mũi họng - khoa nhi"}</h4>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  doctors: state.reducer.users
})

export default connect(mapStateToProps, { getUsers })(DoctorHot);