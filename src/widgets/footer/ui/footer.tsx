import Image from 'next/image'
import Link from 'next/link'

import logo from '@/app/assets/images/logo-green.png'

import { AuthUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'
import { SubHeading } from '@/shared/ui/heading'

import { contactEmail, copyright, mainColumn, secondaryColumn, slogan, socials } from '../config'

import styles from './styles.module.scss'

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.column}>
				<div className={styles.logo}>
					<Image src={logo} alt="logo" width={48} height={48} />
					<p className={styles.siteName}>SimpleHost</p>
				</div>
				<div className={styles.slogan}>{slogan}</div>
				<div className={styles.copyright}>&copy; {copyright}</div>
			</div>
			<div className={styles.column}>
				<SubHeading className="uppercase text-2xl">Карта сайта</SubHeading>
				<div className={styles.nav}>
					<ul className={styles.navList}>
						{mainColumn.map((item) => (
							<li key={item.label} className={styles.navItem}>
								<Link href={item.url}>{item.label}</Link>
							</li>
						))}
					</ul>
					<ul className={styles.navList}>
						{secondaryColumn.map((item) => (
							<li key={item.label} className={styles.navItem}>
								<Link href={item.url}>{item.label}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className={styles.column}>
				<SubHeading className="uppercase text-2xl">Социальные сети</SubHeading>
				<ul className={styles.navList}>
					{socials.map((item) => (
						<li key={item.label} className={styles.navItem}>
							<Link href={item.url}>{item.label}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.column}>
				<Button asChild className="h-auto py-1 px-4 text-lg">
					<Link href={AuthUrls.signIn()}>Вход / Регистрация</Link>
				</Button>
				<div className={styles.contactUs}>
					<p>Связаться с нами:</p>
					<Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>
				</div>
			</div>
		</footer>
	)
}
