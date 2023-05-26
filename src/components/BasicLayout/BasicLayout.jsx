import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import logo from '../../assets/MCrender.png';
import styles from './BasicLayout.module.scss';

const BasicLayout = ({ children }) => {
	const [hovered, setHovered] = useState(false);

	const handleHover = () => {
		setHovered(!hovered);
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.maininnerContainer}>
				{/* Top Corner */}
				<div className={styles.topLeft}>
					<svg
						className={styles.svgImage}
						onMouseEnter={handleHover}
						onMouseLeave={handleHover}
						width='300'
						height='300'
						xmlns='http://www.w3.org/2000/svg'>
						<defs>
							<linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'>
								<stop
									offset='0'
									stopColor={hovered ? '#5DDFEA' : '#FCA2C0'}
									className={styles.gradient1}
									style={{ transition: 'stop-color 0.3s' }}
								/>
								<stop
									offset='0.5'
									stopColor={hovered ? '#FCA2C0' : '#5DDFEA'}
									className={styles.gradient2}
									style={{ transition: 'stop-color 0.3s' }}
								/>
								<stop
									offset='1'
									stopColor={hovered ? '#5DDFEA' : '#FCA2C0'}
									className={styles.gradient1}
									style={{ transition: 'stop-color 0.3s' }}
								/>
							</linearGradient>
						</defs>
						<path
							fill='url(#grad1)'
							d='M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z'
						/>
					</svg>
				</div>

				<div className={styles.innerContainer}>
					<header>
						{/* Logo */}
						<div className={styles.logo}>
							<img src={logo} alt='Majo Cervantes' />
						</div>

						{/* Menu */}
						<div className={styles.menu}>
							<a
								href='https://gmail.com'
								className={styles.email}
								target='_blank'
								rel='noreferrer'>
								<Icon name='mail' size='large' />
							</a>

							<a
								href='https://github.com/MajoCervantes'
								target='_blank'
								rel='noreferrer'>
								<Icon name='github' size='large' />
							</a>

							<a
								href='https://www.npmjs.com/~majocervantes'
								target='_blank'
								rel='noreferrer'>
								<Icon name='npm' size='large' />
							</a>

							<a
								href='https://www.linkedin.com/in/majo-cervantes-4b0739224/'
								target='_blank'
								rel='noreferrer'>
								<Icon name='linkedin' size='large' />
							</a>
						</div>
					</header>
				</div>

				{/* Bottom Corner */}
				<div className={styles.bottomRight}>
					<svg
						className={styles.svgImage}
						onMouseEnter={handleHover}
						onMouseLeave={handleHover}
						width='300'
						height='300'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							id='bottom'
							fill='url(#grad1)'
							stopColor={hovered ? '#5DDFEA' : '#FCA2C0'}
							strokeWidth='1'
							d='M290.00,9.00 C290.00,9.00 291.00,35.00 291.00,35.00 291.00,35.00 291.00,93.00 291.00,93.00 291.00,93.00 291.00,291.00 291.00,291.00 291.00,291.00 9.00,291.00 9.00,291.00 11.96,286.86 23.62,274.21 28.00,272.60 29.77,271.95 32.12,272.01 34.00,272.00 34.00,272.00 84.00,272.00 84.00,272.00 84.00,272.00 272.00,272.00 272.00,272.00 272.00,272.00 272.00,92.00 272.00,92.00 272.00,92.00 272.00,35.00 272.00,35.00 272.00,35.00 272.60,28.00 272.60,28.00 272.60,28.00 290.00,9.00 290.00,9.00 Z'
						/>
					</svg>
				</div>

				<main className={styles.projectsOverview}>{children}</main>
			</div>
		</div>
	);
};

export default BasicLayout;
