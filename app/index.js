import { Redirect } from 'expo-router';
// Redireciona para login por padrão
// O AuthContext irá gerenciar o redirecionamento correto
export default function Index() {
    return <Redirect href="/(auth)/login" />
}