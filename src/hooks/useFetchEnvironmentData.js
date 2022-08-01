import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function useFetchEnvironmentData() {
  const params = useParams();
  const navigate = useNavigate();
  const environmentsData = useSelector((store) => store.envs.environmentsData);
  const environment = environmentsData[params.id];
  useEffect(() => {
    if (!environment) {
      return navigate("/", { replace: true });
    }
  }, [environment]);
  return environment;
}
