import { Provider } from "react-redux"
import store from './app/store.ts'
import { Container, Typography } from "@mui/material"
import AddHabitForm from "./components/AddHabitForm.tsx"
import HabitList from "./components/HabitList.tsx"
import HabitStats from "./components/HabitStats.tsx"


const App = () => {
    return (
        <Provider store={store}>
            <Container maxWidth="md">
                <Typography component="h1" variant="h2" align="center">Habit Tracker</Typography>
                <AddHabitForm />
                <HabitList />
                <HabitStats />
            </Container>
        </Provider>
    )
}

export default App