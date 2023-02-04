import { Box } from "@mui/material";
import Navbar from "components/ui/Navbar";
import Head from "next/head";
import { FC } from "react";

interface Props {
  title?: string;
  children:any

}

const Layout: FC<Props> = ({ title = "OpenJira", children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar/>
    {/* <SliderBar></SliderBar> */}

      <Box sx={{ padding: "10px 20px" }}>

        {children}
      </Box>
    </Box>
  );
};

export default Layout;
