import { School } from "@silva-school-frontend/models";
import { Card, Flexbox, Grid, Heading } from "@silva-school-frontend/ui";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { FiHome, FiMapPin, FiUsers } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { ApiContext } from "../Contexts/ApiContext";
import { AuthContext } from "../Contexts/AuthContext";
import school_image_default from "../assets/images/school_image_default.png";

export const SelectSchoolView: FunctionComponent = () => {
  const [schools, setschools] = useState<School[]>([]);
  const navigate = useNavigate();
  const { user, setcurrent_school, current_school } = useContext(AuthContext);
  const { api, BAKEND_URL } = useContext(ApiContext);
  useEffect(() => {
    if (current_school) {
      navigate("/");
    }
  }, [current_school, navigate]);

  useEffect(() => {
    if (user !== undefined && user !== false) {
      api
        .get("/school")
        .then((response) => {
          setschools(response.data);
        })
        .catch(() => {
          return;
        });
    }
  }, [api, user]);

  return (
    <div className="view">
      <Grid columns={3}>
        {schools.map((school, key) => (
          <Link
            to={"/"}
            onClick={(e) => {
              e.preventDefault();
              if (setcurrent_school && school.id) {
                setcurrent_school(parseFloat(school.id));
              }
            }}
            key={key}
          >
            <Card>
              <Flexbox className="aic" gap>
                <img
                  src={school.image === null ? school_image_default : BAKEND_URL + "" + school.image}
                  alt={school.name}
                  style={{ borderRadius: "50%" }}
                  className="select_school_image"
                />
                <div className="data">
                  <Heading type="3">{school.name}</Heading>
                  <Flexbox gap>
                    <Flexbox className="aic" gap>
                      <FiMapPin size={16} className="flex lh-0" />
                      {school.location}
                    </Flexbox>
                    <Flexbox className="aic" gap>
                      <FiHome size={16} className="flex lh-0" />
                      {school.classes?.length}
                    </Flexbox>
                    <Flexbox className="aic" gap>
                      <FiUsers size={16} className="flex lh-0" />
                      {school.users?.length}
                    </Flexbox>
                  </Flexbox>
                </div>
              </Flexbox>
            </Card>
          </Link>
        ))}
      </Grid>
    </div>
  );
};
