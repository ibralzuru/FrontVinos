import  React from 'react';
import {
    List,
    ListItem,
   // ListItemIcon,
    ListItemText,
    Divider

} from '@mui/material';


const MenuBurguer = () => {


    return (
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemText>
                    Virtual-Wine
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                    Registro
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                   Login
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                    Carrito
                    </ListItemText>
                </ListItem>
                <Divider />
            </List>
        </div>
    )

}



export default MenuBurguer