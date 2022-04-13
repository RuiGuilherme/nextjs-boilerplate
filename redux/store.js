import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import userReducer from './slices/userSlice'

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		userProfile: userReducer
	}
})
