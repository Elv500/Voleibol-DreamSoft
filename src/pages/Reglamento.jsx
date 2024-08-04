import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const Reglamento = () => {
  return (
    <div>
      <Grid container spacing={8} direction="row" justifyContent="space-evenly" alignItems="stretcj" p={4}>
            <Grid item xs={12} md={6} xl={3}>
                <Card sx={{
                    height: '100%',
                    overflow: 'auto',
                    boxShadow: 10,
                    mx: 'auto'
                    }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="250"
                    image="/gestos/seña1.png"
                    alt="Señal 1"
                    />
                    <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"  
                    >
                        Autorización de Saque
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Mover la mano para indicar la dirección del servicio.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
                <Card sx={{
                    height: '100%',
                    overflow: 'auto',
                    boxShadow: 10,
                    mx: 'auto'
                    }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="250"
                    image="/gestos/seña2.png"
                    alt="Señal 2"
                    />
                    <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"  
                    >
                        Equipo que Sirve
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Extender el brazo del lado del equipo que deberá sacar.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
                <Card sx={{
                    height: '100%',
                    overflow: 'auto',
                    boxShadow: 10,
                    mx: 'auto'
                    }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="250"
                    image="/gestos/seña3.png"
                    alt="Señal 3"
                    />
                    <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"  
                    >
                        Cambio de campo
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Levantar los brazos por delante y por detrás y girarlos alrededor del cuerpo.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
                <Card sx={{
                    height: '100%',
                    overflow: 'auto',
                    boxShadow: 10,
                    mx: 'auto'
                    }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="250"
                    image="/gestos/seña4.png"
                    alt="Señal 4"
                    />
                    <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"  
                    >
                        Tiempo de Descanso
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Posar la palma de una mano sobre los dedos de la otra, sostenida perticalmente (en forma de T).
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
                <Card sx={{
                    height: '100%',
                    overflow: 'auto',
                    boxShadow: 10,
                    mx: 'auto'
                    }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="250"
                    image="/gestos/seña5.png"
                    alt="Señal 5"
                    />
                    <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"  
                    >
                        Sustitución
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Rotación de un antebrazo alrededor del otro.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
                <Card sx={{
                    height: '100%',
                    overflow: 'auto',
                    boxShadow: 10,
                    mx: 'auto'
                    }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="250"
                    image="/gestos/seña6.png"
                    alt="Señal 6"
                    />
                    <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"  
                    >
                        Conducta incorrecta - Amonestación
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Mostrar una tarjeta amarilla para amonestación.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
                <Card sx={{
                    height: '100%',
                    overflow: 'auto',
                    boxShadow: 10,
                    mx: 'auto'
                    }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="250"
                    image="/gestos/seña7.png"
                    alt="Señal 7"
                    />
                    <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"  
                    >
                        Expulsión
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Mostrar una tarjeta roja para expulsión.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
                <Card sx={{
                    height: '100%',
                    overflow: 'auto',
                    boxShadow: 10,
                    mx: 'auto'
                    }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="250"
                    image="/gestos/seña8.png"
                    alt="Señal 8"
                    />
                    <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"  
                    >
                        Descalificación
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Mostrar las dos (2) tarjetas juntas para descalificación.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
      </Grid>
  </div>
  )
}

export default Reglamento