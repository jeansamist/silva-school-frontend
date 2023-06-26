import { School } from "@silva-school-frontend/models";
import { Card, Flexbox, Heading } from "@silva-school-frontend/ui";
import { FunctionComponent, useContext } from "react";
import { FiHome, FiMapPin, FiUsers } from "react-icons/fi";
import { ApiContext } from "../Contexts/ApiContext";
import school_image_default from "../assets/images/school_image_default.png";
import { AuthContext } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";

export const SelectSchoolBox: FunctionComponent<School> = ({ id, name, image, location, users, class_levels }) => {
  const { BAKEND_URL } = useContext(ApiContext);
  const { setcurrent_school } = useContext(AuthContext);
  return (
    <Link
      to={"/"}
      onClick={(e) => {
        e.preventDefault();
        if (setcurrent_school && id) {
          setcurrent_school(id);
        }
      }}
    >
      <Card>
        <Flexbox className="aic" gap>
          <img
            src={image === null ? school_image_default : BAKEND_URL + "" + image}
            alt={name}
            style={{ borderRadius: "50%" }}
            className="select_school_image"
          />
          <div className="data">
            <Heading type="3">{name}</Heading>
            <Flexbox gap>
              <Flexbox className="aic" gap>
                <FiMapPin size={16} className="flex lh-0" />
                {location}
              </Flexbox>
              <Flexbox className="aic" gap>
                <FiHome size={16} className="flex lh-0" />
                {class_levels?.length}
              </Flexbox>
              <Flexbox className="aic" gap>
                <FiUsers size={16} className="flex lh-0" />
                {users?.length}
              </Flexbox>
            </Flexbox>
          </div>
        </Flexbox>
      </Card>
    </Link>
  );
};
