import { Icon } from 'semantic-ui-react';
import logo from '../assets/MCrender.png';
import styles from './Header.module.scss';

const Header = () => {
	return (
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
	);
};

export default Header;
