import {SpringConfig, useSpring} from '@react-spring/web';

export default function(config?: SpringConfig) {
	const [, api] = useSpring(() => ({ y: 0 }));

	let isStopped = false;
	const onWheel = () => {
		isStopped = true;
		window.removeEventListener('wheel', onWheel);
	};

	const scrollTo = (value?: HTMLElement | number) => {
		let y = 0;

		if (typeof value === 'number') {
			y = value;
		} else if (value?.nodeType === 1) {
			y = window.scrollY + value.getBoundingClientRect().top;
		}

		window.addEventListener('wheel', onWheel);

		api.start({
			y,
			reset: true,
			from: { y: window.scrollY },
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

	return { scrollTo };
};
