import classNames from 'classnames';
import styles from './PersonalInfo.module.scss';

const PersonalInfo = ({ selectedProject }) => {
	return (
		<div
			className={classNames(styles.welcomeMessage, {
				[styles.slideIn]: !selectedProject,
			})}>
			<h1>Bienvenido</h1>
			<span>
				<p>
					¡Hola! Soy María José Cervantes, una apasionada desarrolladora web
					front-end con más de 2 años de experiencia. A lo largo de mi
					trayectoria, he tenido la oportunidad de trabajar en diversos entornos
					colaborativos y en equipos multidisciplinarios. Esta experiencia me ha
					permitido desarrollar habilidades de comunicación efectiva y trabajar
					de manera eficiente en proyectos conjuntos.
				</p>
				<p>
					Me encanta aprender y experimentar con nuevas tecnologías. Soy hábil
					en el diseño y creación de interfaces atractivas y funcionales.
					Disfruto trabajar en equipos colaborativos y tengo habilidades de
					comunicación efectiva.
				</p>
			</span>
		</div>
	);
};

export default PersonalInfo;
