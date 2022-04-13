import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	name: 'Usuario',
	email: 'usuario@user.com',
	password: 'aaabbbxxx'
}

export const userSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setName: (state, action) => {
			state.name = action.payload
		},
		setEmail: (state, action) => {
			state.email = action.payload
		},
		setPass: (state, action) => {
			state.password = action.payload
		},
		resetAll: (state) => {
			state.name = ''
			state.email = ''
			state.password = ''
		}
	}
})

export const { setName, setEmail, setPass, resetAll } = userSlice.actions

export default userSlice.reducer
