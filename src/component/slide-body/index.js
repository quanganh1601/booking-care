import "./index.scss";
import { Carousel } from "antd";
import { VideoCameraFilled } from "@ant-design/icons";
import { Buffer } from 'buffer';

const SlideBody = (props) => {
  const { title, data, color, type } = props;

  return (
    <div className="content-slile-default" style={{ background: color }}>
      <div className="content">
        <div className="show-title">{title}</div>
          <Carousel slidesToShow={4}>
            {data.map((item) => {
              let image = item.image;
              type == "doctor_hot" && (image = new Buffer.from(item.image, "base64").toString('binary'))
              return (
                <div className="box-item">
                  <img src={image} />
                  {type == "vedeo" && (
                    <div className="icon-call-vedeo">
                      <VideoCameraFilled/>
                    </div>
                  )}
                  <div className="text">{item.title}</div>
                </div>
              )
            })}
          </Carousel>
      </div>
    </div>
  )
};

export default SlideBody;