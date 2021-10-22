import React, { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';
import { RootStackParamList } from '../RootPagesList';

import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

interface RouteParams {
  appointmentDate: string;
}

type appointmentCreatedScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation<appointmentCreatedScreenProps>();
  const { params } = useRoute();
  const routeParams = params as RouteParams;

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [{ name: 'Dashboard' }],
      index: 0,
    });
  }, [reset]);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />
      <Title>Agendamento concluído</Title>
      <Description>{routeParams.appointmentDate}</Description>
      <OkButton onPress={() => {}}>
        <OkButtonText onPress={handleOkPressed}>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
