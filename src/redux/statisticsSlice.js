import { createSlice } from "@reduxjs/toolkit";

const statisticsSlice = createSlice({
    name: 'statistics',
    initialState: {
        statistics: {
            good: 0,
            bad: 0,
            neutral: 0
        }
    },
    reducers: {
        addGood(state) {
            state.statistics.good++
        },
        addBad(state){
            state.statistics.bad++
        },
        addNeutral(state){
            state.statistics.neutral++;
        }
    }
})

export const { addGood, addBad, addNeutral } = statisticsSlice.actions;
export const statisticsReducer = statisticsSlice.reducer;