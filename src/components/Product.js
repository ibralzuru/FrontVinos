import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton/* , { IconButtonProps } */ from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import { Link } from "react-router-dom";
import accounting from "accounting";
//import { Rating } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({ id, name, precio, images, description }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Link style={{ textDecoration: 'none' }} to={`/detalle/${id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <Typography
              variant='h5'
              color='textSecondary'
            >
              {accounting.formatMoney(precio, "€")}
            </Typography>
          }
          title={name}
          subheader=""
        />
        <CardMedia
          component="img"
          height="194"
          image={images}
          alt="foto vino "
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to Cart" >
            <AddShoppingCart fontSize='large' />
          </IconButton>
          <IconButton>
            {Array(4)
              .fill()
              .map((_, i) => (
                <p key={i}>&#11088;</p>
              ))}
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Maridaje</Typography>
            <Typography paragraph>
              Para recetas con carnes, cordero asado, todo tipo de aves, estofados y guisos. Servir entre 14-16ºC.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Link>
  );
}