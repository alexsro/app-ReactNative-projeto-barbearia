export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Dashboard: undefined;
  CreateAppointment: { providerId: string };
  Profile: undefined;
  AppointmentCreated: { appointmentDate: string };
};
