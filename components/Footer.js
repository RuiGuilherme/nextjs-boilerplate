import React, { useEffect, useState } from 'react'
import { Button, Grid } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

// Redux and Mui(Material Ui) example
export default function Footer() {
	const { t } = useTranslation('common')

	const [actualPath, setActualPath] = useState('/')

	useEffect(() => {
		// remove pt, en and es from the path
		setActualPath(window.location.pathname.replace(/\/pt|\/en|\/es/g, ''))
	}, [])

	return (
		<Grid container item direction="row" justifyContent="center" alignItems="center" lg={12} md={12} sm={12} xl={12} xs={12}>
			<Link href={actualPath} locale="en" passHref>
				<Button variant="outlined" aria-label={t('change-language-en')}>
					{t('change-language-en')}
				</Button>
			</Link>
			<Link href={actualPath} locale="es" passHref>
				<Button variant="outlined" aria-label={t('change-language-es')}>
					{t('change-language-es')}
				</Button>
			</Link>
			<Link href={actualPath} locale="pt" passHref>
				<Button variant="outlined" aria-label={t('change-language-pt')}>
					{t('change-language-pt')}
				</Button>
			</Link>
		</Grid>
	)
}
