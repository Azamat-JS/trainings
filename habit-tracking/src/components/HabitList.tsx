import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../app/store'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import CheckCircleIcon  from '@mui/icons-material/CheckCircle'
import DeleteIcon  from '@mui/icons-material/Delete'
import { toggleHabit } from '../app/habitSlice'

const HabitList:React.FC = () => {
  const {habits} =  useSelector((state:RootState) => state.habits);
  const dispatch = useDispatch();

  const today = new Date().toISOString().split('T')[0];

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, mt: 4}}>
        {habits.map((habit) => {
            return <Paper key={habit.id} elevation={2} sx={{p: 2}}>
                <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
                    <Grid>
                        <Typography variant='h6'>{habit.name}</Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {habit.frequency}
                        </Typography>
                    </Grid>
                    <Grid>
                        <Box sx={{display: "flex", justifyContent: 'flex-end', gap: 1}}>
                            <Button variant='outlined'
                                color={
                                    habit.completedDates.includes(today) ? 'success' : 'primary'
                                }
                                startIcon={<CheckCircleIcon/>}
                                onClick={() => dispatch(toggleHabit({id: habit.id, date:today}))}
                            >
                                {habit.completedDates.includes(today) 
                                ? "Completed"
                                : "Mark Complete"}
                            </Button>
                            <Button 
                                variant='outlined'
                                color='error'
                                startIcon={<DeleteIcon/>}
                                >
                                Delete
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        })}
    </Box>
  )
}

export default HabitList