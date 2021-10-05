import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootPagesList';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
} from './styles';

type dashboardScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { navigate } = useNavigation<dashboardScreenProps>();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo, {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>
        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar
            source={{
              uri: 'https://gestor.fiorilli.com.br/administrador.dll/cache/administrador_exe/n0/res/__177E96801EBBC96337DE776A.png',
            }}
          />
        </ProfileButton>
      </Header>
    </Container>
  );
};

export default Dashboard;
