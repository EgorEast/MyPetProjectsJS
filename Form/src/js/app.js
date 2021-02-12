const reactComponent = React.Component;
const createElement = React.createElement;

class App extends reactComponent {
	render() {
		return createElement(
			'div',
			{
				className: 'form',
			},
			createElement(
				'h1',
				{
					key: 'headerForm',
					className: 'form-header',
				},
				'Form'
			),
			[
				createElement(
					'div',
					{
						key: `headingFirstNameContainer`,
						className: `element-container`,
					},
					[
						createElement(
							'div',
							{
								key: `headingFirstNameInput`,
								className: `heading-input`,
							},
							'First Name'
						),
						createElement('input', {
							key: `FirstNameInput`,
							className: `heading-input`,
							onInput: (event) => {
								if (event.target.value.match()) {
								}
							},
						}),
					]
				),
				createElement(
					'div',
					{
						key: `headingLastNameContainer`,
						className: `element-container`,
					},
					[
						createElement(
							'div',
							{
								key: `headingLastNameInput`,
								className: `heading-input`,
							},
							'Last Name'
						),
						createElement('input', {
							key: `LastNameInput`,
							className: `heading-input`,
						}),
					]
				),
				createElement(
					'div',
					{
						key: `headingNumberContainer`,
						className: `element-container`,
					},
					[
						createElement(
							'div',
							{
								key: `headingNumberInput`,
								className: `heading-input`,
							},
							'Number'
						),
						createElement('input', {
							key: `NumberInput`,
							className: `heading-input`,
						}),
					]
				),
				createElement(
					'div',
					{
						key: `headingEmailContainer`,
						className: `element-container`,
					},
					[
						createElement(
							'div',
							{
								key: `headingEmailInput`,
								className: `heading-input`,
							},
							'Email'
						),
						createElement('input', {
							key: `EmailInput`,
							className: `heading-input`,
						}),
					]
				),
			]
		);
	}
}

ReactDOM.render(createElement(App), document.querySelector('.application'));
