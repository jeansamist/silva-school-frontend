import { School } from "@silva-school-frontend/models";
import { Grid } from "@silva-school-frontend/ui";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectSchoolBox } from "../Components/SelectSchoolBox";
import { ApiContext } from "../Contexts/ApiContext";
import { AuthContext } from "../Contexts/AuthContext";

export const SelectSchoolView: FunctionComponent = () => {
  const [schools, setschools] = useState<School[]>([]);
  const navigate = useNavigate();
  const { user, current_school } = useContext(AuthContext);
  const { api } = useContext(ApiContext);
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
          <SelectSchoolBox {...school} key={key} />
        ))}
      </Grid>
    </div>
  );
};
