import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Img = styled("img")({
  display: "block",
  borderRadius: "20px",
  border: "2px solid yellow",
  width: "100%",
});

const Projects = () => {
  return (
    <Container sx={{ mb: 3 }}>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <a
              href="https://www.youtube.com/watch?v=iM7GL6MC7M4&t=2s"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img src="./images/background.jpg" alt="projects" />
            </a>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Subtle Background
            </Typography>
            <Typography
              className="paddingProjects"
              variant="body1"
              sx={{ textAlign: "justify" }}
            >
              <p>
                A subtle 3D background can convey all sorts of information to
                your visitors. It can show that you are using a novel, cutting
                edge technology, it can show your brand in a more innovative way
                - imagine that the background consisted of your company logo, or
                models of some of your products. You could control the motion
                with your mouse, or use physics and watch all the models bounce
                off each other!
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Animated Introduction
            </Typography>
            <Typography
              className="paddingProjects"
              variant="body1"
              sx={{ textAlign: "justify" }}
            >
              <p>
                Most websites have their company logo on their site, but 3D
                technolgy can really bring it to life. It can be a central theme
                on your landing page and when combined with a number of enhanced
                effects it can really make your site stand out.
              </p>
              <p>
                There are also a lot of opportunities to customise the look and
                feel, such as multiple lights, more complex animations,
                additional elements in the scene, there are endless
                possibilities.{" "}
              </p>
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <a
              href="https://www.youtube.com/watch?v=iM7GL6MC7M4&t=2s"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img src="./images/landing.jpg" alt="projects" />
            </a>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <a
              href="https://www.youtube.com/watch?v=iM7GL6MC7M4&t=2s"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img src="./images/consult.jpg" alt="projects" />
            </a>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Product/Service Preview
            </Typography>
            <Typography
              className="paddingProjects"
              variant="body1"
              sx={{ textAlign: "justify" }}
            >
              <p>
                Imagine a virtual gallery where you can experience the art as if
                you were relly there. Walk up to a painting to see the brush
                strokes or wander around the many rooms of a gallery or
                exhibition.
              </p>
              <p>
                The pieces look stunning as they are 3D scans of the originals.
                This opens up the possibility of artists being able to display
                and sell their work from anywhere in the world. We can even
                create copies of famous pieces, so that you could get a chance
                to see a Da Vinci, a Goya or a Constable up close!
              </p>
              <p>
                For the ultimate sense of realism, you can view the pieces in VR
                - seeing the pieces through a headset takes the experience to
                another level!
              </p>
              <p>
                The ArtXR technology has now been used in real world art
                galleries to showcase work like never before. Click on the image
                for a video of the technlogy in action.
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Full 3D Website
            </Typography>
            <Typography
              className="paddingProjects"
              variant="body1"
              sx={{ textAlign: "justify" }}
            >
              <p>
                Imagine a virtual gallery where you can experience the art as if
                you were relly there. Walk up to a painting to see the brush
                strokes or wander around the many rooms of a gallery or
                exhibition.
              </p>
              <p>
                The pieces look stunning as they are 3D scans of the originals.
                This opens up the possibility of artists being able to display
                and sell their work from anywhere in the world. We can even
                create copies of famous pieces, so that you could get a chance
                to see a Da Vinci, a Goya or a Constable up close!
              </p>
              <p>
                For the ultimate sense of realism, you can view the pieces in VR
                - seeing the pieces through a headset takes the experience to
                another level!
              </p>
              <p>
                The ArtXR technology has now been used in real world art
                galleries to showcase work like never before. Click on the image
                for a video of the technlogy in action.
              </p>
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <a
              href="https://www.youtube.com/watch?v=iM7GL6MC7M4&t=2s"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img src="./images/portfolio2.jpg" alt="projects" />
            </a>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
