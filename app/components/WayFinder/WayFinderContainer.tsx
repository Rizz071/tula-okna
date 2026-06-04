import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import WayFinderCard from "@/app/components/WayFinder/WayFinderCard";
import { IButtonImage } from "../../lib/types";
import ResponsiveHeader_H1 from "../Article/ResponsiveHeader_H1";

interface Props {
  mainTitle: string;
  mainTitleDescription: string;
  buttonsArray: IButtonImage[];
}

const WayFinderContainer = ({
  mainTitle,
  mainTitleDescription,
  buttonsArray,
}: Props) => {
  return (
    <Container maxWidth={"lg"}>
      <Grid
        container
        columnSpacing={1}
        rowSpacing={6}
        direction={"row"}
        sx={{
          mt: 8,
          justifyContent: "space-evenly",
        }}
      >
        <Grid size={{ xs: 12 }}>
          <ResponsiveHeader_H1 text={mainTitle} />
          <Typography
            sx={{
              textAlign: "center",
            }}
          >
            {mainTitleDescription}
          </Typography>
        </Grid>

        {buttonsArray.map((button, index) => {
          return (
            <Grid
              key={index}
              size={{ xs: 12, md: 5 }}
              sx={{
                maxWidth: 300,
              }}
            >
              <WayFinderCard
                caption={button.caption}
                subCaption={button.subCaption}
                image={button.image}
                link={button.link}
                description={button.description}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default WayFinderContainer;
