import {SpringConfig, useSpring} from '@react-spring/web';

export default function (config?: SpringConfig) {
	const [, api] = useSpring(() => ({y: 0}));

	let isStopped = false;
	const onWheel = () => {
		isStopped = true;
		window.removeEventListener('wheel', onWheel);
	};

	const scrollTo = (value?: Element | number | string | null, offset: number = 0) => {
		let y = 0;

		if (typeof value === 'number') {
			y = value;
		} else if (typeof value === 'string' || value?.nodeType === 1) {
			if (typeof value === 'string') {
				value = document.querySelector(value);
			}
			if (!value) {
				console.error('react-spring-scroll-to-hook: Element not found')
			} else {
				y = window.scrollY + value.getBoundingClientRect().top;
			}
		}

		y+=offset;

		window.addEventListener('wheel', onWheel);

		api.start({
			y,
			reset: true,
			from: {y: window.scrollY},
			config,
			onRest: () => {
				isStopped = false;
				window.removeEventListener('wheel', onWheel);
			},
			onChange: (_, ctrl) => {
				if (!isStopped) {
					window.scroll(0, ctrl.get().y);
				}
			},
		});
	};

	return {scrollTo};
};
