import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
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

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader

        action={
          <Typography
            variant='h5'
            color='textSecondary'
          >
            {accounting.formatMoney(8, "€")}
          </Typography>
        }
        title="Celeste"
        subheader="Ribera del Duero"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://admin.bodeboca.com/sites/default/files/bot-celeste-roble-2016_1_0_0_0_0_0_0.jpg"
        alt="foto vino celeste"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Color cereza oscuro y bien cubierto. Intenso aroma de frutos negros (cerezas), con un fino matiz ahumado.
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
              <p>&#11088;</p>
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Para recetas con carnes, cordero asado, todo tipo de aves, estofados y guisos. Servir entre 14-16ºC.
          </Typography>
          <Typography paragraph>
            Origen: DO Ribera del Duero.
            Puede disfrutarlo desde ahora, bien conservado aguantará 3-5 años.
            Graduación: 13,5% vol.
          </Typography>
          <Typography paragraph>
            Origen: DO Ribera del Duero.
            Puede disfrutarlo desde ahora, bien conservado aguantará 3-5 años.
            Graduación: 13,5% vol.
          </Typography>
          <Typography>
            Origen: DO Ribera del Duero.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
