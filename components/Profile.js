import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setName, setEmail, setPass, resetAll } from '@/redux/slices/userSlice'
import { Button, Grid, Input } from '@mui/material'
import { useTranslation } from 'next-i18next'

// Redux and Mui(Material Ui) example
export default function Profile() {
	const name = useSelector((state) => state.userProfile.name)
	const email = useSelector((state) => state.userProfile.email)
	const password = useSelector((state) => state.userProfile.password)
	const dispatch = useDispatch()

	const { t } = useTranslation('common')

	return (
		<Grid container item direction="row" justifyContent="center" alignItems="center" lg={6} md={6} sm={6} xl={6} xs={6}>
			<Grid container item direction="column" justifyContent="space-evenly" alignItems="center" lg={12} md={12} sm={12} xl={12} xs={12}>
				{/* show all userProfile and make a input to change all values */}
				<span id="spanUser">
					{t('user')}: {name}
				</span>
				<span id="spanEmail">
					{t('email')}: {email}
				</span>
				<span id="spanPass">
					{t('password')}: {password}
				</span>

				<Button id="btnReset" variant="outlined" aria-label={t('reset-all-values')} onClick={() => dispatch(resetAll())}>
					{t('reset-all-values')}
				</Button>

				{/* make a input to change name, email and password */}
				<Input id="input-name" size="small" onChange={(e) => dispatch(setName(e.target.value))} placeholder={t('placeholder-user')} />
				<Input id="input-email" size="small" onChange={(e) => dispatch(setEmail(e.target.value))} placeholder={t('placeholder-email')} />
				<Input id="input-pass" size="small" onChange={(e) => dispatch(setPass(e.target.value))} placeholder={t('placeholder-password')} />
			</Grid>
		</Grid>
	)
}
