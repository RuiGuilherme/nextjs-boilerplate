import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '@/redux/slices/counterSlice'
import { Button, Grid, Input } from '@mui/material'
import { useTranslation } from 'next-i18next'

// Redux and Mui(Material Ui) example
export default function Counter() {
	const count = useSelector((state) => state.counter.value)
	const dispatch = useDispatch()

	const [amount, setAmount] = useState(0)

	const { t } = useTranslation('common')

	return (
		<Grid container item direction="row" justifyContent="center" alignItems="center" lg={6} md={6} sm={6} xl={6} xs={6}>
			<Grid container item direction="column" justifyContent="center" alignItems="center" lg={12} md={12} sm={12} xl={12} xs={12}>
				<span id="btnCounter">{t('count', { count })}</span>
				<Button id="btnAdd" variant="outlined" aria-label="Aumentar o valor do contador" onClick={() => dispatch(increment())}>
					{t('add')} 1
				</Button>
				<Button id="btnRemove" variant="outlined" aria-label="Diminuir o valor do contador" onClick={() => dispatch(decrement())}>
					{t('remove')} 1
				</Button>
			</Grid>
			<hr />
			<Grid container item justifyContent="center" alignItems="center" lg={12} md={12} sm={12} xl={12} xs={12}>
				<Input
					id="input-amount"
					size="small"
					inputProps={{
						type: 'number'
					}}
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
				<Button id="btnSetAmount" variant="outlined" onClick={() => dispatch(incrementByAmount(amount))}>
					{t(amount < 0 ? 'decrement' : 'increment')}
				</Button>
				<Button id="btnReset" variant="outlined" onClick={() => setAmount(0)}>
					{t('reset')}
				</Button>
			</Grid>
		</Grid>
	)
}
