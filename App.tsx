import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AuthProvider } from '@/src/auth/AuthContext'
import { AppNavigator } from '@/src/navigation/AppNavigator'
import { colors } from '@/src/theme/colors'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  )
}
