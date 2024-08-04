// src/pages/clubes/TablaPosiciones.jsx
import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import club1 from './clubes/imagenes/club1.webp';
import club2 from './clubes/imagenes/club2.jpg';
import club3 from './clubes/imagenes/club3.jpg';
import club4 from './clubes/imagenes/club4.jpg';

export const equipos = [
  { id: 1, nombre: 'Club San Martin', logo: club2, categoria: 'Juvenil', ciudad: 'Santa Cruz', descripcion:"El Fenix cuenta con categorias juveniles y cadetes, es campeon de la Liga Garra, actualmente tiene 45 jugadores tanto en damas como varones.Aferrate a la victoria hazte que ella se aleje. " },
  { id: 2, nombre: 'Club Olympic', logo: club1, categoria: 'Adultos', ciudad: 'La Paz', descripcion:"El Club Oplympic cuenta con categorias juveniles y cadetes, es campeon de la Liga Garra, actualmente tiene 45 jugadores tanto en damas como varones.Aferrate a la victoria hazte que ella se aleje. " },
  { id: 3, nombre: 'Club Vipers', logo: club3, categoria: 'Juvenil', ciudad: 'Cochabamba', descripcion:"El club vipers cuenta con categorias juveniles y cadetes, es campeon de la Liga Garra, actualmente tiene 45 jugadores tanto en damas como varones.Aferrate a la victoria hazte que ella se aleje. " },
  { id: 4, nombre: 'Club Fenix', logo: club4, categoria: 'Adultos', ciudad: 'Santa Cruz', descripcion:"El Fenix cuenta con categorias juveniles y cadetes, es campeon de la Liga Garra, actualmente tiene 45 jugadores tanto en damas como varones.Aferrate a la victoria hazte que ella se aleje. " },
  { id: 5, nombre: 'Club Albert Einstein', logo:club1, categoria: 'Juvenil', ciudad: 'Sucre', descripcion:"El Club Albert Einstein cuenta con categorias juveniles y cadetes, es campeon de la Liga Garra, actualmente tiene 45 jugadores tanto en damas como varones.Aferrate a la victoria hazte que ella se aleje. " },
  { id: 6, nombre: 'Club Don Bosco', logo:club3, categoria: 'Adultos', ciudad: 'Santa Cruz', descripcion:"El Club Don Bosco cuenta con categorias juveniles y cadetes, es campeon de la Liga Garra, actualmente tiene 45 jugadores tanto en damas como varones.Aferrate a la victoria hazte que ella se aleje. "},
  { id: 7, nombre: 'Club Panteras', logo: club2, categoria: 'Juvenil', ciudad: 'Tarija', descripcion:"El club Panteras cuenta con categorias juveniles y cadetes, es campeon de la Liga Garra, actualmente tiene 45 jugadores tanto en damas como varones.Aferrate a la victoria hazte que ella se aleje. "},
  { id: 8, nombre: 'Club Vinto', logo:club1, categoria: 'Adultos', ciudad: 'La Paz', descripcion:"El Club Vinto cuenta con categorias juveniles y cadetes, es campeon de la Liga Garra, actualmente tiene 45 jugadores tanto en damas como varones.Aferrate a la victoria hazte que ella se aleje. "},
];

// Añade datos adicionales necesarios
const equiposConEstadisticas = equipos.map((equipo, index) => ({
  ...equipo,
  partidosJugados: Math.floor(Math.random() * 10) + 1, // Datos inventados
  partidosGanados: Math.floor(Math.random() * 5) + 1, // Datos inventados
  partidosPerdidos: Math.floor(Math.random() * 5) + 1, // Datos inventados
  setsGanados: Math.floor(Math.random() * 20) + 1 // Datos inventados
})).sort((a, b) => b.setsGanados - a.setsGanados); // Ordena por sets ganados

const TablaPosiciones = () => {
  return (
    
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Tabla de Posiciones
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Logo</TableCell>
              <TableCell>Partidos Jugados</TableCell>
              <TableCell>Partidos Ganados</TableCell>
              <TableCell>Partidos Perdidos</TableCell>
              <TableCell>Sets Ganados</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {equiposConEstadisticas.map((equipo) => (
              <TableRow key={equipo.id}>
                <TableCell>{equipo.nombre}</TableCell>
                <TableCell>
                  <img src={equipo.logo} alt={equipo.nombre} style={{ width: 50, height: 50 }} />
                </TableCell>
                <TableCell>{equipo.partidosJugados}</TableCell>
                <TableCell>{equipo.partidosGanados}</TableCell>
                <TableCell>{equipo.partidosPerdidos}</TableCell>
                <TableCell>{equipo.setsGanados}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TablaPosiciones;