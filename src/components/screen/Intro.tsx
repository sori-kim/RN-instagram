import Button from '../shared/Button';
import { IC_MASK } from '../../utils/Icons';
import React from 'react';
import { RootStackNavigationProps } from '../navigation/RootStackNavigator';
import { User } from '../../types';
// eslint-disable-next-line sort-imports
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { getString } from '../../../STRINGS';
import styled from 'styled-components/native';
import { useAppContext } from '../../providers/AppProvider';
import { useThemeContext } from '../../providers/ThemeProvider';

// const Container = styled.View`
//   flex: 1;
//   align-self: stretch;
//   overflow: scroll;
//   background-color: ${({ theme }): string => theme.background};

//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   overflow: hidden;
// `;

// const ContentWrapper = styled.View`
//   flex-direction: column;
//   height: 100%;
//   width: 100%;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const ButtonWrapper = styled.View`
//   position: absolute;
//   flex-direction: column;
//   bottom: 40px;
//   width: 85%;
//   align-self: center;
// `;

// const StyledText = styled.Text`
//   font-size: 18px;
//   line-height: 27px;
//   color: ${({ theme }): string => theme.fontColor};
// `;

// interface Props {
//   navigation: RootStackNavigationProps<'Intro'>;
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputWrapper: {
    padding: 10,
    alignItems: 'stretch',
  },

  input: {
    height: 40,
    width: 320,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fafafa',
    borderRadius: 4,
    borderColor: 'grey',
    borderWidth: 0.5,
  },

  forget: {
    color: '#0095f6',
    width: 320,
    textAlign: 'right',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 50,
  },

  button: {
    backgroundColor: '#0095f6',
    width: 320,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    opacity: 0,
  },

  btnTitle: {
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
  },
});

function Intro() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/logo_text.png')}
      />
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <TextInput style={styles.input} placeholder="비밀번호" />
      </View>
      <Text style={styles.forget}>비밀번호를 잊으셨나요?</Text>
      <TouchableOpacity style={styles.button} underlayColor="#0095f6">
        <Text style={styles.btnTitle}>로그인</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// function Intro(props: Props): React.ReactElement {
//   let timer: number;
//   const { state: { user }, setUser } = useAppContext();
//   const { changeThemeType } = useThemeContext();
//   const [isLoggingIn, setIsLoggingIn] = React.useState<boolean>(false);

//   const onLogin = (): void => {
//     setIsLoggingIn(true);
//     timer = setTimeout(() => {
//       const user: User = {
//         displayName: 'dooboolab',
//         age: 30,
//         job: 'developer',
//       };
//       setUser(user);
//       setIsLoggingIn(false);
//       clearTimeout(timer);
//     }, 1000);
//   };

//   return (
//     <Container>
//       <ContentWrapper>
//         <StyledText
//           style={{
//             marginTop: 100,
//           }}
//         >
//           {user ? user.displayName : ''}
//         </StyledText>
//         <StyledText>{user ? user.age : ''}</StyledText>
//         <StyledText>{user ? user.job : ''}</StyledText>
//       </ContentWrapper>
//       <ButtonWrapper>
//         <Button
//           testID="btn-login"
//           imgLeftSrc={IC_MASK}
//           isLoading={isLoggingIn}
//           onClick={(): void => onLogin()}
//           text={getString('LOGIN')}
//         />
//         <View style={{ marginTop: 8 }} />
//         <Button
//           testID="btn-navigate"
//           onClick={(): void => props.navigation.navigate('Temp', {
//             param: 'GO BACK',
//           })}
//           text={getString('NAVIGATE', { name: 'Temp' })}
//         />
//         <View style={{ marginTop: 8 }} />
//         <Button
//           testID="btn-theme"
//           onClick={(): void => changeThemeType()}
//           text={getString('CHANGE_THEME')}
//         />
//       </ButtonWrapper>
//     </Container>
//   );
// }

export default Intro;
