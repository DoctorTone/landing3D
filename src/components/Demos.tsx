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
              <Img src="./images/product.jpg" alt="projects" />
            </a>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Product Preview
            </Typography>
            <Typography
              className="paddingProjects"
              variant="body1"
              sx={{ textAlign: "justify" }}
            >
              <p>
                One of the most obvious ways to utilise 3D technology on your
                site is to showcase products that you sell. Many such sites will
                offer some configuration options but visitors don't have to go
                straight to the selection process. Sometimes a landing page with
                a realisitic model of one of your flagship products will help
                entice the visitors to explore your site further.
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5, background: "#404040", borderRadius: "20px" }}>
        <Grid container spacing={2} sx={{ mt: 3, padding: "30px" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Complete Website
            </Typography>
            <Typography
              className="paddingProjects"
              variant="body1"
              sx={{ textAlign: "justify" }}
            >
              <p>
                3D websites don't have to stop with a landing page, they can be
                extended to show a theme throughout a number of pages or across
                your whole site. Ultimately the technology can be used to
                construct your entire site in 3D.
              </p>
              <p>
                This replaces the traditional UI elements with 3D versions, but
                still keeps some 2D elements to aid in navigation, etc.
              </p>
              <p>
                This has the possibility to transform the visit into a virtual
                experience. This would be ideal for visitor attractions,
                museums, historic sites or to take your customers on a guided
                tour of your business.
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
