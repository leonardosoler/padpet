// Importe as bibliotecas necessárias
import React, { useState, useEffect } from 'react';
import { Typography, Paper, Button, CircularProgress } from '@mui/material';
import axios from 'axios';

// Componente UserProfile
const UserProfile = () => {
  // Estado para armazenar as informações do usuário
  const [userData, setUserData] = useState(null);
  // Estado para controlar o carregamento
  const [loading, setLoading] = useState(true);

  // Função para buscar informações do usuário
  const fetchUserData = async () => {
    try {
      const response = await axios.get('URL_DA_API_AQUI'); // Substitua pela URL da sua API
      setUserData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar informações do usuário:', error);
    }
  };

  // Efeito para buscar informações do usuário ao montar o componente
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Perfil do Usuário
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        userData && (
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6" gutterBottom>
              Nome: {userData.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: {userData.email}
            </Typography>
            {/* Adicione mais informações do usuário conforme necessário */}
            <Button variant="contained" color="primary">
              Editar Perfil
            </Button>
          </Paper>
        )
      )}
    </div>
  );
};

export default UserProfile;
