import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import App from '../pages/App';
import Assinaturas from '../pages/Assinaturas';
import Equipe from '../pages/Equipe';
import Home from '../pages/Home';
import Leitor18 from '../pages/Leitor18';
import Mangas from '../pages/Mangas';
import Recrutamento from '../pages/Recrutamento';

type DrawerParamList = {
  Home: undefined;
  Mangas: undefined;
  Recrutamento: undefined;
  Equipe: undefined;
  App: undefined;
  Assinaturas: undefined;
  Leitor18: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Mangas" component={Mangas} />
        <Drawer.Screen name="Recrutamento" component={Recrutamento} />
        <Drawer.Screen name="Equipe" component={Equipe} />
        <Drawer.Screen name="App" component={App} />
        <Drawer.Screen name="Assinaturas" component={Assinaturas} />
        <Drawer.Screen name="Leitor18" component={Leitor18} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
