// imports
import styled from 'styled-components'
import { Grid, Container } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Styles
import styles from '@/styles/Home.module.css'

// Components
import Profile from '@/components/Profile'
import Footer from '@/components/Footer'

// Styled Components Example
const Count = styled.p`
	font-size: 2rem;
	color: red;
	font-weight: bold;
`

function Index() {
	const { t } = useTranslation('common')
	const router = useRouter()

	return (
		<Container>
			<Count className={styles.textRed}>{t('countText')}</Count>
			<Grid container direction="column" justifyContent="center" alignItems="center">
				<Profile />
				<Link href="/" locale={router.locale}>
					<a className={styles.textRed}>{t('main-page')}</a>
				</Link>
				<Footer />
			</Grid>
		</Container>
	)
}

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common']))
	}
})

export default Index
