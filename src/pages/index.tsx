import { Typography } from "@mui/material";
import Layout from "components/layouts/Layout";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout>

<Typography variant="h1" color="primary">
      Hola mundo
    </Typography>
    </Layout>
  );
};

export default HomePage;
